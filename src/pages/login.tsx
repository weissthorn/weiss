import { useEffect, useState } from 'react';
import { Spacer, Text, Link, Button, Input, Card } from '@geist-ui/core';
import dynamic from 'next/dynamic';
const Github = dynamic(() => import('react-login-github'), {
  ssr: false
});
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import { setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';

const Login = observer(() => {
  const router = useRouter();
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ loading, user, setUser, login }] = useState(() => new UserStore());

  useEffect(() => {
    getSettings();
  }, []);

  // const onSuccess = (response) => console.log(response);
  // const onFailure = (response) => console.error(response);

  const signIn = async () => {
    const { email, password } = user;
    await login({ email, password }).then((res: any) => {
      if (res.success) {
        const { name, id, role, photo, username } = res.data;
        setCookie(
          null,
          '_w_auth',
          JSON.stringify({ name, id, role, photo, username }),
          {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
          }
        );
        toast.success('Successfully signed in!');
        router.push('/');
      } else {
        toast.error('Incorrect username/email or password!');
      }
    });
  };

  return (
    <div className="polkadot">
      <Navbar title="Login" description="Login" hide />
      <Toaster />
      <div>
        <div className="page-container top-100">
          <div className="boxed">
            <div className="logo-container center">
              {settings.siteLogo ? (
                <img src={`/storage/${settings.siteLogo}`} />
              ) : (
                <Text h2 width={'100%'}>
                  {settings.siteName}
                </Text>
              )}
            </div>

            <Card width="100%">
              <Text h3>Sign into your account</Text>
              <Spacer h={2} />
              <Input
                placeholder="Email or username"
                width="100%"
                scale={4 / 3}
                onChange={(e) =>
                  setUser({ ...user, ...{ email: e.target.value } })
                }
              />
              <Spacer h={1.5} />
              <Input.Password
                placeholder="Password"
                width="100%"
                scale={4 / 3}
                onChange={(e) =>
                  setUser({ ...user, ...{ password: e.target.value } })
                }
              />
              <Spacer h={1.5} />
              <Button
                shadow
                type="secondary"
                width="100%"
                loading={loading}
                onClick={signIn}
              >
                Log in
              </Button>
              {/* <Github
                  className="button"
                  clientId="ac56fad434a3a3c1561e"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                /> */}
              {/* <Spacer h={1} /> */}
              <Text font={'14px'}>
                Forgotten Password? &nbsp;
                <Link href="/forgot" color underline>
                  Reset here
                </Link>
              </Text>

              <Text font={'14px'}>
                Not a member? &nbsp;
                <Link href="/signup" color underline>
                  Signup here
                </Link>
              </Text>
            </Card>
            <Spacer h={4} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;
