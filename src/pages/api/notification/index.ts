import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Notification, User } from '../../../components/api/model';
import { asyncForEach, withAuth } from '../../../components/api/utils';

const index = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let offset = 0;
      let { page, limit, userId }: any = req.query;
      page = Number(page);
      limit = Number(limit);

      if (page > 1) {
        offset = limit * page;
        offset = offset - limit;
      }

      await Notification.orderBy(r.desc('createdAt'))
        .filter({ receiver: userId })
        .skip(offset)
        .limit(limit)
        .then(async (data: any) => {
          let notifications: any = [];
          asyncForEach(data, async (item: any) => {
            if (item.type !== 'admin') {
              await User.get(item.sender).then((user: any) => {
                notifications.push({
                  ...item,
                  profile: { ...user, password: undefined }
                });
              });
            } else {
              notifications.push(item);
            }
          }).finally(async () => {
            await Notification.orderBy(r.desc('createdAt'))
              .filter({
                receiver: userId
              })
              .then((n: any) => {
                res.status(200).json({
                  success: true,
                  data: notifications,
                  count: n.length
                });
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
