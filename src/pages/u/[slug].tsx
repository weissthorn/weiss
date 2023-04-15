import { useEffect, useState } from 'react';
import {
  Text,
  Pagination,
  Avatar,
  Spacer,
  Card,
  Loading
} from '@geist-ui/core';
import { format } from 'date-fns';
import { es, fr, enUS, de, ja, ru, zhCN, ko } from 'date-fns/locale';
import { ChevronRightCircle, ChevronLeftCircle } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import Navbar from 'components/Navbar';
import UserStore from 'stores/user';
import { useRouter } from 'next/router';
import MinimalPost from 'components/MinimalPost';
import SettingsStore from 'stores/settings';
import { pluralize, formatNumber } from 'components/api/utils';
import DiscussionStore from 'stores/discussion';
import { Translation } from 'components/intl/Translation';

const User = observer(() => {
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

  const lang = settings.language;

  const renderDate = (value: any) => {
    const date: any = value
      ? format(new Date(value), 'MMM d, yyyy @ h:mm a', {
          locale:
            lang === 'es'
              ? es
              : lang === 'fr'
              ? fr
              : lang === 'en'
              ? enUS
              : lang === 'ru'
              ? ru
              : lang === 'de'
              ? de
              : lang === 'cn'
              ? zhCN
              : lang === 'jp'
              ? ja
              : lang === 'ko'
              ? ko
              : null
        })
      : '';
    return <span className="locale-time">{date}</span>;
  };

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
                <Translation lang={settings?.language} value="Joined" />{' '}
                {renderDate(user.createdAt)}
              </Text>
              <Spacer w={1} inline />
              <Text small>
                {formatNumber(user.discussion!)}{' '}
                <Translation
                  lang={settings?.language}
                  value={`Discussion${pluralize(user.discussion!)}`}
                />
              </Text>
              <Spacer w={1} inline />
              <Text small>
                {formatNumber(user.coin!)}{' '}
                <Translation
                  lang={settings?.language}
                  value={`Coin${pluralize(user.coin!)}`}
                />
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
                <Loading>
                  <Translation lang={settings?.language} value={`Loading`} />
                  &nbsp;
                  <Translation
                    lang={settings?.language}
                    value={`Discussions`}
                  />
                </Loading>
              </div>
            ) : (
              ''
            )}

            {discussions.map((item: any) => (
              <MinimalPost
                lang={settings?.language}
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
                  <Translation
                    lang={settings?.language}
                    value={`No Discussion`}
                  />
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
