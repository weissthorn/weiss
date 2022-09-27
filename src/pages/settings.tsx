import { useEffect, useState } from 'react';
import {
  Spacer,
  Text,
  Button,
  Input,
  Grid,
  Card,
  Loading,
  Tooltip,
  Avatar,
  Tabs
} from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import {
  CheckInCircle,
  CheckInCircleFill,
  XCircleFill,
  Image
} from '@geist-ui/icons';
import { setCookie } from 'nookies';
import Router from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from 'components/Navbar';
import UserStore from 'stores/user';
import useToken from 'components/Token';
import { validateEmail } from 'components/api/utils';
import Auth from 'components/Auth';

const Settings = observer(() => {
  const token = useToken();
  const [status, setStatus] = useState('');
  const [_password, setPassword] = useState({
    password: '',
    newPassword: ''
  });
  const [
    {
      loading,
      user,
      setUser,
      getUser,
      checkUsername,
      updateUser,
      updateAccount,
      updatePassword,
      uploadImage
    }
  ] = useState(() => new UserStore());

  useEffect(() => {
    token.id
      ? getUser(token.id).then((res: any) => {
          if (res.success) {
            setUser(res.data);
          }
        })
      : null;
  }, [token]);

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

  const handleUpload = async (id: string) => {
    let t = toast.loading('Uploading image....');

    let upload: any = document.querySelector(id);

    var formData = new FormData();
    formData.append('file', upload.files[0]);
    let file = '';
    await uploadImage('logo', formData)
      .then(async (res: any) => {
        if (res?.success) {
          file = res.file;
          setUser({ ...user, photo: res.file });
          let _upload: any = document.querySelector(id);
          _upload.value = '';

          await updateUser({
            id: user.id,
            photo: res.file
          }).then(() => {
            const { name, id, role, username } = user;
            setCookie(
              null,
              '_w_auth',
              JSON.stringify({ name, id, role, photo: file, username }),
              {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
              }
            );
            toast.dismiss(t);
            toast.success('Image uploaded successfully!');
            Router.reload();
          });
        } else {
          let _upload: any = document.querySelector(id);
          _upload.value = '';

          toast.dismiss(t);
          toast.error(res.message, {
            duration: 3000
          });
        }
      })
      .catch((err) => console.log(err));
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
      toast.error('Current password is required to make changes.');
    } else {
      await updateAccount(user).then((res: any) => {
        if (res.success) {
          const { name, id, role, photo, username } = user;
          setCookie(
            null,
            '_w_auth',
            JSON.stringify({ name, id, role, photo, username }),
            {
              maxAge: 30 * 24 * 60 * 60,
              path: '/'
            }
          );

          setUser({ ...user, password: '' });

          toast.success('Account updated successfully!');
        } else {
          toast.error(res.message);
        }
      });
    }
  };

  const savePassword = async () => {
    const { password, newPassword } = _password;
    if (!newPassword || newPassword?.length < 3) {
      toast.error('Password is too short! Minimum character is six.');
    } else if (!password) {
      toast.error('Current password is required to make changes.');
    } else {
      const data = { id: user.id, newPassword, password };

      await updatePassword(data).then((res: any) => {
        if (res.success) {
          setPassword({ password: '', newPassword: '' });
          toast.success('Password updated successfully!');
        } else {
          toast.error(res.message);
        }
      });
    }
  };

  return (
    <Auth>
      <Navbar title="Account settings" description="Account settings" />
      <Toaster />
      <div className="page-container top-100">
        <Grid.Container width="100%" justify="center" mb="100px">
          <Grid xs={24} lg={10}>
            <Card shadow width="100%">
              <Text h3>Account settings </Text>
              <Spacer h={2} />
              <div className="pagination">
                <Avatar
                  w={3}
                  h={3}
                  src={
                    user.photo ? `/storage/${user.photo}` : '/images/avatar.png'
                  }
                />
                <Spacer h={1.5} />
                <Button icon={<Image />} auto>
                  Upload photo
                  <input
                    type="file"
                    className="file-upload"
                    id="image"
                    onChange={() => handleUpload('#image')}
                  />
                </Button>
              </div>
              <Tabs initialValue="1">
                <Tabs.Item label="Change details" value="1">
                  <Input
                    placeholder="Fullname"
                    width="100%"
                    scale={4 / 3}
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  >
                    Fullname
                  </Input>
                  <Spacer h={1.5} />
                  <Input
                    value={user.username}
                    placeholder="Username"
                    width="100%"
                    scale={4 / 3}
                    iconClickable
                    onChange={(e) => processUsername(e.target.value)}
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
                  >
                    Username
                  </Input>
                  <Spacer h={1.5} />
                  <Input
                    placeholder="Email"
                    width="100%"
                    scale={4 / 3}
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  >
                    Email
                  </Input>
                  <Spacer h={1.5} />
                  <Input.Password
                    placeholder="Type current password to update changes"
                    width="100%"
                    scale={4 / 3}
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <Spacer h={1.5} />
                  <Button
                    shadow
                    type="secondary"
                    width="100%"
                    loading={loading}
                    disabled={
                      status === 'error' || status === 'loading' ? true : false
                    }
                    onClick={save}
                  >
                    Save
                  </Button>
                </Tabs.Item>
                <Tabs.Item label="Change password" value="2">
                  <div>
                    <Spacer h={1.5} />
                    <Input.Password
                      placeholder="Type new password"
                      width="100%"
                      scale={4 / 3}
                      value={_password.newPassword}
                      onChange={(e: any) =>
                        setPassword({
                          ..._password,
                          newPassword: e.target.value
                        })
                      }
                    />
                  </div>
                  <Spacer h={1.5} />
                  <Input.Password
                    placeholder="Type current password to update changes"
                    width="100%"
                    scale={4 / 3}
                    value={_password.password}
                    onChange={(e: any) =>
                      setPassword({
                        ..._password,
                        password: e.target.value
                      })
                    }
                  />
                  <Spacer h={1.5} />
                  <Button
                    shadow
                    type="secondary"
                    width="100%"
                    loading={loading}
                    disabled={
                      status === 'error' || status === 'loading' ? true : false
                    }
                    onClick={savePassword}
                  >
                    Save
                  </Button>
                </Tabs.Item>
              </Tabs>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    </Auth>
  );
});

export default Settings;
