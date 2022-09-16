import signale from 'signale';
import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/api/model';
import { withAuth, code } from '../../../components/api/utils';
// import { signupTemplate } from "../../../components/api/mail-template";

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

          let user = new User(req.body);
          await user
            .save()
            .then((data: any) => {
              if (data.id) {
                const _code = code();
                // signupTemplate(data.email, data.name, _code);
                res.send({ success: true, data: data.id, code: _code });
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
