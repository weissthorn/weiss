import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import NextLink from 'next/link';
import { Text, Link, User, Spacer, Loading } from '@geist-ui/core';
import UserStore from 'stores/user';
import { pluralize } from './api/utils';

const Contributors = observer(() => {
  const [{ loading, users, getContributors }] = useState(() => new UserStore());

  useEffect(() => {
    getContributors();
  }, []);

  return (
    <>
      <Text h3>Top Contributors</Text>
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
                {item.discussion} Discussion{pluralize(item.discussion!)}{' '}
                &nbsp;- {item.coin} Coin
                {pluralize(item.coin!)}
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
