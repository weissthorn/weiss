import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  r,
  Comment,
  LikeComment,
  Reply,
  LikeReply
} from '../../../../components/api/model';
import { asyncForEach, withAuth } from '../../../../components/api/utils';

const getReplies = async (id: string) => {
  return new Promise(async (resolve) => {
    await Reply.orderBy(r.asc('createdAt'))
      .filter({ replyId: id })
      .getJoin()
      .then(async (data: any) => {
        let replies: any = [];
        await asyncForEach(data, async (item: any) => {
          await LikeReply.filter({ postId: item.id })
            .getJoin()
            .then((likes: any) => {
              replies.push({
                ...item,
                author: { ...item.author, password: undefined },
                likes: likes.map((l: any) => ({
                  ...l,
                  profile: { ...l.profile, password: undefined }
                }))
              });
            });
        }).finally(() => {
          resolve(replies);
        });
      })
      .catch((err: any) => signale.fatal(err));
  });
};

const comment = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let offset = 0;
      let { page, limit, id }: any = req.query;
      page = Number(page);
      limit = Number(limit);

      if (page > 1) {
        offset = limit * page;
        offset = offset - limit;
      }

      await Comment.orderBy(r.asc('createdAt'))
        .filter({ discussionId: id })
        .skip(offset)
        .limit(limit)
        .getJoin()
        .then(async (data: any) => {
          let comments: any = [];
          await asyncForEach(data, async (item: any) => {
            let replies: any = [];
            await getReplies(item.id).then((value: any) => {
              replies = value;
            });

            await LikeComment.filter({ postId: item.id })
              .getJoin()
              .then(async (likes: any) => {
                comments.push({
                  ...item,
                  author: { ...item.author, password: undefined },
                  likes: likes.map((l: any) => ({
                    ...l,
                    profile: { ...l.profile, password: undefined }
                  })),
                  replies
                });
              });
          }).finally(() => {
            res.send({ success: true, data: comments });
          });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default comment;
