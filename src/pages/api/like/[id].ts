import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Like } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const like = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Like.filter({ postId: req.query.id })
        .getJoin()
        .then(async (data: any) => {
          data = data.map((item: any) => ({
            ...item,
            profile: { password: undefined }
          }));
          res.status(200).json({ success: true, data });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default like;
