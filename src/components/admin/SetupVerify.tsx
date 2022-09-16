import React from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import SettingsStore from 'stores/settings';

const SetupVerify = observer((props: any) => {
  const router = useRouter();
  const [{ settings, getSettings }] = React.useState(() => new SettingsStore());

  React.useEffect(() => {
    getSettings();
  }, [router]);

  if (settings.siteName && settings.language) {
    router.push('/');
    return <></>;
  } else {
    return <div>{props.children}</div>;
  }
});

export default SetupVerify;
