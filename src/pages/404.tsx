import { useState, useEffect } from 'react';
import { Spacer, Text, Button } from '@geist-ui/core';
import Navbar from 'components/Navbar';
import Link from 'next/link';
import SettingsStore from 'stores/settings';
import { Translation, useTranslation } from 'components/intl/Translation';
import { ChevronLeft } from '@geist-ui/icons';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

const PageNotFound = () => {
  const [{ settings, getSettings }] = useState(() => new SettingsStore());

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <div>
      <Navbar title="Page not found" description="Page not found" />
      <div className="page-container top-100 center">
        <Spacer h={4} />
        <Text h3>
          <Translation
            lang={settings?.language}
            value="Oops! Page not found or has been deleted."
          />
        </Text>
        <Spacer h={2} />
        <Link href="/">
          <Button auto type="secondary" icon={<ChevronLeft />}>
            <Translation lang={settings?.language} value="Back to home" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default observer(PageNotFound);
