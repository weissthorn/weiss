import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { es, fr, enUS } from 'date-fns/locale';
import { Text, Link, Spacer, Loading } from '@geist-ui/core';
import DiscussionStore from 'stores/discussion';
import { Translation, useTranslation } from 'components/intl/Translation';

type recommendProps = {
  title: string;
  category: string;
  lang: string;
};

const Recommendation = observer((props: recommendProps) => {
  const [{ loading, discussions, getRecommendation }] = useState(
    () => new DiscussionStore()
  );

  useEffect(() => {
    props.title ? getRecommendation(props.title, props.category) : null;
  }, []);

  const ellipsis = (val: string) => {
    val = val.length >= 80 ? val.substring(0, 75) + '....' : val;
    return val;
  };

  const renderDate = (value: any) => {
    const date: any = value
      ? format(new Date(value), 'MMM d, yyyy @ h:mm a', {
          locale:
            props.lang === 'es'
              ? es
              : props.lang === 'fr'
              ? fr
              : props.lang === 'en'
              ? enUS
              : null
        })
      : '';
    return <span className="locale-time">{date}</span>;
  };

  return (
    <>
      <Text h4>
        <Translation lang={props.lang} value="Recommend Discussions" />
      </Text>
      {loading ? <Loading /> : ''}

      {discussions
        .filter((item) => item.title !== props.title)
        .map((item) => (
          <div key={item.id}>
            <NextLink href={`/d/${item.slug}`}>
              <Link className="post-link">{ellipsis(item.title!)}</Link>
            </NextLink>
          </div>
        ))}

      <Spacer />
    </>
  );
});

export default Recommendation;
