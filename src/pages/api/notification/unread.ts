import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Notification } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const notification = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { userId } = req.query;

      await Notification.filter({ receiver: userId, read: false })
        .then((data: any) => {
          res.send({ success: true, data: data.length });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default notification;
