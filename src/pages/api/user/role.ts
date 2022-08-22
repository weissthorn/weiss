import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, User } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';
import { userProp } from 'interfaces/user';

const index = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let offset = 0;
      let { role }: any = req.query;

      await User.orderBy(r.desc('createdAt'))
        .filter({ role })
        .then(async (data: any) => {
          data = data.map((item: userProp) => ({
            ...item,
            ...{ password: null }
          }));
          res.status(200).json({ success: true, data });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default index;
