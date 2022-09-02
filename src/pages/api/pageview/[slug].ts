import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Pageview } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const pageview = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Pageview.filter({ slug: req.query.slug })
        .getJoin()
        .then(async (data: any) => {
          data = data.length === 1 ? data[0] : {};
          data.id
            ? res.status(200).json({ success: true, data })
            : res
                .status(200)
                .json({ success: false, message: 'Pageview not found' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default pageview;
