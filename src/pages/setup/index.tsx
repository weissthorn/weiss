import { useState, useEffect } from 'react';
import { Spacer, Text, Button, Input, Card, Select } from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { ChevronRight } from '@geist-ui/icons';
import Navbar from 'components/Navbar';
import SettingsStore from 'stores/settings';
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail } from 'components/api/utils';
import { setCookie, parseCookies } from 'nookies';
import SetupVerify from 'components/admin/SetupVerify';

const Setup = observer(() => {
  const cookie = parseCookies();
  const router = useRouter();
  const [store] = useState(() => new SettingsStore());
  const { admin, setAdmin, settings, setSettings } = store;

  useEffect(() => {
    let setup = cookie && cookie._w_setup ? JSON.parse(cookie._w_setup) : null;
    setup ? (setAdmin(setup.admin), setSettings(setup.settings)) : null;
  }, []);

  const handleSettings = (val: any) => {
    setSettings({ ...settings, ...val });
  };

  const _next = async () => {
    const { username, email, password } = admin;

    if (!settings.language) {
      toast.error('Please select a language!');
    } else if (!username || username.length < 3) {
      toast.error('Username is too short!');
    } else if (validateEmail(email) === false) {
      toast.error('Invalid email address!');
    } else if (!password || password.length < 6) {
      toast.error('Password is too short! Minimum character is six.');
    } else {
      admin.name = admin.username;
      const setup = { settings, admin };
      setCookie(null, '_w_setup', JSON.stringify(setup), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      router.push('/setup/meta');
    }
  };

  return (
    <SetupVerify>
      <Navbar
        title="Welcome - Setup Weiss"
        description="Welcome - Setup Weiss"
        hide
      />
      <Toaster />
      <div className="polkadot">
        <div className="page-container top-100">
          <div className="boxed">
            <Text h2 width={'100%'} style={{ textAlign: 'center' }}>
              Weiss
            </Text>

            <Card shadow width="100%">
              <Text h3>Welcome, Let's setup blazingly!</Text>
              <Spacer h={2} />
              <Select
                scale={4 / 3}
                placeholder="Select language"
                width="100%"
                value={settings.language}
                onChange={(val) => handleSettings({ language: val })}
              >
                <Select.Option value="en">English</Select.Option>
                <Select.Option value="fr">French</Select.Option>
                <Select.Option value="es">Spanish</Select.Option>
              </Select>
              <Spacer h={1.5} />
              <Input
                placeholder="Admin Username"
                width="100%"
                scale={4 / 3}
                value={admin.username}
                onChange={(e) =>
                  setAdmin({ ...admin, username: e.target.value })
                }
              />
              <Spacer h={1.5} />
              <Input
                htmlType={'email'}
                placeholder="Admin Email"
                width="100%"
                scale={4 / 3}
                value={admin.email}
                onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              />
              <Spacer h={1.5} />
              <Input.Password
                placeholder="Admin Password"
                width="100%"
                scale={4 / 3}
                value={admin.password}
                onChange={(e) =>
                  setAdmin({ ...admin, password: e.target.value })
                }
              />
              <Spacer h={1.5} />
              <Button
                shadow
                type="secondary"
                width="100%"
                iconRight={<ChevronRight />}
                onClick={_next}
              >
                Continue (2/3)
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </SetupVerify>
  );
});

export default Setup;
