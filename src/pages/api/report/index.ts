import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Report } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

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

      await Report.orderBy(r.desc('createdAt'))
        .getJoin()
        .then(async (data: any) => {
          data = data.map((item: any) => ({
            ...item,
            title: item.post.title,
            slug: item.post.slug,
            status: item.post.status
          }));

          await Report.orderBy(r.desc('createdAt')).then((c: any) => {
            res.status(200).json({ success: true, data, count: c.count });
          });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default index;
