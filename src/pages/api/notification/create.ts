import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Notification } from '../../../components/api/model';
import { withAuth, slug } from '../../../components/api/utils';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      req.body.slug = slug();
      let notification = new Notification(req.body);
      await notification
        .save()
        .then((data: any) => {
          if (data.id) {
            res.send({ success: true, data });
          } else {
            res.send({
              success: false,
              message: 'Failed. Please try again later.'
            });
          }
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default create;
