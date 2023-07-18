import { useEffect, useState } from 'react';
import { Spacer, Text, Link, Button, Input, Card, Image } from '@geist-ui/core';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import { setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';
import { Translation, useTranslation } from 'components/intl/Translation';

const Forgot = observer(() => {
  const router = useRouter();
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ loading, user, setUser, forgot }] = useState(() => new UserStore());

  useEffect(() => {
    getSettings();
  }, []);

  const resetPass = async () => {
    const { email } = user;
    await forgot({ email }).then((res: any) => {
      if (res.success) {
        let reset = { type: 'forgot', code: res.code, data: res.data };

        setCookie(null, '_w_code', JSON.stringify(reset), {
          maxAge: 2 * 60 * 60,
          path: '/'
        });
        toast.success(
          useTranslation({
            lang: settings?.language,
            value: 'Please verify account to continue.'
          })
        );
        router.push('/reset');
      } else {
        toast.error(
          useTranslation({
            lang: settings?.language,
            value: res.message
          })
        );
      }
    });
  };

  return (
    <div className="polkadot">
      <Navbar
        title={useTranslation({
          lang: settings?.language,
          value: 'Account recovery'
        })}
        description={useTranslation({
          lang: settings?.language,
          value: 'Account recovery'
        })}
        hide
      />
      <Toaster />
      <div>
        <div className="page-container top-100">
          <div className="boxed">
            <div className="logo-container center">
              {settings.siteLogo ? (
                <Image src={`/storage/${settings.siteLogo}`} height={'65px'} />
              ) : (
                <Text h2 width={'100%'}>
                  {settings.siteName}
                </Text>
              )}
            </div>

            <Card shadow width="100%">
              <Text h3>
                <Translation
                  lang={settings?.language}
                  value="Account recovery"
                />
              </Text>
              <Spacer h={2} />
              <Input
                placeholder={useTranslation({
                  lang: settings?.language,
                  value: 'Email address'
                })}
                width="100%"
                scale={2}
                onChange={(e) =>
                  setUser({ ...user, ...{ email: e.target.value } })
                }
              />
              <Spacer h={1.5} />
              <Button
                shadow
                type="secondary"
                width="100%"
                loading={loading}
                onClick={() => {
                  user.email ? resetPass() : false;
                }}
              >
                <Translation lang={settings?.language} value="Reset password" />
              </Button>

              <Text font={'14px'}>
                <Link href="/login" underline>
                  &larr;
                  <Translation
                    lang={settings?.language}
                    value="Back to login"
                  />
                </Link>
              </Text>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Forgot;
