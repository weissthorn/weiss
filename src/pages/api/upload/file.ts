'use strict';

import formidable from 'formidable';
import path from 'path';
import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Upload } from '../../../components/api/model';
import { slug, isDoc, getEXT } from '../../../components/api/utils';

const uploadFile = (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const form = new formidable.IncomingForm();
  form.parse(req);

  form.on('fileBegin', function (name: any, file: any) {
    let type = getEXT(file.originalFilename);

    if (isDoc(type)) {
      let newFile = `${Date.now()}.${type}`;
      file.filepath = path.resolve('./public/storage/docs/', newFile);

      let data = {
        file: newFile,
        filetype: 'document',
        slug: slug(),
        relative: id
      };

      let upload = new Upload(data);

      upload
        .save()
        .then((f: any) => {
          res.send({ success: true, file: newFile, id: f.id });
        })
        .catch((err: any) => {
          res.send({
            success: false,
            message:
              'Please upload valid document.  Support pdf, csv, xls, xlsx, doc, docx, ppt, pptx, txt.'
          });
          signale.fatal(err);
        });
    } else {
      res.send({
        success: false,
        message:
          'Please upload valid document. Support pdf, csv, xls, xlsx, doc, docx, ppt, pptx, txt.'
      });
    }
  });
};

export default uploadFile;
