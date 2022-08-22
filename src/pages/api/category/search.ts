import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Category, Discussion } from '../../../components/api/model';
import { withAuth, asyncForEach } from '../../../components/api/utils';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { query } = req.query;

      await Category.orderBy(r.desc('createdAt'))
        .filter((profile: any) =>
          profile('title').match(query).or(profile('description').match(query))
        )
        .then(async (data: any) => {
          let category: any = [];
          await asyncForEach(data, async (item: any) => {
            await Discussion.filter({ categoryId: item.id }).then((m: any) => {
              item = {
                ...item,
                password: null,
                discussion: m.length
              };
              category.push(item);
            });
          }).finally(() => {
            res
              .status(200)
              .json({ success: true, data: category, count: category.length });
          });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default search;
