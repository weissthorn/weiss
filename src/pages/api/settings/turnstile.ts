import signale from 'signale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Settings, r } from '../../../components/api/model';
import { withAuth } from '../../../components/api/utils';

const turnstile = async (req: NextApiRequest, res: NextApiResponse) => {
  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      const { token } = req.body;
      let ip = req.headers['x-real-ip'];

      let settings = await Settings.orderBy(r.asc('createdAt'));
      settings = settings.length ? settings[0] : {};

      const body = {
        remoteip: ip || undefined,
        response: token,
        secret: settings.cloudflareSecretKey
      };

      const result = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
          method: 'POST'
        }
      );

      const outcome = await result.json();
      if (outcome.success) {
        res.status(200).json({ success: true });
      } else {
        res.status(200).json({ success: false });
      }
    } else {
      res.send(auth);
    }
  });
};

export default turnstile;
