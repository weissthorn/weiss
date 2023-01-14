import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Discussion } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Discussion.get(req.body.id)
        .delete()
        .then(() => {
          res.send({ success: true, message: 'Discussion deleted.' });
        })
        .catch((err: any) => {
          signale.fatal(err);
          res.send({
            success: false,
            message: 'Failed. Please try again later.'
          });
        });
    } else {
      res.send(auth);
    }
  });
};

export default deletePost;
