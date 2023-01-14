import { useEffect, useState } from 'react';
import { Spacer, Text, Button, Input, Card, Image } from '@geist-ui/core';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';

const Reset = observer(() => {
  const cookie = parseCookies();
  const router = useRouter();
  const [verify, setVerify] = useState(false);
  const [code, setCode] = useState('');
  const [_password, setPassword] = useState('');
  const [_code, _setCode] = useState<{ data?: string; code?: number }>({});
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ loading, user, setUser, getUser, updateUser }] = useState(
    () => new UserStore()
  );

  useEffect(() => {
    getSettings();
    let _code: any =
      cookie && cookie._w_code ? JSON.parse(cookie._w_code) : null;

    _setCode(_code);
  }, [router]);

  const verifyAccount = () => {
    if (Number(code) !== _code.code) {
      toast.error('Code is incorrect or expired.');
    } else {
      setVerify(true);
    }
  };

  const updatePass = async () => {
    if (user.password !== _password) {
      toast.error('Passwords does not matched!');
    } else {
      await getUser(_code.data!).then(async (res: any) => {
        if (res.success) {
          await updateUser({ id: res.data.id, password: user.password });
          destroyCookie(null, '_w_code');

          toast.success('Password reset successfully!');
          router.push('/login');
        } else {
          toast.error('Unable to update user. Please try again later');
        }
      });
    }
  };

  return (
    <div className="polkadot">
      <Navbar title="Forgot password" description="Forgot password" hide />
      <Toaster />
      <div>
        <div className="page-container top-100">
          <div className="boxed">
            <div className="logo-container center">
              {settings.siteLogo ? (
                <Image src={`/storage/${settings.siteLogo}`} />
              ) : (
                <Text h2 width={'100%'}>
                  {settings.siteName}
                </Text>
              )}
            </div>

            <Card shadow width="100%">
              <Text h3>Reset your password</Text>
              <Spacer h={2} />
              {verify === false ? (
                <>
                  <Input
                    placeholder=""
                    width="100%"
                    scale={4 / 3}
                    onChange={(e) => setCode(e.target.value)}
                  >
                    Enter code sent to your email
                  </Input>
                  <Spacer h={1.5} />
                  <Button
                    shadow
                    type="secondary"
                    width="100%"
                    loading={loading}
                    onClick={verifyAccount}
                  >
                    Continue &rarr;
                  </Button>
                </>
              ) : (
                <>
                  <Input.Password
                    placeholder="New Password"
                    width="100%"
                    scale={4 / 3}
                    onChange={(e) =>
                      setUser({ ...user, ...{ password: e.target.value } })
                    }
                  />
                  <Spacer h={1.5} />
                  <Input.Password
                    placeholder="Retype Password"
                    width="100%"
                    scale={4 / 3}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Spacer h={1.5} />
                  <Button
                    shadow
                    type="secondary"
                    width="100%"
                    loading={loading}
                    onClick={updatePass}
                  >
                    Reset Password
                  </Button>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Reset;
