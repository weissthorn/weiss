'use strict';

import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Upload } from '../../../components/api/model';

const getFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.id;
  await Upload.get(id)
    .then((data: any) => {
      res.send({ success: true, data });
    })
    .catch((err: any) => signale.fatal(err));
};

export default getFile;
