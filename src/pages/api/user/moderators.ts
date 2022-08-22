import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';
import { userProp } from 'interfaces/user';

const moderators = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await User.filter((moderator: any) =>
        moderator('role')
          .match('moderator')
          .or(moderator('role').match('admin'))
      )
        .then(async (data: any) => {
          data = data.map((item: userProp) => ({
            ...item,
            ...{ password: undefined }
          }));

          res.status(200).json({ success: true, data });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default moderators;
