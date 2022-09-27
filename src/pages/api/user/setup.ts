import signale from 'signale';
import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth, guid } from '../../../components/api/utils';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  /*
    #swagger.tags = ["users"]
    #swagger.description = 'New user'
     #swagger.security = [{
               "apikey": []
        }]
        #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                      $name: "string",
                      $email: "string",
                      $password: "string",
                      $role: "string",
                      $active: "boolean",
                      $photo: "string",
                }
          }
  */

  await withAuth(req).then(async (auth) => {
    if (auth.success) {
      await User.filter({ email: req.body.email }).then(async (email: any) => {
        if (email.length === 0) {
          const salt = bcrypt.genSaltSync(10);

          const password = bcrypt.hashSync(req.body.password, salt);
          req.body.password = password;
          req.body.id = guid();

          let user = new User(req.body);
          await user
            .save()
            .then(async (data: any) => {
              if (data.id) {
                delete data.password;
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
          res.send({
            success: false,
            message:
              'Email already exist! Please try password reset or verify your account.'
          });
        }
      });
    } else {
      res.send(auth);
    }
  });
};

export default create;
