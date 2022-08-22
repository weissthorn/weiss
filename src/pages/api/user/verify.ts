import { userProp } from '../../../interfaces/user';
import signale from 'signale';
import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth, code } from '../../../components/api/utils';
import { verifyTemplate } from '../../../components/api/mail-template';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await User.get(req.body.id)
        .then(async (data: userProp) => {
          const _code = code();
          verifyTemplate(data.email, data.name, _code);
          res.send({ success: true, data: data.id, code: _code });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default create;
