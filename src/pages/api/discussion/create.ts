import { settingsProp } from './../../../interfaces/settings';
import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { r, Discussion, Settings, User } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';
import slugify from 'slugify';

const getSettings = async () => {
  return await Settings.orderBy(r.asc('createdAt'))
    .then((config: any) => {
      config = config[0];
      return config;
    })
    .catch((err: any) => signale.fatal(err));
};

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      req.body.slug = slugify(req.body.title, {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: 'vi' // language code of the locale to use
      });

      let discussion = new Discussion(req.body);
      await discussion
        .save()
        .then(async (data: any) => {
          if (data.id) {
            let config: settingsProp = await getSettings();
            await User.get(data.userId).then(async (p) => {
              await User.get(data.userId)
                .update({
                  coin: Number(p.coin + config.coin?.discussion)
                })
                .then(() => {
                  res.send({ success: true, data });
                });
            });
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
