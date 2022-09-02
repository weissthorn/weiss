import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Discussion } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const index = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { title, category }: any = req.query;

      await Discussion.orderBy(r.desc('createdAt'))
        .filter((post: any) =>
          post('status')
            .ne('banned')
            .and(
              post('title').match(title).or(post('categoryId').match(category))
            )
        )
        .limit(10)
        .then(async (data: any) => {
          res.status(200).json({ success: true, data });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default index;
