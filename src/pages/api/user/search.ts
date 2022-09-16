import { userProp } from '../../../interfaces/user';
import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, User } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      let { query } = req.query;

      await User.orderBy(r.desc('createdAt'))
        .filter((profile: any) =>
          profile('name')
            .match('(?i)' + query)
            .or(profile('email').match('(?i)' + query))
        )
        .getJoin()
        .then((data: any) => {
          data = data.map((item: userProp) => ({
            ...item,
            ...{ password: undefined }
          }));
          res.status(200).json({ success: true, data, count: data.length });
        })
        .catch((err: any) => signale.fatal(err));
    } else {
      res.send(auth);
    }
  });
};

export default search;
