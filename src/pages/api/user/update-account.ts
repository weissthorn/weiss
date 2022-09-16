import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';
import bcrypt from 'bcryptjs';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      const { id, name, email, username, password } = req.body;
      await User.get(id)
        .then(async (data: any) => {
          data = data.id ? data : { password: '' };
          const match = bcrypt.compareSync(password, data.password);

          if (match) {
            await User.get(id)
              .update({ id, name, email, username })
              .then(() => {
                res
                  .status(200)
                  .json({ success: true, data: 'Account Updated' });
              });
          } else {
            res.send({
              success: false,
              message: 'Unable to make changes! Current password is incorrect.'
            });
          }
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default update;
