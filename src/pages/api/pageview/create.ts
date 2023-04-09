import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';
import MobileDetect from 'mobile-detect';
import { Pageview } from '../../../components/api/model';
import { withAuth, slug } from '../../../components/api/utils';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      const md: any = new MobileDetect(req.headers['user-agent']);
      req.body.agent = md.ua;
      req.body.ipAddress =
        req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      req.body.referrer = req.headers.referer;

      let pageview = new Pageview(req.body);
      await pageview
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
        .catch((err: any) => {
          // signale.fatal(err);
        });
    } else {
      res.send(auth);
    }
  });
};

export default create;
