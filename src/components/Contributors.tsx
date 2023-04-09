import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import NextLink from 'next/link';
import { Text, Link, User, Spacer, Loading } from '@geist-ui/core';
import UserStore from 'stores/user';
import { pluralize } from './api/utils';
import { Translation, useTranslation } from 'components/intl/Translation';

type contributorProps = {
  lang: string;
};
const Contributors = observer((props: contributorProps) => {
  const [{ loading, users, getContributors }] = useState(() => new UserStore());

  useEffect(() => {
    getContributors();
  }, []);

  return (
    <>
      <Text h3>
        <Translation lang={props.lang} value="Top Contributors" />
      </Text>
      {loading ? <Loading /> : ''}
      {users.map((item) => (
        <NextLink key={item.id} href={`/u/${item.username}`}>
          <Link>
            <User
              src={`${
                item.photo ? '/storage/' + item.photo : '/images/avatar.png'
              }`}
              name={item.name}
            >
              <Text small>
                {item.discussion}{' '}
                {useTranslation({
                  lang: props.lang,
                  value: `Discussion${pluralize(item.discussion!)}`
                })}{' '}
                &nbsp;- {item.coin}{' '}
                {useTranslation({
                  lang: props.lang,
                  value: `Coin${pluralize(item.coin!)}`
                })}
              </Text>
            </User>
          </Link>
        </NextLink>
      ))}
      <Spacer />
    </>
  );
});

export default Contributors;
