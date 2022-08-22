import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Category } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const category = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Category.filter({ slug: req.query.slug })
        .getJoin()
        .then(async (data: any) => {
          data = data.length === 1 ? data[0] : {};
          data.id
            ? res.status(200).json({ success: true, data })
            : res
                .status(200)
                .json({ success: false, message: 'Category not found' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default category;
