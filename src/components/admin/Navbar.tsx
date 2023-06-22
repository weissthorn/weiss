import { useState, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import {
  Text,
  Popover,
  Link,
  Button,
  Grid,
  Card,
  User,
  Spacer,
  Badge,
  Image
} from '@geist-ui/core';
import {
  Sun,
  Moon,
  Bell,
  Power,
  Menu,
  ChevronDown,
  ExternalLink
} from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import useToken from '../Token';
import SettingsStore from 'stores/settings';
import NotificationStore from 'stores/notification';
import { Translation, useTranslation } from 'components/intl/Translation';

type navbarProps = {
  title: string;
  description: string;
  hide?: boolean;
};

const Navbar = observer((props: navbarProps) => {
  const token = useToken();
  const router = useRouter();
  const cookie = parseCookies();
  const [theme, setTheme] = useState('weiss-light');
  const [show, setMenu] = useState(false);
  const { title, description, hide } = props;
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ unread, getUnreadNotification }] = useState(
    () => new NotificationStore()
  );

  useEffect(() => {
    cookie && cookie.theme ? setTheme(cookie.theme) : '';
    getSettings();
    token.id ? getUnreadNotification(token.id) : null;
  }, [theme, token]);

  const switchTheme = (val: string) => {
    setCookie(null, 'theme', val, {
      path: '/'
    });
  };

  const getFirstName = (name: string) => {
    let first: any = name.split(' ');
    return first[0];
  };

  const logout = () => {
    destroyCookie(null, '_w_auth');
    router.push('/');
  };

  const menu = () => (
    <div>
      <Popover.Item>
        <NextLink href={`/u/${token.username}`}>
          <Link>
            <Translation lang={settings?.language} value="Profile" />
          </Link>
        </NextLink>
      </Popover.Item>
      <Popover.Item line />
      {token.id ? (
        <>
          <Popover.Item>
            <NextLink href="/admin">
              <Link>
                <Translation lang={settings?.language} value="Admin" />
              </Link>
            </NextLink>
          </Popover.Item>
          <Popover.Item line />
        </>
      ) : (
        ''
      )}
      <Popover.Item>
        <Link href="/settings">
          <Translation lang={settings?.language} value="Settings" />
        </Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <Link href="#" icon onClick={logout}>
          <Translation lang={settings?.language} value="Log out" />{' '}
          <Spacer w={0.5} inline />
        </Link>
      </Popover.Item>
    </div>
  );

  const themeMenu = () => (
    <>
      <Popover.Item>
        <Link onClick={() => switchTheme('weiss-light')}>
          <Sun size={15} /> <Spacer w={0.5} />
          <Translation lang={settings?.language} value="Light" />
        </Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <Link onClick={() => switchTheme('weiss-dark')}>
          <Moon size={15} /> <Spacer w={0.5} />
          <Translation lang={settings?.language} value="Dark" />
        </Link>
      </Popover.Item>
    </>
  );

  const MenuItem = () => (
    <div className="menu">
      <Spacer w={1} />
      <User
        className="pointer"
        src={token.photo ? `/storage/${token.photo}` : '/images/avatar.png'}
        name={token.name}
      />

      <Text p>
        <NextLink href={`/u/${token.username}`}>
          <Link>
            <Translation lang={settings?.language} value="Profile" />
          </Link>
        </NextLink>
      </Text>
      {token.role === 'admin' ? (
        <Text p>
          <NextLink href="/admin">
            <Link>
              <Translation lang={settings?.language} value="Admin" />
            </Link>
          </NextLink>
        </Text>
      ) : (
        ''
      )}
      <Text p>
        <NextLink href="/settings">
          <Link>
            <Translation lang={settings?.language} value="Settings" />
          </Link>
        </NextLink>
      </Text>
      <Text p>
        <Link href="#" icon onClick={logout}>
          <Translation lang={settings?.language} value="Log out" />{' '}
          <Spacer w={0.5} inline />
        </Link>
      </Text>
    </div>
  );

  return (
    <div className="navbar">
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="icon" href={`/storage/${settings.siteFavicon}`} />
      </Head>

      <Card
        shadow
        width="100%"
        className="without-radius"
        style={{ display: hide ? 'none' : 'inherit' }}
      >
        <div className="inner">
          <Grid.Container gap={0}>
            <Grid xs={18} md={6}>
              <NextLink href="/">
                <Link>
                  {settings.siteLogo ? (
                    <Image
                      className="site-logo"
                      src={`/storage/${settings.siteLogo}`}
                      style={{ width: 'auto', height: 32 }}
                    />
                  ) : (
                    <Text b>{settings.siteName}</Text>
                  )}
                </Link>
              </NextLink>
              <Spacer inline />
              <NextLink href="/">
                <Link>
                  <Translation
                    lang={settings?.language}
                    value="Go to Discussions"
                  />
                  &nbsp;&rarr;
                </Link>
              </NextLink>
            </Grid>
            <Grid xs={6} md={0}>
              <Badge.Anchor>
                {unread ? (
                  <Badge type="error" scale={0.5}>
                    {unread}
                  </Badge>
                ) : (
                  ''
                )}
                <NextLink href="/notifications">
                  <Link>
                    <Bell />
                  </Link>
                </NextLink>
              </Badge.Anchor>
              <Spacer w={3} inline />
              <Button
                icon={<Menu />}
                auto
                scale={2 / 3}
                onClick={() => setMenu(!show)}
              />
              <Spacer w={2} inline />
            </Grid>
            <Grid xs={0} md={10}>
              &nbsp;
            </Grid>
            <Grid xs={0} md={6}>
              {token.id ? (
                <>
                  <Spacer w={5} inline />
                  <Badge.Anchor>
                    {unread ? (
                      <Badge type="error" scale={0.5}>
                        {unread}
                      </Badge>
                    ) : (
                      ''
                    )}
                    <NextLink href="/notifications">
                      <Link>
                        <Bell />
                      </Link>
                    </NextLink>
                  </Badge.Anchor>
                  <Spacer w={2} inline />
                  <Popover content={menu}>
                    <User
                      className="pointer"
                      src={
                        token.photo
                          ? `/storage/${token.photo}`
                          : '/images/avatar.png'
                      }
                      name={getFirstName(token.name!)}
                    />
                    <ChevronDown size={16} className="caret" />
                  </Popover>
                </>
              ) : (
                <></>
              )}
            </Grid>
            <Grid xs={0} lg={1}>
              <Spacer w={3} inline />
              <Popover content={themeMenu}>
                <Button type="abort" auto scale={2 / 3}>
                  {theme === 'weiss-dark' ? (
                    <Moon />
                  ) : theme === 'weiss-light' ? (
                    <Sun />
                  ) : (
                    <Sun />
                  )}
                </Button>
              </Popover>
            </Grid>
          </Grid.Container>
        </div>
      </Card>
      {show ? <MenuItem /> : ''}
    </div>
  );
});

export default Navbar;
