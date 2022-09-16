import { useEffect, useState } from 'react';
import { Spacer, Text, Card, Loading, Button, Avatar } from '@geist-ui/core';
import { ChevronDown } from '@geist-ui/icons';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import NotificationStore from 'stores/notification';
import useToken from 'components/Token';
import { useRouter } from 'next/router';
import moment from 'moment';
import Auth from 'components/Auth';

const Notifications = observer(() => {
  const token = useToken();
  const router = useRouter();
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
      }
    });
  };

  const paginate = () => {
    setPage(page + 1);
    getNotifications(token.id!, true);
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
              {item.message}
            </Text>
            <Text small className="date">
              {moment(item.createdAt).fromNow()}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  ));

  return (
    <Auth>
      <Navbar title="Notifications" description="Notifications" />
      <div className="page-container top-100">
        <div className="notification-container">
          <div className="column">
            <div>
              <Text h3>Notifications</Text>
            </div>
            <div>
              <Button
                type="secondary"
                scale={0.35}
                loading={loading}
                onClick={readAll}
              >
                Mark all read
              </Button>
            </div>
          </div>

          <Spacer h={2} />
          {notification}
          {loading ? <Loading>Loading </Loading> : ''}
          {!loading && notifications.length === 0 ? (
            <Text h4 className="center">
              No notification
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
                Load more
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
