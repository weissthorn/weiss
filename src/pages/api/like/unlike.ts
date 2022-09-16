import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Like } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const unlike = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      const { postId, userId } = req.body;
      await Like.filter({ postId, userId })
        .delete()
        .then(() => {
          res.status(200).json({ success: true, data: 'Done' });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default unlike;
