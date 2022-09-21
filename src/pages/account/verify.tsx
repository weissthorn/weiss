import { useEffect, useState } from 'react';
import { Spacer, Text, Link, Button, Input, Card } from '@geist-ui/core';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import { setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';

const Verify = observer(() => {
  const router = useRouter();
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ loading, user, setUser, verifyAccount }] = useState(
    () => new UserStore()
  );

  useEffect(() => {
    getSettings();
  }, []);

  const verifyEmail = async () => {
    const { email } = user;
    await verifyAccount({ email }).then((res: any) => {
      if (res.success) {
        let reset = { type: 'verification', code: res.code, data: res.data };

        setCookie(null, '_w_code', JSON.stringify(reset), {
          maxAge: 2 * 60 * 60,
          path: '/'
        });
        toast.success('Please verify account to continue.');
        router.push('/account/confirm');
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="polkadot">
      <Navbar
        title="Account verification"
        description="Account verification"
        hide
      />
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

            <Card shadow width="100%">
              <Text h3>Account verification</Text>
              <Spacer h={2} />
              <Input
                placeholder="Email address"
                width="100%"
                scale={4 / 3}
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
                onClick={verifyEmail}
              >
                Continue &rarr;
              </Button>

              <Text font={'14px'}>
                <Link href="/login" underline>
                  &larr; Back to Login
                </Link>
              </Text>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Verify;
