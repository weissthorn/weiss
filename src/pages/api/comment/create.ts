import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  r,
  Comment,
  Settings,
  User,
  Discussion,
  Notification
} from '../../../components/api/model';
import { withAuth, slug } from '../../../components/api/utils';
import { settingsProp } from './../../../interfaces/settings';

const getSettings = async () => {
  return await Settings.orderBy(r.asc('createdAt'))
    .then((config: any) => {
      config = config[0];
      return config;
    })
    .catch((err: any) => signale.fatal(err));
};

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      req.body.slug = slug();
      let comment = new Comment(req.body);
      await comment
        .save()
        .then(async (data: any) => {
          if (data.id) {
            let config: settingsProp = await getSettings();
            await User.get(data.userId).then(async (p: any) => {
              await User.get(data.userId)
                .update({
                  coin: Number(p.coin + config.coin?.comment)
                })
                .then(async () => {
                  await Discussion.get(req.body.discussionId)
                    .getJoin()
                    .then(async (d: any) => {
                      const notify = new Notification({
                        sender: data.userId,
                        receiver: d.userId,
                        name: p.name,
                        filterType: 'reply-post',
                        action: `${d.slug}#${data.slug}`
                      });
                      await notify.save().then(() => {});
                    });
                  res.send({ success: true, data });
                });
            });
          } else {
            res.send({
              success: false,
              message: 'Failed. Please try again later.'
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
