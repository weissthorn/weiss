import React, { useEffect, useState } from 'react';
import {
  Text,
  Pagination,
  Avatar,
  Spacer,
  Card,
  Loading
} from '@geist-ui/core';
import moment from 'moment';
import { ChevronRightCircle, ChevronLeftCircle } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import Navbar from 'components/Navbar';
import EditorModal from 'components/modals/EditorModal';
import useToken from 'components/Token';
import UserStore from 'stores/user';
import { useRouter } from 'next/router';
import MinimalPost from 'components/MinimalPost';
import SettingsStore from 'stores/settings';
import { pluralize, formatNumber } from 'components/api/utils';
import DiscussionStore from 'stores/discussion';

const User = observer(() => {
  const token = useToken();
  const router = useRouter();
  const { slug } = router.query;
  const [id, setId] = useState('');
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ user, getUsername }] = useState(() => new UserStore());
  const [
    { loading, total, page, limit, discussions, setPage, getDiscussionsByUser }
  ] = useState(() => new DiscussionStore());

  useEffect(() => {
    getSettings();
    router.isReady
      ? getUsername(slug as string).then((id) => {
          if (id) {
            setId(id);
            getDiscussionsByUser(id);
          }
        })
      : null;
  }, [router]);

  const paginate = (val: number) => {
    setPage(val);
    getDiscussionsByUser(id);
  };

  return (
    <div>
      <Navbar title={`${user.name}`} description={`${user.name}`} />

      <div
        className="category-box"
        style={{
          background: '#2A222E'
        }}
      >
        {user.id ? (
          <div className="gridlock">
            <div className="item">
              <Avatar
                w={3}
                h={3}
                src={
                  user.photo ? `/storage/${user.photo}` : '/images/avatar.png'
                }
              />
            </div>
            <div className="item">
              <Text h3 className="capitalize">
                {user.name}
              </Text>
              <Text small>
                Joined {moment(user.createdAt).format('MMM D, YYYY')}
              </Text>
              <Spacer w={1} inline />
              <Text small>
                {formatNumber(user.discussion!)} Discussion
                {pluralize(user.discussion!)}
              </Text>
              <Spacer w={1} inline />
              <Text small>
                {formatNumber(user.coin!)} Coin{pluralize(user.coin!)}
              </Text>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="page-container">
        <div className="discussion-container">
          <div className="item">
            {loading ? (
              <div>
                <Loading>Loading discussions</Loading>
              </div>
            ) : (
              ''
            )}

            {discussions.map((item: any) => (
              <MinimalPost
                key={item.id}
                title={item.title}
                slug={item.slug}
                category={item.category?.title}
                comment={item.comment}
                date={item.createdAt}
              />
            ))}
            {!loading && discussions.length === 0 ? (
              <div className="center">
                <Spacer h={3} />
                <Text h4 className="center">
                  No discussion
                </Text>
              </div>
            ) : (
              ''
            )}
            <Spacer />
            {total! >= limit ? (
              <div className="pagination">
                <Pagination
                  count={Math.round(total! / limit)}
                  initialPage={page}
                  limit={limit}
                  onChange={paginate}
                >
                  <Pagination.Next>
                    <ChevronRightCircle />
                  </Pagination.Next>
                  <Pagination.Previous>
                    <ChevronLeftCircle />
                  </Pagination.Previous>
                </Pagination>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="item">
            <aside>
              <div className="sidenav">
                {settings.advert?.right ? (
                  <Card>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: settings.advert?.right!
                      }}
                    ></div>
                  </Card>
                ) : (
                  ''
                )}
              </div>
            </aside>
          </div>
        </div>

        {/* <EditorModal show={false} /> */}
      </div>
    </div>
  );
});

export default User;
