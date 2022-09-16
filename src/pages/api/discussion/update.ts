import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Discussion, Notification } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Discussion.get(req.body.id)
        .update(req.body)
        .then(async () => {
          if (req.body.status === 'banned') {
            //Send notifications

            await Discussion.get(req.body.id)
              .getJoin()
              .then(async (data: any) => {
                const notify = new Notification({
                  type: 'admin',
                  sender: 'admin',
                  receiver: data.userId,
                  message: `${data.title} was banned by moderator due to privacy violation.`,
                  action: `${data.slug}`
                });
                await notify.save().then(() => {});
              });
          }
          res.status(200).json({ success: true, data: 'Updated' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default update;
