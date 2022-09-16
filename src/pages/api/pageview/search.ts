import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Pageview } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { query } = req.query;

      await Pageview.orderBy(r.desc('createdAt'))
        .filter((profile: any) =>
          profile('title')
            .match('(?i)' + query)
            .or(profile('description').match('(?i)' + query))
        )
        .then(async (data: any) => {
          res.status(200).json({ success: true, data, count: data.length });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default search;
