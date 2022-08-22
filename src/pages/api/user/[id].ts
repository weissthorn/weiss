import { discussionProp } from './../../../interfaces/discussion';
import { userProp } from './../../../interfaces/user';
import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User, Discussion } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await User.get(req.query.id)
        .getJoin()
        .then(async (data: userProp) => {
          if (data.id) {
            data = { ...data, password: undefined };
            await Discussion.filter({ userId: data.id }).then(
              (discussions: discussionProp[]) => {
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
