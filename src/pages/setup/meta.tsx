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
  Textarea
} from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { setCookie, parseCookies } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { ChevronLeft, ChevronRight, Image } from '@geist-ui/icons';
import Navbar from 'components/Navbar';
import SetupVerify from 'components/admin/SetupVerify';
import SettingsStore from 'stores/settings';

const MetaSetup = observer(() => {
  const cookie = parseCookies();
  const router = useRouter();
  const [store] = useState(() => new SettingsStore());
  const { admin, setAdmin, settings, setSettings, uploadImage } = store;

  useEffect(() => {
    let setup = cookie && cookie._w_setup ? JSON.parse(cookie._w_setup) : null;
    setup ? (setAdmin(setup.admin), setSettings(setup.settings)) : null;
  }, []);

  const handleUpload = async () => {
    let t = toast.loading('Uploading image....');

    let upload: any = document.querySelector('.file-upload');

    var formData = new FormData();
    formData.append('file', upload.files[0]);

    await uploadImage('logo', formData)
      .then((res: any) => {
        if (res?.success) {
          setSettings({ ...settings, siteLogo: res.file });
          let _upload: any = document.querySelector('.file-upload');
          _upload.value = '';

          toast.dismiss(t);
          toast.success('Image uploaded successfully!');
        } else {
          let _upload: any = document.querySelector('.file-upload');
          _upload.value = '';

          toast.dismiss(t);
          toast.error(res.message, {
            duration: 3000
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSettings = (val: any) => {
    setSettings({ ...settings, ...val });
  };

  const _next = async () => {
    const { siteName, siteDescription } = settings;

    if (!settings.siteLogo) {
      toast.error('Please add a logo');
    } else if (!siteName || siteName.length < 3) {
      toast.error('Username is too short!');
    } else if (!siteDescription || siteDescription.length < 10) {
      toast.error('Description is too short! Minimum character is 10.');
    } else {
      const setup = { settings, admin };
      setCookie(null, '_w_setup', JSON.stringify(setup), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      router.push('/setup/email');
    }
  };

  return (
    <SetupVerify>
      <Navbar
        title="Metadata - Setup Weiss"
        description="Metadata - Setup Weiss"
        hide
      />
      <Toaster />
      <Page dotBackdrop dotSpace={0.5} dotSize={'1px'}>
        <div className="page-container">
          <Grid.Container width="100%" justify="center" mb="100px">
            <Grid xs={24} lg={24}>
              <Text h2 width={'100%'} style={{ textAlign: 'center' }}>
                Weiss
              </Text>
            </Grid>
            <Grid xs={24} lg={10}>
              <Card shadow width="100%">
                <Text h3>Site metadata</Text>
                <Spacer h={2} />
                <Button icon={<Image />} auto>
                  Upload logo
                  <input
                    type="file"
                    className="file-upload"
                    onChange={handleUpload}
                  />
                </Button>{' '}
                <Spacer inline />
                {settings.siteLogo ? (
                  <img
                    src={`/storage/${settings.siteLogo}`}
                    style={{ width: 'auto', height: 20 }}
                  />
                ) : (
                  ''
                )}
                <Spacer h={1.5} />
                <Input
                  placeholder="Site Name"
                  width="100%"
                  scale={4 / 3}
                  value={settings.siteName}
                  onChange={(e) =>
                    handleSettings({
                      ...settings,
                      siteName: e.target.value
                    })
                  }
                />
                <Spacer h={1.5} />
                <Textarea
                  placeholder="Site Description"
                  width="100%"
                  scale={4 / 3}
                  value={settings.siteDescription}
                  onChange={(e) =>
                    handleSettings({
                      ...settings,
                      siteDescription: e.target.value
                    })
                  }
                />
                <Spacer h={1.5} />
                <Button
                  onClick={() => router.back()}
                  type="secondary"
                  width="48%"
                  icon={<ChevronLeft />}
                >
                  Back
                </Button>
                <Button
                  shadow
                  type="secondary"
                  width="50%"
                  ml={'5px'}
                  iconRight={<ChevronRight />}
                  onClick={_next}
                >
                  Continue (3 / 3)
                </Button>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
      </Page>
    </SetupVerify>
  );
});

export default MetaSetup;
