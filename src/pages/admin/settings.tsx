import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Input,
  Text,
  Collapse,
  Button,
  Textarea,
  Tabs,
  Spacer,
  Image,
  Select
} from '@geist-ui/core';
import { Image as Picture } from '@geist-ui/icons';
import AdminNavbar from 'components/admin/Navbar';
import Sidebar from 'components/admin/Sidebar';
import SettingsStore from 'stores/settings';
import Auth from 'components/admin/Auth';
import toast, { Toaster } from 'react-hot-toast';

const Settings = observer(() => {
  const [store] = useState(() => new SettingsStore());
  const { loading, settings, setSettings, getSettings, update, uploadImage } =
    store;
  const { coin, email, advert, banWords } = settings;

  useEffect(() => {
    getSettings();
  }, []);

  const handleUpload = async (id: string) => {
    let t = toast.loading('Uploading image....');

    let upload: any = document.querySelector(id);

    var formData = new FormData();
    formData.append('file', upload.files[0]);

    await uploadImage('logo', formData)
      .then((res: any) => {
        if (res?.success) {
          if (id === '#site-logo') {
            setSettings({ ...settings, siteLogo: res.file });
          } else {
            setSettings({ ...settings, siteFavicon: res.file });
          }

          let _upload: any = document.querySelector(id);
          _upload.value = '';

          toast.dismiss(t);
          toast.success('Image uploaded successfully!');
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
    await update(settings).then((res: any) => {
      if (res.success) {
        toast.success('Settings updated!');
      } else {
        toast.error('Error updating settings! Please try again.');
      }
    });
  };

  return (
    <Auth>
      <AdminNavbar title="Settings" description="Settings" />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar active="settings" />

        <main className="main for-admin">
          <Collapse.Group width={'100%'} className="settings">
            <Text h3>Settings</Text>
            <Collapse title={'Metadata'} initialVisible>
              <div className="column">
                <div className="item">
                  <Text h6>Site favicon</Text>
                </div>
                <div className="item">
                  <Button icon={<Picture />} width="170px">
                    Upload favicon
                    <input
                      type="file"
                      className="file-upload"
                      id="site-favicon"
                      onChange={() => handleUpload('#site-favicon')}
                    />
                  </Button>
                  <Spacer inline />
                  {settings.siteFavicon ? (
                    <Image
                      src={`/storage/${settings.siteFavicon}`}
                      style={{ width: 'auto', height: 20 }}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Site logo</Text>
                </div>
                <div className="item">
                  <Button icon={<Picture />} width="170px">
                    Upload logo
                    <input
                      type="file"
                      className="file-upload"
                      id="site-logo"
                      onChange={() => handleUpload('#site-logo')}
                    />
                  </Button>
                  <Spacer inline />
                  {settings.siteLogo ? (
                    <Image
                      src={`/storage/${settings.siteLogo}`}
                      style={{ width: 'auto', height: 20 }}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Site name</Text>
                </div>
                <div className="item">
                  <Input
                    width={'100%'}
                    value={settings.siteName}
                    onChange={(e: any) =>
                      setSettings({ ...settings, siteName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Site description</Text>
                </div>
                <div className="item">
                  <Textarea
                    width={'100%'}
                    value={settings.siteDescription}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        siteDescription: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6></Text>
                </div>
                <div className="item">
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse title={'Language'}>
              <div className="column">
                <div className="item">
                  <Text h6>Site language</Text>
                </div>
                <div className="item">
                  <Select
                    width={'100%'}
                    value={settings.language}
                    onChange={(value) =>
                      setSettings({ ...settings, language: value })
                    }
                  >
                    <Select.Option value="en">English</Select.Option>
                    <Select.Option value="fr">French</Select.Option>
                    <Select.Option value="es">Spanish</Select.Option>
                  </Select>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6></Text>
                </div>
                <div className="item">
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse title={'Social settings'}>
              <div className="column">
                <div className="item">
                  <Text h6>Github Client ID</Text>
                </div>
                <div className="item">
                  <Input
                    width={'100%'}
                    value={settings.github}
                    onChange={(e: any) =>
                      setSettings({ ...settings, github: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Google Client ID</Text>
                </div>
                <div className="item">
                  <Input
                    width={'100%'}
                    value={settings.google}
                    onChange={(e: any) =>
                      setSettings({ ...settings, google: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Facebook App ID</Text>
                </div>
                <div className="item">
                  <Input
                    width={'100%'}
                    value={settings.facebook}
                    onChange={(e: any) =>
                      setSettings({ ...settings, facebook: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6></Text>
                </div>
                <div className="item">
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse title={'Advert settings'}>
              <Tabs initialValue="1">
                <Tabs.Item label="Top" value="1">
                  <Textarea
                    placeholder="Advert code"
                    width={'100%'}
                    height="150px"
                    value={advert?.top}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        advert: { ...advert, top: e.target.value }
                      })
                    }
                  />
                  <Spacer />
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </Tabs.Item>
                <Tabs.Item label="Left side" value="2">
                  <Textarea
                    placeholder="Advert code"
                    width={'100%'}
                    height="150px"
                    value={advert?.left}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        advert: { ...advert, left: e.target.value }
                      })
                    }
                  />
                  <Spacer />
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </Tabs.Item>
                <Tabs.Item label="Right side" value="3">
                  <Textarea
                    placeholder="Advert code"
                    width={'100%'}
                    height="150px"
                    value={advert?.right}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        advert: { ...advert, right: e.target.value }
                      })
                    }
                  />
                  <Spacer />
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </Tabs.Item>
                <Tabs.Item label="Inner " value="4">
                  <Textarea
                    placeholder="Advert code"
                    width={'100%'}
                    height="150px"
                    value={advert?.inner}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        advert: { ...advert, inner: e.target.value }
                      })
                    }
                  />
                  <Spacer />
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </Tabs.Item>
              </Tabs>
            </Collapse>
            <Collapse title={'Email settings'}>
              <div className="column">
                <div className="item">
                  <Text h6>SMTP host</Text>
                </div>
                <div className="item">
                  <Input
                    width={'100%'}
                    value={email?.host}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        email: { ...email, host: e.target.value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>SMTP user/email</Text>
                </div>
                <div className="item">
                  <Input
                    width={'100%'}
                    value={email?.email}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        email: { ...email, email: e.target.value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>SMTP password</Text>
                </div>
                <div className="item">
                  <Input.Password
                    width={'100%'}
                    value={email?.password}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        email: { ...email, password: e.target.value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6></Text>
                </div>
                <div className="item">
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse title={'Coins settings'}>
              <Text small>
                Note: Changing coin values will affect users current value.
              </Text>
              <div className="column">
                <div className="item">
                  <Text h6>Login reward</Text>
                </div>
                <div className="item">
                  <Input
                    htmlType="number"
                    width={'100%'}
                    value={coin?.login.toString()}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        coin: { ...coin, login: e.target.value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Discussion reward</Text>
                </div>
                <div className="item">
                  <Input
                    htmlType="number"
                    width={'100%'}
                    value={coin?.discussion.toString()}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        coin: { ...coin, discussion: e.target.value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Comment reward</Text>
                </div>
                <div className="item">
                  <Input
                    htmlType="number"
                    width={'100%'}
                    value={coin?.comment.toString()}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        coin: { ...coin, comment: e.target.value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6>Best answer reward</Text>
                </div>
                <div className="item">
                  <Input
                    htmlType="number"
                    width={'100%'}
                    value={coin?.bestAnswer.toString()}
                    onChange={(e: any) =>
                      setSettings({
                        ...settings,
                        coin: { ...coin, bestAnswer: e.target.value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <Text h6></Text>
                </div>
                <div className="item">
                  <Button
                    shadow
                    type="secondary"
                    loading={loading}
                    onClick={save}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse title={'Banned words'}>
              <Textarea
                placeholder="Type words separate with comma"
                width="100%"
                value={banWords}
                onChange={(e: any) =>
                  setSettings({
                    ...settings,
                    ...{ banWords: e.target.value }
                  })
                }
              />
              <Spacer />
              <Button shadow type="secondary" loading={loading} onClick={save}>
                Save
              </Button>
            </Collapse>
          </Collapse.Group>
        </main>
      </div>
    </Auth>
  );
});

export default Settings;
