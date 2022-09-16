import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Comment, Like } from '../../../../components/api/model';
import { asyncForEach, withAuth } from '../../../../components/api/utils';

const getLikes = async (id: string, type: string) => {
  return await Like.filter({
    postId: id,
    type: type
  })
    .getJoin()
    .then((likes: any) => {
      likes = likes.map((item: any) => ({
        ...item,
        profile: { ...item.profile, password: undefined }
      }));
      likes = likes.length ? likes : [];
      return likes;
    });
};

const getReplyLikes = (replies: any) => {
  let likes: any = [];
  return asyncForEach(replies, async (item: any) => {
    return await getLikes(item.id, 'reply').then((like: any) => {
      if (like.length) {
        likes.push(like);
      }
      // console.log(like);
    });
  }).finally(() => {
    return likes;
  });
};

const comment = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let offset = 0;
      let { page, limit, id, type }: any = req.query;
      page = Number(page);
      limit = Number(limit);

      if (page > 1) {
        offset = limit * page;
        offset = offset - limit;
      }

      await Comment.orderBy(r.asc('createdAt'))
        .filter({ discussionId: id, type: 'comment' })
        .skip(offset)
        .limit(limit)
        .getJoin()
        .then(async (data: any) => {
          data = data.map((item: any) => ({
            ...item,
            author: { ...item.author, password: undefined }
          }));
          let comments: any = [];
          await asyncForEach(data, async (item: any) => {
            let likes: any = [];
            await getLikes(item.id, 'comment').then((like: any) => {
              likes = like;
            });
            await Comment.orderBy(r.asc('createdAt'))
              .filter({ replyId: item.id, type: 'reply' })
              .skip(offset)
              .limit(limit)
              .getJoin()
              .then(async (reply: any) => {
                let likeReply: any = [];
                await getReplyLikes(reply).then((lk) => {
                  // console.log(lk);

                  likeReply = lk;
                });

                comments.push({
                  ...item,
                  replies: reply.map((i: any) => ({
                    ...i,
                    author: { ...i.author, password: undefined },
                    likes: []
                  })),
                  likes: likes
                });
              });
          }).finally(() => {
            res.status(200).json({ success: true, data: comments });
          });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default comment;
