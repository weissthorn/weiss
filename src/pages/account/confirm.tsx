import { useEffect, useState } from 'react';
import {
  Spacer,
  Text,
  Link,
  Button,
  Input,
  Grid,
  Card,
  Page,
  Image
} from '@geist-ui/core';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';

const Confirm = observer(() => {
  const cookie = parseCookies();
  const router = useRouter();
  const [code, setCode] = useState('');
  const [_code, _setCode] = useState<{ data?: string; code?: number }>({});
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ user, getUser, updateUser }] = useState(() => new UserStore());

  useEffect(() => {
    getSettings();
    let _code: any =
      cookie && cookie._w_code ? JSON.parse(cookie._w_code) : null;
    _setCode(_code);
  }, []);

  const verify = async () => {
    if (Number(code) !== _code.code) {
      toast.error('Code is incorrect or expired.');
    } else {
      await getUser(_code.data!).then(async (res: any) => {
        if (res.success) {
          await updateUser({ id: _code.data, status: 'active' });
          destroyCookie(null, '_w_code');

          toast.success(
            'Account verified successfully! Please sign in to continue.'
          );
          router.push('/login');
        } else {
          toast.error('Unable to verify user. Please try again later');
        }
      });
    }
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
                <Image src={`/storage/${settings.siteLogo}`} />
              ) : (
                <Text h2 width={'100%'}>
                  {settings.siteName}
                </Text>
              )}
            </div>

            <Card shadow width="100%">
              <Input
                className="uppercase"
                width="100%"
                scale={4 / 3}
                onChange={(e) => setCode(e.target.value)}
              >
                Enter code sent to your email
              </Input>
              <Spacer h={1.5} />
              <Button shadow type="secondary" width="100%" onClick={verify}>
                Continue &rarr;
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Confirm;
