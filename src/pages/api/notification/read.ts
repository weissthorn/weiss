import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Notification } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const read = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Notification.get(req.body.id)
        .update({ read: true, id: req.body.id })
        .then(() => {
          res.status(200).json({ success: true, data: 'Updated' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default read;
