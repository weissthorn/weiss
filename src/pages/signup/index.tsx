import { useState, useEffect } from 'react';
import {
  Spacer,
  Text,
  Link,
  Button,
  Input,
  Grid,
  Card,
  Loading,
  Divider,
  Tooltip
} from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import { setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import {
  CheckInCircle,
  CheckInCircleFill,
  XCircleFill,
  Facebook,
  Twitter,
  Github as GithubIcon
} from '@geist-ui/icons';
import dynamic from 'next/dynamic';
const Github = dynamic(() => import('react-login-github'), {
  ssr: false
});
import TwitterLogin from 'react-twitter-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Navbar from 'components/Navbar';
import UserStore from 'stores/user';
import useToken from 'components/Token';
import { validateEmail } from 'components/api/utils';
import Router from 'next/router';
import SettingsStore from 'stores/settings';

const Signup = observer(() => {
  const token = useToken();
  const [status, setStatus] = useState('');
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [
    { loading, user, setUser, getUser, signup, checkUsername, updateUser }
  ] = useState(() => new UserStore());

  useEffect(() => {
    getSettings();
  }, [token]);

  const responseFacebook = (response) => {
    console.log(response);
  };

  const onSuccess = () => {};

  const onFailure = () => {};

  const processUsername = (val: string) => {
    if (val.length) {
      val = val.trim();
      setUser({ ...user, username: val });
      setStatus('loading');
      setTimeout(async () => {
        await checkUsername(val).then((res: any) => {
          if (res?.success) {
            setStatus('success');
          } else {
            setStatus('error');
          }
        });
      }, 2000);
    } else {
      setStatus('error');
    }
  };

  const save = async () => {
    const { name, email, username, password } = user;
    if (!name || name?.length < 3) {
      toast.error('Fullname is too short.');
    } else if (!username || username?.length < 3) {
      toast.error('Username is too short. Minimum character is three.');
    } else if (validateEmail(email) === false) {
      toast.error('Invalid email address');
    } else if (!password || password?.length < 3) {
      toast.error('Password is too short. Minimum character is six.');
    } else {
      await signup(user).then((res: any) => {
        if (res.success) {
          setCookie(
            null,
            '_w_code',
            JSON.stringify({ type: 'signup', code: res.code, data: res.data }),
            {
              maxAge: 2 * 60 * 60,
              path: '/'
            }
          );
          toast.success(
            'Account created successfully! Please verify account to continue.'
          );
          Router.push('/signup/verify');
        } else {
          toast.error(res.message);
        }
      });
    }
  };

  return (
    <div>
      <Navbar title="Signup" description="Signup" hide />
      <Toaster />
      <div className="polkadot">
        <div className="page-container top-30">
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

            <Card shadow width="100%">
              <Text h3>Create your account</Text>
              <Spacer h={1} />
              <Input
                placeholder="Fullname"
                width="100%"
                scale={4 / 3}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
              <Spacer h={1.5} />
              <Input
                placeholder="Username"
                width="100%"
                scale={4 / 3}
                iconClickable
                onChange={(e) => processUsername(e.target.value)}
                minLength={3}
                iconRight={
                  status === 'success' ? (
                    <Tooltip
                      placement="topEnd"
                      text="Username is available."
                      type="success"
                    >
                      <CheckInCircleFill color="#0070F3" />
                    </Tooltip>
                  ) : status === 'error' ? (
                    <Tooltip
                      placement="topEnd"
                      text="Username is not available. Try another name."
                      trigger="click"
                      type="error"
                    >
                      <XCircleFill color="#cb0000" />
                    </Tooltip>
                  ) : status === 'loading' ? (
                    <Loading />
                  ) : (
                    <CheckInCircle />
                  )
                }
              />
              <Spacer h={1.5} />
              <Input
                placeholder="Email"
                width="100%"
                scale={4 / 3}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
              <Spacer h={1.5} />
              <Input.Password
                placeholder="Password"
                width="100%"
                scale={4 / 3}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <Spacer h={1.5} />
              <Button
                shadow
                type="secondary"
                width="100%"
                loading={loading}
                onClick={save}
              >
                Signup
              </Button>
              <Spacer h={1} />
              {/* <Divider>OR</Divider>
              <Spacer />
              <FacebookLogin
                appId="575710046478104"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook}
                render={(renderProps) => (
                  <Button
                    icon={<Facebook color="#fff" />}
                    type="abort"
                    style={{ backgroundColor: '#3b5998', color: '#fff' }}
                    width="100%"
                    onClick={renderProps.onClick}
                  >
                    Continue with Facebook
                  </Button>
                )}
              />
              <Spacer />
              <TwitterLogin>
                <Button
                  style={{ backgroundColor: '#1D9BF0', color: '#fff' }}
                  icon={<Twitter color="#fff" />}
                  width="100%"
                  type="abort"
                >
                  Continue with Twitter
                </Button>
              </TwitterLogin>
              <Spacer />
              <Github
                className="git-button"
                disabled
                clientId="ac56fad434a3a3c1561e"
                onSuccess={onSuccess}
                onFailure={onFailure}
              >
                <Button
                  icon={<GithubIcon color="#fff" />}
                  width="100%"
                  type="abort"
                  style={{ backgroundColor: '#171515', color: '#fff' }}
                >
                  Continue to Github
                </Button>
              </Github> */}
              <Text font="14px">
                Have an account? &nbsp;
                <Link href="/login" color underline>
                  Login here
                </Link>
              </Text>
            </Card>
          </div>
          <Spacer h={3} />
        </div>
      </div>
    </div>
  );
});

export default Signup;
