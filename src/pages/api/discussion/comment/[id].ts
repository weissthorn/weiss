import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Comment } from '../../../../components/api/model';
import { withAuth } from '../../../../components/api/utils';

const comment = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await Comment.get(req.query.id)
        .getJoin()
        .then(async (data: any) => {
          if (data.id) {
            let author = data.author;
            data = { ...data, author: { ...author, password: undefined } };
            res.status(200).json({ success: true, data });
          } else {
            res
              .status(200)
              .json({ success: false, message: 'Comment not found' });
          }
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default comment;
