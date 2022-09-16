import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Discussion, Category, Like } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const discussion = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Discussion.filter((post: any) =>
        post('slug').match(req.query.slug).and(post('status').ne('banned'))
      )
        .getJoin()
        .then(async (data: any) => {
          data = data.length === 1 ? data[0] : {};
          if (data.id) {
            await Category.filter({ slug: data.categoryId }).then(
              async (category: any) => {
                await Like.filter({
                  discussionId: data.id,
                  type: 'discussion'
                })
                  .getJoin()
                  .then((likes: any) => {
                    let profile = data.profile;
                    data = {
                      ...data,
                      category: category[0],
                      profile: { ...profile, password: undefined },
                      likes: likes.map((item: any) => ({
                        ...item,
                        profile: { ...item.profile, password: undefined }
                      }))
                    };

                    res.status(200).json({ success: true, data });
                  });
              }
            );
          } else {
            res
              .status(200)
              .json({ success: false, message: 'Discussion not found' });
          }
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default discussion;
