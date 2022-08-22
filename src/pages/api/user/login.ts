import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth, validateEmail } from '../../../components/api/utils';
import bcrypt from 'bcrypt';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let access = validateEmail(req.body.email)
        ? { email: req.body.email }
        : { username: req.body.email };
      await User.filter(access)
        .then((data: any) => {
          data = data.length ? data[0] : { password: '' };
          const match = bcrypt.compareSync(req.body.password, data.password);

          if (match) {
            delete data.password;
            data.status !== 'active'
              ? res.send({
                  success: false,
                  message:
                    'Account is not active. Please contact the community admin.'
                })
              : res.send({ success: true, data });
          } else {
            res.send({
              success: false,
              message: 'Incorrect email/username or password!'
            });
          }
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default login;
