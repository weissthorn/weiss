import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  r,
  LikeComment,
  User,
  Comment,
  Notification,
  Discussion
} from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      const { postId, userId, discussionId } = req.body;
      await LikeComment.filter({ postId, userId })
        .then(async (likeCount: any) => {
          if (likeCount.length === 1) {
            await LikeComment.filter({ postId, userId })
              .delete()
              .then(() => {
                res.send({ success: true, data: {}, like: false });
              });
          } else {
            let like = new LikeComment(req.body);
            await like.save().then(async (data: any) => {
              if (data.id) {
                await User.get(data.userId).then(async (p: any) => {
                  await Discussion.get(discussionId).then(async (ds: any) => {
                    await Comment.get(postId)
                      .getJoin()
                      .then(async (d: any) => {
                        const notify = new Notification({
                          type: 'post',
                          sender: data.userId,
                          receiver: d.userId,
                          name: p.name,
                          filterType: 'like-comment',
                          action: `${ds.slug}#${d.slug}`
                        });
                        await notify.save().then(() => {});
                      });
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
