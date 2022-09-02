import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import AnalyticsStore from 'stores/analytics';

const Analytics = observer(() => {
  const router = useRouter();
  const [{ trackPage }] = useState(() => new AnalyticsStore());

  useEffect(() => {
    router.isReady ? getPage(router.asPath) : null;
  }, [router]);

  const getPage = async (url: string) => {
    await trackPage({ url });
  };

  return <></>;
});

export default function useAnalytics() {
  return <Analytics />;
}
