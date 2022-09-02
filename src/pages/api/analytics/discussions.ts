import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Discussion } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const analytics = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { from, to }: any = req.query;

      await Discussion.filter((analytics: any) =>
        analytics('createdAt')
          .date()
          .ge(new Date(from))
          .and(analytics('createdAt').date().le(new Date(to)))
      )
        .group('createdAt')
        .ungroup()
        .then((data: any) => {
          data = data.map((item: any) => ({
            day: item.group,
            count: item.reduction.length
          }));
          res.send({ success: true, data });
        })
        .catch((err: any) => {
          signale.fatal(err, req, res);
          res.send({
            success: false,
            message: 'Error fetching discussion analytics!'
          });
        });
    } else {
      res.send(auth);
    }
  });
};

export default analytics;
