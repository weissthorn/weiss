import { userProp } from '../../../interfaces/user';
import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, User } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const checkUsername = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { query } = req.query;

      await User.filter((profile: any) => profile('username').match(query))
        .then((data: any) => {
          if (data.length === 1) {
            res.status(200).json({ success: false, data: 'Not available' });
          }
          res.status(200).json({ success: true, data: 'Available' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default checkUsername;
