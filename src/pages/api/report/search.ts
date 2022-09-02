import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Report, Discussion } from '../../../components/api/model';
import { withAuth, asyncForEach } from '../../../components/api/utils';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { query } = req.query;

      await Report.orderBy(r.desc('createdAt'))
        .filter((profile: any) =>
          profile('title').match(query).or(profile('description').match(query))
        )
        .then(async (data: any) => {
          let report: any = [];
          await asyncForEach(data, async (item: any) => {
            await Discussion.filter({ reportId: item.id }).then((m: any) => {
              item = {
                ...item,
                password: null,
                discussion: m.length
              };
              report.push(item);
            });
          }).finally(() => {
            res
              .status(200)
              .json({ success: true, data: report, count: report.length });
          });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default search;
