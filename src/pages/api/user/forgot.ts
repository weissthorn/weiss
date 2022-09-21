import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth, code } from '../../../components/api/utils';
import { forgotTemplate } from '../../../components/api/mail-template';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await User.filter({ email: req.body.email })
        .then(async (data: any) => {
          if (data.length === 1) {
            data = data[0];
            const _code = code();
            await forgotTemplate(data.email, data.name, _code);
            res.send({ success: true, data: data.id, code: _code });
          } else {
            res.send({
              success: false,
              message: 'Email does not exists in our record.'
            });
          }
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default create;
