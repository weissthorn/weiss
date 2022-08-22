import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Discussion } from '../../../components/api/model';
import { withAuth, slugify } from '../../../components/api/utils';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      req.body.slug = slugify(req.body.title);
      let discussion = new Discussion(req.body);
      await discussion
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb' // Set desired value here
    }
  }
};

export default create;
