import { useEffect, useState } from 'react';
import { Spacer, Text, User, Card, Link, Button, Avatar } from '@geist-ui/core';
import {
  ChevronRightCircle,
  ChevronLeftCircle,
  Circle,
  ChevronDown
} from '@geist-ui/icons';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import NotificationStore from 'stores/notification';
import useToken from 'components/Token';
import { useRouter } from 'next/router';
import moment from 'moment';

const Notifications = observer(() => {
  const token = useToken();
  const router = useRouter();
  const [store] = useState(() => new NotificationStore());
  const { loading, page, limit, notifications, getNotifications } = store;

  useEffect(() => {
    token.id ? getNotifications(token.id, true) : null;
  }, [token]);

  const read = (id: string, action: any) => {};

  const notification = notifications.map((item, key) => (
    <div
      className="pointer"
      key={key}
      onClick={() => read(item.id!, item.action)}
    >
      <Card color={item.read ? 'white rq-opacity' : 'white'}>
        <User src={'/avatar.png'} name="Shola Akinlade liked your discussions.">
          <Text small>{moment(item.createdAt).fromNow()}</Text>
        </User>
      </Card>
    </div>
  ));
  return (
    <div>
      <Navbar title="Notifications" description="Notifications - Weiss" />
      <div className="page-container top-100">
        <div className="notification-container">
          <div className="column">
            <div>
              <Text h3>Notifications</Text>
            </div>
            <div>
              <Button type="secondary" scale={0.35} loading={loading}>
                Mark all read
              </Button>
            </div>
          </div>

          <Spacer h={2} />
          <Card shadow className="notification-card">
            {notification}
            <div className="notification">
              <div
                className="one"
                // key={key}
                // onClick={() => read(item.id, item.action)}
              >
                <Avatar src={'/images/avatar.png'} w={2} h={2} />
              </div>
              <div className="two">
                <Text p className="text">
                  Shola Akinlade liked your discussions.
                </Text>
                <Text small className="date">
                  {moment().fromNow()}
                </Text>
              </div>
            </div>
          </Card>
          <Card shadow className="notification-card greyed">
            <div className="notification">
              <div
                className="one"
                // key={key}
                // onClick={() => read(item.id, item.action)}
              >
                <Avatar src={'/images/avatar.png'} w={2} h={2} />
              </div>
              <div className="two">
                <Text p className="text">
                  Shola Akinlade liked your discussions.
                </Text>
                <Text small className="date">
                  {moment().fromNow()}
                </Text>
              </div>
            </div>
          </Card>
          <Card shadow className="notification-card">
            <div className="notification">
              <div
                className="one"
                // key={key}
                // onClick={() => read(item.id, item.action)}
              >
                <Avatar src={'/images/avatar.png'} w={2} h={2} />
              </div>
              <div className="two">
                <Text p className="text">
                  Shola Akinlade liked your discussions.
                </Text>
                <Text small className="date">
                  {moment().fromNow()}
                </Text>
              </div>
            </div>
          </Card>

          <Spacer />
          <div className="pagination">
            {notification.length >= limit ? (
              <Button auto type="abort" iconRight={<ChevronDown />}>
                Load more
              </Button>
            ) : (
              ''
            )}
          </div>
          <Spacer h={5} />
        </div>
      </div>
    </div>
  );
});

export default Notifications;
