'use strict';

import formidable from 'formidable';
import path from 'path';
import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Upload } from '../../../components/api/model';
import { slug, isImage, getEXT } from '../../../components/api/utils';

const uploadImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const form = new formidable.IncomingForm();
  form.parse(req);

  form.on('fileBegin', function (name: any, file: any) {
    let type = getEXT(file.originalFilename);

    if (isImage(type)) {
      let newFile = `${Date.now()}.${type}`;
      file.filepath = path.resolve('./public/storage/', newFile);

      // s3Upload(modifiedFile, newFile).then((upload) => {
      //   if (upload) {
      //     fs.unlinkSync(modifiedFile);
      //     console.log(upload);
      //   }
      // });

      let data = {
        file: newFile,
        filetype: 'image',
        slug: slug(),
        relative: id,
        userId: id
      };

      let upload = new Upload(data);

      upload
        .save()
        .then((f: any) => {
          res.send({ success: true, file: newFile, id: f.id });
        })
        .catch((err: any) => {
          res.send({ success: false, message: 'Please upload valid image' });
          signale.fatal(err);
        });
    } else {
      res.send({ success: false, message: 'Please upload valid image' });
    }
  });
};

export default uploadImage;

export const config = {
  api: {
    bodyParser: false // Disallow body parsing, consume as stream
  }
};
