import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User, Discussion } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await User.filter({ username: req.query.username })
        .getJoin()
        .then(async (data: any) => {
          if (data.length) {
            data = data[0];
            data = { ...data, password: undefined };
            await Discussion.filter({ userId: data.id }).then(
              (discussions: any) => {
                data.discussion = discussions.length;
                // data.comment = discussions.length;
                res.status(200).json({ success: true, data });
              }
            );
          } else {
            res.status(200).json({ success: false, message: 'User not found' });
          }
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default user;
