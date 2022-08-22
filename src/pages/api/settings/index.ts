import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Settings } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Settings.orderBy(r.asc('createdAt'))
        .then((data: any) => {
          res
            .status(200)
            .json({ success: true, data: data.length ? data[0] : {} });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default update;
