import { useState, useEffect } from 'react';
import {
  Spacer,
  Text,
  Link,
  Button,
  Input,
  Grid,
  Card,
  Page,
  Loading,
  Tooltip
} from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import { setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { CheckInCircle, CheckInCircleFill, XCircleFill } from '@geist-ui/icons';
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

  const processUsername = (val: string) => {
    if (val.length) {
      val = val.trim();
      setUser({ ...user, username: val });
      setStatus('loading');
      setTimeout(async () => {
        await checkUsername(val).then((res) => {
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
          toast.success('Account created successfully!');
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
      <Page dotBackdrop dotSpace={0.5} dotSize={'1px'}>
        <div className="page-container">
          <Grid.Container width="100%" justify="center" mb="100px">
            <Grid xs={24} lg={24}>
              <div className="logo-container center">
                {settings.siteLogo ? (
                  <img src={`/storage/${settings.siteLogo}`} />
                ) : (
                  <Text h2 width={'100%'}>
                    {settings.siteName}
                  </Text>
                )}
              </div>
            </Grid>
            <Grid xs={24} lg={10}>
              <Card shadow width="100%">
                <Text h3>Create your account</Text>
                <Spacer h={2} />
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
                <Text font="14px">
                  Have an account? &nbsp;
                  <Link href="/login" color underline>
                    Login here
                  </Link>
                </Text>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
      </Page>
    </div>
  );
});

export default Signup;
