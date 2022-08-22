import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Settings } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Settings.get(req.body.id)
        .update(req.body)
        .then(() => {
          res.status(200).json({ success: true, data: 'Updated' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default update;
