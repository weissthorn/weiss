import signale from 'signale';
import moment from 'moment';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Discussion } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { begin, end } = req.query;

      let f1 = Number(moment(begin).format('YYYY')),
        f2 = Number(moment(begin).format('M')),
        f3 = Number(moment(begin).format('D'));
      let t1 = Number(moment(end).format('YYYY')),
        t2 = Number(moment(end).format('M')),
        t3 = Number(moment(end).format('D'));

      await Discussion.orderBy(r.desc('createdAt'))
        .filter((post: any) =>
          post('createdAt').during(
            r.time(f1, f2, f3, 'Z'),
            r.time(t1, t2, t3, 'Z')
          )
        )
        .group('createdAt')
        .then((data: any) => {
          res.status(200).json({ success: true, total: data.length });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default search;
