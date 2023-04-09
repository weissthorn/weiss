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
  Image,
  Input,
  Tabs
} from '@geist-ui/core';
import {
  Sun,
  Moon,
  Bell,
  Search,
  Menu,
  ChevronDown,
  Edit,
  XCircleFill
} from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import useToken from './Token';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';
import DiscussionStore from 'stores/discussion';
import NotificationStore from 'stores/notification';
import { Translation, useTranslation } from 'components/intl/Translation';

type navbarProps = {
  title?: string;
  description?: string;
  hide?: boolean;
  startConversation?: () => void;
};

const Navbar = observer((props: navbarProps) => {
  const token = useToken();
  const router = useRouter();
  const cookie = parseCookies();
  const [theme, setTheme] = useState('weiss-light');
  const [show, setMenu] = useState(false);
  const [modal, toggleSearch] = useState<any>(false);
  const { title, description, hide, startConversation } = props;
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ unread, getUnreadNotification }] = useState(
    () => new NotificationStore()
  );
  const [{ users, setUsers, searchUsers }] = useState(() => new UserStore());
  const [{ discussions, setDiscussions, publicDiscussionSearch }] = useState(
    () => new DiscussionStore()
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

  const handleSearch = async (val: string) => {
    val = val.trim();
    if (val.length) {
      await publicDiscussionSearch(val);
      await searchUsers(val);
    } else {
      setDiscussions([]);
      setUsers([]);
    }
  };

  const logout = () => {
    destroyCookie(null, '_w_auth');
    router.push('/login');
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
      {token.role === 'admin' ? (
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
        <NextLink href="/settings">
          <Link>
            <Translation lang={settings?.language} value="Settings" />
          </Link>
        </NextLink>
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
      {token.id ? (
        <div>
          <Spacer w={1} />
          <User
            className="pointer"
            src={token.photo ? `/storage/${token.photo}` : '/images/avatar.png'}
            name={getFirstName(token.name!)}
          />

          <Text p>
            <NextLink href="/start-discussion">
              <Link>
                <Translation
                  lang={settings?.language}
                  value="Start a discussion"
                />
              </Link>
            </NextLink>
          </Text>
          <Text p>
            <NextLink href="/">
              <Link>
                <Translation lang={settings?.language} value="Discussions" />
              </Link>
            </NextLink>
          </Text>
          <Text p>
            <NextLink href="/category">
              <Link>
                <Translation lang={settings?.language} value="Categories" />
              </Link>
            </NextLink>
          </Text>
          <Text p>
            <NextLink href="/members">
              <Link>
                <Translation lang={settings?.language} value="Members" />
              </Link>
            </NextLink>
          </Text>
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
      ) : (
        <>
          <Text p>
            <NextLink href="/">
              <Link>
                <Translation lang={settings?.language} value="Discussions" />
              </Link>
            </NextLink>
          </Text>
          <Text p>
            <NextLink href="/category">
              <Link>
                <Translation lang={settings?.language} value="Categories" />
              </Link>
            </NextLink>
          </Text>
          <Text p>
            <NextLink href="/members">
              <Link>
                <Translation lang={settings?.language} value="Members" />
              </Link>
            </NextLink>
          </Text>
          <Text p>
            <NextLink href="/signup">
              <Link>
                <Translation lang={settings?.language} value="Signup" />
              </Link>
            </NextLink>
          </Text>
          <Text p>
            <NextLink href="/login">
              <Link>
                <Translation lang={settings?.language} value="Login" />
              </Link>
            </NextLink>
          </Text>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar">
      <Head>
        <meta
          name="description"
          content={`${description} - ${settings.siteName}`}
        />
        <title>{title}</title>
        <link rel="icon" href={`/storage/${settings.siteFavicon}`} />
      </Head>

      {modal ? (
        <div className="custom-modal">
          <span className="close" onClick={() => toggleSearch(!modal)}>
            <XCircleFill size={30} />
          </span>
          <div className="inner">
            <Spacer h={3} />
            <Input
              scale={4 / 3}
              width="100%"
              iconRight={<Search />}
              placeholder={useTranslation({
                lang: settings.language ? settings.language : '',
                value: 'Search discussion, user, email.....'
              })}
              clearable
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Spacer h={3} />

            <div>
              <Tabs initialValue="1" leftSpace="0">
                <Tabs.Item
                  value="1"
                  label={useTranslation({
                    lang: settings?.language,
                    value: 'Discussion'
                  })}
                >
                  {discussions.map((item) => (
                    <div key={item.id}>
                      <NextLink href={`/d/${item.slug}`}>
                        <Link width="100%">
                          <Text h4 mb="0">
                            {item.title}
                          </Text>
                        </Link>
                      </NextLink>
                    </div>
                  ))}
                </Tabs.Item>
                <Tabs.Item
                  value="2"
                  label={useTranslation({
                    lang: settings?.language,
                    value: 'User'
                  })}
                >
                  <Spacer h={2} />
                  {users.map((item) => (
                    <div key={item.id}>
                      <NextLink href={`/u/${item.username}`}>
                        <Link width="100%" mb={1}>
                          <User
                            scale={3}
                            src={`${
                              item.photo
                                ? '/storage/' + item.photo
                                : '/images/avatar.png'
                            }`}
                            name={
                              <h4 style={{ marginTop: 10 }}>
                                {item.name} &nbsp;&nbsp;
                                <Text small className="username">
                                  @{item.username}
                                </Text>
                              </h4>
                            }
                          ></User>
                        </Link>
                      </NextLink>
                    </div>
                  ))}
                </Tabs.Item>
              </Tabs>
              <Spacer h={3} />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      <Card
        shadow
        width="100%"
        className="without-radius"
        style={{
          display: hide ? 'none' : 'inherit'
        }}
      >
        <div className="inner">
          <Grid.Container gap={0}>
            <Grid xs={16} md={4}>
              <NextLink href="/">
                <Link>
                  {settings.siteLogo ? (
                    <Image
                      className="site-logo"
                      src={`/storage/${settings.siteLogo}`}
                      style={{ width: 'auto', height: 30 }}
                    />
                  ) : (
                    <Text span>{settings.siteName}</Text>
                  )}
                </Link>
              </NextLink>
            </Grid>
            <Grid xs={0} md={10}>
              <NextLink href="/">
                <Link>
                  <Translation lang={settings?.language} value="Discussions" />
                </Link>
              </NextLink>

              <Spacer inline />
              <NextLink href="/category">
                <Link>
                  <Translation lang={settings?.language} value="Categories" />
                </Link>
              </NextLink>
              <Spacer inline />
              <NextLink href="/members">
                <Link>
                  <Translation lang={settings?.language} value="Members" />
                </Link>
              </NextLink>
            </Grid>
            <Grid xs={8} md={0}>
              <span className="pointer" onClick={() => toggleSearch(!modal)}>
                <Search />
              </span>
              <Spacer w={3} inline />
              {token.id ? (
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
              ) : (
                ''
              )}
              <Spacer w={3} inline />
              <Button
                icon={<Menu />}
                auto
                scale={2 / 3}
                onClick={() => setMenu(!show)}
              />
              <Spacer w={2} inline />
            </Grid>

            <Grid xs={0} md={6}>
              {token.id ? (
                <>
                  <span
                    className="pointer"
                    onClick={() => toggleSearch(!modal)}
                  >
                    <Search />
                  </span>
                  <Spacer w={1.5} inline />
                  <NextLink href="/start-discussion">
                    <Link>
                      <Edit />
                    </Link>
                  </NextLink>

                  <Spacer w={1.5} inline />
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
                  <Spacer w={1.5} inline />
                  <Popover offset={0} content={menu}>
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
                <>
                  <Spacer w={4} inline />
                  <span
                    className="pointer"
                    onClick={() => toggleSearch(!modal)}
                  >
                    <Search />
                  </span>
                  <Spacer w={2} inline />
                  <NextLink href="/signup">
                    <Link>
                      <Translation lang={settings?.language} value="Signup" />
                    </Link>
                  </NextLink>
                  <Spacer w={2} inline />
                  <NextLink href="/login">
                    <Link>
                      <Translation lang={settings?.language} value="Login" />
                    </Link>
                  </NextLink>
                </>
              )}
            </Grid>
            <Grid xs={0} lg={1}>
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
