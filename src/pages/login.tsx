import { useEffect, useState } from 'react';
import {
  Spacer,
  Text,
  Link,
  Button,
  Input,
  Card,
  Divider,
  Image
} from '@geist-ui/core';
import dynamic from 'next/dynamic';
const Github = dynamic(() => import('react-login-github'), {
  ssr: false
});
import TwitterLogin from 'react-twitter-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import { setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Translation, useTranslation } from 'components/intl/Translation';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';
import { Facebook, Twitter, Github as GithubIcon } from '@geist-ui/icons';

const Login = observer(() => {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ loading, user, setUser, login }] = useState(() => new UserStore());
  const { email, password } = user;

  useEffect(() => {
    getSettings();
  }, [status]);

  const responseFacebook = (response) => {
    // console.log(response);
  };

  const onSuccess = () => {};

  const onFailure = () => {};

  const signIn = async () => {
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
        toast.success(
          useTranslation({
            lang: settings?.language,
            value: 'Successfully signed in!'
          })
        );
        router.push('/');
      } else {
        setStatus(res.status);
        toast.error(
          useTranslation({ lang: settings?.language, value: res.message })
        );
      }
    });
  };

  return (
    <div className="polkadot">
      <Navbar
        title={useTranslation({ lang: settings?.language, value: 'Log In' })}
        description={useTranslation({
          lang: settings?.language,
          value: 'Log In'
        })}
        hide
      />
      <Toaster />
      <div>
        <div className="page-container top-50">
          <div className="boxed">
            <div className="logo-container center">
              {settings.siteLogo ? (
                <Image
                  alt="logo"
                  src={`/storage/${settings.siteLogo}`}
                  height={'65px'}
                />
              ) : (
                <Text h2 width={'100%'}>
                  {settings.siteName}
                </Text>
              )}
            </div>

            <Card width="100%">
              <Text h3>
                <Translation
                  lang={settings?.language}
                  value="Sign into your account"
                />
              </Text>

              {status === 'inactive' ? (
                <Text>
                  <Translation
                    lang={settings?.language}
                    value="Account is inactive."
                  />
                  <Translation lang={settings?.language} value="Click" />{' '}
                  <Link href="/account/verify" color>
                    <Translation
                      lang={settings?.language}
                      value="Click here to verify your account."
                    />
                  </Link>{' '}
                </Text>
              ) : (
                ''
              )}
              <Spacer h={2} />
              <Input
                placeholder={useTranslation({
                  lang: settings?.language,
                  value: 'Email or username'
                })}
                width="100%"
                scale={4 / 3}
                onChange={(e) =>
                  setUser({ ...user, ...{ email: e.target.value } })
                }
              />
              <Spacer h={1.5} />
              <Input.Password
                placeholder={useTranslation({
                  lang: settings?.language,
                  value: 'Password'
                })}
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
                onClick={() => {
                  email && password ? signIn() : null;
                }}
              >
                <Translation lang={settings?.language} value="Log In" />
              </Button>
              <Spacer />
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

              <Text font={'14px'}>
                <Translation
                  lang={settings?.language}
                  value="Forgotten Password?"
                />
                &nbsp;
                <Link href="/forgot" color underline>
                  <Translation lang={settings?.language} value="Reset here" />{' '}
                </Link>
              </Text>

              <Text font={'14px'}>
                <Translation lang={settings?.language} value="Not a member?" />
                &nbsp;
                <Link href="/signup" color underline>
                  <Translation lang={settings?.language} value="Signup here" />
                </Link>
              </Text>
            </Card>
            <Spacer h={4} />
          </div>
          <Spacer h={4} />
        </div>
      </div>
    </div>
  );
});

export default Login;
