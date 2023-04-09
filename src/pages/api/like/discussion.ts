import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  r,
  LikeDiscussion,
  User,
  Discussion,
  Notification
} from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      const { discussionId, userId } = req.body;
      await LikeDiscussion.filter({ discussionId, userId })
        .then(async (likeCount: any) => {
          if (likeCount.length === 1) {
            await LikeDiscussion.filter({ discussionId, userId })
              .delete()
              .then(() => {
                res.send({ success: true, data: {}, likediscussion: false });
              });
          } else {
            let like = new LikeDiscussion(req.body);
            await like.save().then(async (data: any) => {
              if (data.id) {
                await User.get(data.userId).then(async (p: any) => {
                  await Discussion.get(req.body.discussionId)
                    .getJoin()
                    .then(async (ds: any) => {
                      const notify = new Notification({
                        type: 'post',
                        sender: data.userId,
                        receiver: ds.userId,
                        name: p.name,
                        filterType: 'like-post',
                        action: `${ds.slug}`
                      });
                      await notify.save().then(() => {});
                    });
                  res.send({ success: true, data, like: true });
                });
              } else {
                res.send({
                  success: false,
                  message: 'Failed. Please try again later.'
                });
              }
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
