import { useEffect, useState } from 'react';
import { Spacer, Text, Card, Loading, Button, Avatar } from '@geist-ui/core';
import { ChevronDown } from '@geist-ui/icons';
import { formatDistance } from 'date-fns';
import { es, fr, en } from 'date-fns/locale';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import NotificationStore from 'stores/notification';
import useToken from 'components/Token';
import { useRouter } from 'next/router';
import moment from 'moment';
import Auth from 'components/Auth';
import {
  Translation,
  useLikedPostTranslation,
  useLikedCommentTranslation,
  useLikedReplyTranslation,
  useRepliedCommentTranslation,
  useRepliedPostTranslation,
  useTranslation
} from 'components/intl/Translation';
import SettingsStore from 'stores/settings';

const Notifications = observer(() => {
  const token = useToken();
  const router = useRouter();
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [
    {
      loading,
      page,
      limit,
      total,
      notifications,
      setPage,
      getNotifications,
      markAllRead,
      markRead
    }
  ] = useState(() => new NotificationStore());

  useEffect(() => {
    getSettings();
    token.id ? getNotifications(token.id, false) : null;
  }, [token]);

  const read = async (id: string, action: string, type: string) => {
    await markRead(id).then((res: any) => {
      if (res.success) {
        let t = type === 'user' ? '/u' : '/d';
        router.push(`${t}/${action}`);
      }
    });
  };

  const readAll = async () => {
    await markAllRead(token.id!).then((res: any) => {
      if (res.success) {
        getNotifications(token.id!, true);
        router.reload();
      }
    });
  };

  const lang = settings?.language;

  const renderDate = (value: any) => {
    const date = value
      ? formatDistance(new Date(value), new Date(), {
          addSuffix: true,
          locale:
            lang === 'es' ? es : lang === 'fr' ? fr : lang === 'en' ? en : null
        })
      : '';
    return <span className="locale-time">{date}</span>;
  };

  const paginate = () => {
    setPage(page + 1);
    getNotifications(token.id!, true);
  };

  const renderNotifications = (name: string, type: string) => {
    if (type === 'like-post') {
      return useLikedPostTranslation({
        name,
        lang: settings?.language,
        value: ''
      });
    } else if (type === 'like-comment') {
      return useLikedCommentTranslation({
        name,
        lang: settings?.language,
        value: ''
      });
    } else if (type === 'like-reply') {
      return useLikedReplyTranslation({
        name,
        lang: settings?.language,
        value: ''
      });
    } else if (type === 'reply-post') {
      return useRepliedPostTranslation({
        name,
        lang: settings?.language,
        value: ''
      });
    } else if (type === 'reply-comment') {
      return useRepliedCommentTranslation({
        name,
        lang: settings?.language,
        value: ''
      });
    }
  };

  const notification = notifications.map((item) => (
    <div
      className="pointer"
      key={item.id}
      onClick={() => read(item.id!, item.action!, item.type!)}
    >
      <Card
        shadow
        className={`notification-card ${item.read ? 'greyed' : 'white'}`}
      >
        <div className="notification">
          <div className="one">
            <Avatar
              src={
                item.profile && item.profile.photo
                  ? `/storage/${item.profile.photo}`
                  : '/images/avatar.png'
              }
              w={2}
              h={2}
            />
          </div>
          <div className="two">
            <Text p className="text">
              {renderNotifications(item?.name, item?.filterType)}
            </Text>
            <Text small className="date">
              {renderDate(item.createdAt)}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  ));

  return (
    <Auth>
      <Navbar
        title={useTranslation({
          lang: settings?.language,
          value: 'Notifications'
        })}
        description={useTranslation({
          lang: settings?.language,
          value: 'Notifications'
        })}
      />
      <div className="page-container top-100">
        <div className="notification-container">
          <div className="column">
            <div>
              <Text h3>
                <Translation
                  lang={settings?.language}
                  value={'Notifications'}
                />
              </Text>
            </div>
            <div>
              <Button
                type="secondary"
                scale={0.35}
                loading={loading}
                onClick={readAll}
              >
                <Translation
                  lang={settings?.language}
                  value={'Mark all read'}
                />
              </Button>
            </div>
          </div>

          <Spacer h={2} />
          {notification}
          {loading ? (
            <Loading>
              <Translation lang={settings?.language} value={'Loading'} />
            </Loading>
          ) : (
            ''
          )}
          {!loading && notifications.length === 0 ? (
            <Text h4 className="center">
              <Translation
                lang={settings?.language}
                value={'No notification'}
              />
            </Text>
          ) : (
            ''
          )}
          <Spacer />
          <div className="pagination">
            {total > notification.length ? (
              <Button
                auto
                type="abort"
                iconRight={<ChevronDown />}
                onClick={paginate}
              >
                <Translation lang={settings?.language} value={'Load more'} />
              </Button>
            ) : (
              ''
            )}
          </div>
          <Spacer h={5} />
        </div>
      </div>
    </Auth>
  );
});

export default Notifications;
