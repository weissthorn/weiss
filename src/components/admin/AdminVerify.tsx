import React from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import SettingsStore from 'stores/settings';

const AdminVerify = observer((props: any) => {
  const router = useRouter();
  const [{ settings, getSettings }] = React.useState(() => new SettingsStore());

  React.useEffect(() => {
    router.isReady
      ? getSettings().then((settings: any) => {
          let { data } = settings;
          data && data.status !== 'completed' ? goTo('/setup') : '';
        })
      : null;
  }, [router]);

  const goTo = (value: string) => {
    router.push(value);
  };

  if (settings && settings.siteName && settings.language) {
    return <div>{props.children}</div>;
  } else {
    return <></>;
  }
});

export default AdminVerify;
