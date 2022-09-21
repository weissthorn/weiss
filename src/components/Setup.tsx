import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import SettingsStore from 'stores/settings';

const Setup = observer(() => {
  const router = useRouter();
  const [{ getSettings }] = useState(() => new SettingsStore());

  useEffect(() => {
    router.isReady
      ? getSettings().then((settings: any) => {
          if (settings.status !== 'completed') {
            router.push('/setup');
          }
        })
      : null;
  }, [router]);

  return <></>;
});

export default function isSetup() {
  return <Setup />;
}
