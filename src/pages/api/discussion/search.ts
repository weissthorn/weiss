import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Discussion } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { search } = req.query;

      await Discussion.orderBy(r.desc('createdAt'))
        .filter((profile: any) =>
          profile('title').match(search).or(profile('content').match(search))
        )
        .getJoin()
        .then((data: any) => {
          res.status(200).json({ success: true, data, count: data.length });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default search;
