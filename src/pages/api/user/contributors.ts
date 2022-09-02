import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, User, Discussion } from '../../../components/api/model';
import { asyncForEach, withAuth } from '../../../components/api/utils';
import { userProp } from 'interfaces/user';
import { discussionProp } from 'interfaces/discussion';

const contributors = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await User.orderBy(r.desc('createdAt'))
        .limit(10)
        .then(async (data: any) => {
          data = data.map((item: userProp) => ({
            ...item,
            ...{ password: undefined }
          }));

          asyncForEach(data, async (item: userProp) => {
            await Discussion.filter({ userId: item.id }).then(
              (discussions: discussionProp[]) => {
                item.discussion = discussions.length;
                item = {
                  ...item
                };
              }
            );
          }).finally(() => {
            data = data.sort((a: any, b: any) => b.discussion - a.discussion);
            res.status(200).json({ success: true, data });
          });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default contributors;
