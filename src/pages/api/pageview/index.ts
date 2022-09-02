import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Pageview, Discussion } from '../../../components/api/model';
import { asyncForEach, withAuth } from '../../../components/api/utils';

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

      await Pageview.then(async (data: any) => {
        res.status(200).json({ success: true, data, count: data.length });
      }).catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default index;
