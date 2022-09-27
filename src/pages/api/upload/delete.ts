'use strict';
import type { NextApiRequest, NextApiResponse } from 'next';
import signale from 'signale';
import { Upload } from '../../../components/api/model';

const deleteFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  await Upload.get(id)
    .then((data: any) => {
      res.send({ success: true, data });
    })
    .catch((err: any) => signale.fatal(err));
};

export default deleteFile;
