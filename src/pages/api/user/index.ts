import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, User, Discussion } from '../../../components/api/model';
import { asyncForEach, withAuth } from '../../../components/api/utils';
import { userProp } from 'interfaces/user';
import { discussionProp } from 'interfaces/discussion';

const index = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let offset = 0;
      let { page, limit }: any = req.query;
      page = Number(page);
      limit = Number(limit);

      if (page > 1) {
        offset = limit * page;
        offset = offset - limit;
      }

      await User.orderBy(r.desc('createdAt'))
        .skip(offset)
        .limit(limit)
        .then(async (data: userProp[]) => {
          data = data.map((item: userProp) => ({
            ...item,
            ...{ password: undefined }
          }));

          await User.orderBy(r.desc('createdAt')).then(async (c: any) => {
            let members: userProp[] = [];
            await asyncForEach(data, async (item: userProp) => {
              await Discussion.filter({ userId: item.id }).then(
                (discussions: discussionProp[]) => {
                  item = { ...item, discussion: discussions.length };
                  members.push(item);
                }
              );
            }).finally(() => {
              res
                .status(200)
                .json({ success: true, data: members, count: c.length });
            });
          });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default index;
