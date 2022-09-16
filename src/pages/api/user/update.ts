import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';
import bcrypt from 'bcryptjs';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      if (req.body.password) {
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(req.body.password, salt);
        req.body.password = password;
      }

      await User.get(req.body.id)
        .update(req.body)
        .then(() => {
          res.status(200).json({ success: true, data: 'Updated' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default update;
