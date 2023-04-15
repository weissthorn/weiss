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
import { Translation, useTranslation } from 'components/intl/Translation';

const Setup = observer(() => {
  const cookie = parseCookies();
  const router = useRouter();
  const [store] = useState(() => new SettingsStore());
  const { admin, setAdmin, settings, setSettings, getSettings } = store;

  useEffect(() => {
    getSettings();
    let setup = cookie && cookie._w_setup ? JSON.parse(cookie._w_setup) : null;
    setup ? (setAdmin(setup.admin), setSettings(setup.settings)) : null;
  }, []);

  const handleSettings = (val: any) => {
    setSettings({ ...settings, ...val });
  };

  const _next = async () => {
    const { username, email, password } = admin;

    if (!settings.language) {
      toast.error(
        useTranslation({
          lang: settings?.language,
          value: 'Please select a language'
        })
      );
    } else if (!username || username.length < 3) {
      toast.error(
        useTranslation({
          lang: settings?.language,
          value: 'Username is too short. Minimum character is three.'
        })
      );
    } else if (validateEmail(email) === false) {
      toast.error(
        useTranslation({
          lang: settings?.language,
          value: 'Invalid email address'
        })
      );
    } else if (!password || password.length < 6) {
      toast.error(
        useTranslation({
          lang: settings?.language,
          value: 'Password is too short. Minimum character is six.'
        })
      );
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
              <Text h3>
                <Translation
                  lang={settings?.language}
                  value="Welcome, Let's setup blazingly!"
                />
              </Text>
              <Spacer h={2} />
              <Select
                scale={4 / 3}
                placeholder={useTranslation({
                  lang: settings?.language,
                  value: 'Select language'
                })}
                width="100%"
                value={settings.language}
                onChange={(val) => handleSettings({ language: val })}
              >
                <Select.Option value="en">
                  <Translation lang={settings?.language} value="English" />
                </Select.Option>
                <Select.Option value="fr">
                  <Translation lang={settings?.language} value="French" />
                </Select.Option>
                <Select.Option value="es">
                  <Translation lang={settings?.language} value="Spanish" />
                </Select.Option>
                <Select.Option value="de">
                  <Translation lang={settings?.language} value="German" />
                </Select.Option>
                <Select.Option value="cn">
                  <Translation lang={settings?.language} value="Chinese" />
                </Select.Option>
                <Select.Option value="ja">
                  <Translation lang={settings?.language} value="Japanese" />
                </Select.Option>
                <Select.Option value="ko">
                  <Translation lang={settings?.language} value="Korean" />
                </Select.Option>
                <Select.Option value="ru">
                  <Translation lang={settings?.language} value="Russian" />
                </Select.Option>
              </Select>
              <Spacer h={1.5} />
              <Input
                placeholder={`${useTranslation({
                  lang: settings?.language,
                  value: 'Admin'
                })} ${useTranslation({
                  lang: settings?.language,
                  value: 'Username'
                })}`}
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
                placeholder={`${useTranslation({
                  lang: settings?.language,
                  value: 'Admin'
                })} ${useTranslation({
                  lang: settings?.language,
                  value: 'Email'
                })}`}
                width="100%"
                scale={4 / 3}
                value={admin.email}
                onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              />
              <Spacer h={1.5} />
              <Input.Password
                placeholder={`${useTranslation({
                  lang: settings?.language,
                  value: 'Admin'
                })} ${useTranslation({
                  lang: settings?.language,
                  value: 'Password'
                })}`}
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
                <Translation lang={settings?.language} value="Continue" />{' '}
                &nbsp;(2/3)
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </SetupVerify>
  );
});

export default Setup;
