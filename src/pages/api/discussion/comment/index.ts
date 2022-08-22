import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Comment } from '../../../../components/api/model';
import { withAuth } from '../../../../components/api/utils';

const comment = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let offset = 0;
      let { page, limit, id }: any = req.query;
      page = Number(page);
      limit = Number(limit);

      if (page > 1) {
        offset = limit * page;
        offset = offset - limit;
      }

      await Comment.filter({ discussionId: id })
        .skip(offset)
        .limit(limit)
        .getJoin()
        .then(async (data: any) => {
          data = data.map((item: any) => ({
            ...item,
            author: { ...item.author, password: undefined }
          }));
          res.status(200).json({ success: true, data });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default comment;
