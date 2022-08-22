import { useState, useEffect } from 'react';
import Head from 'next/head';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import {
  Text,
  Popover,
  AutoComplete,
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
  Search,
  Menu,
  ChevronDown,
  Edit
} from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import useToken from './Token';
import SettingsStore from 'stores/settings';

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
  const { title, description, hide, startConversation } = props;
  const [{ settings, getSettings }] = useState(() => new SettingsStore());

  useEffect(() => {
    cookie && cookie.theme ? setTheme(cookie.theme) : '';
    getSettings();
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
    router.push('/login');
  };

  const menu = () => (
    <div>
      <Popover.Item>
        <Link href={`/u/${token.username}`}>Profile</Link>
      </Popover.Item>
      <Popover.Item line />
      {token.role === 'admin' ? (
        <>
          <Popover.Item>
            <Link href="/admin">Admin</Link>
          </Popover.Item>
          <Popover.Item line />
        </>
      ) : (
        ''
      )}
      <Popover.Item>
        <Link href="/settings">Settings</Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <Link href="#" icon onClick={logout}>
          Log out <Spacer w={0.5} inline />
        </Link>
      </Popover.Item>
    </div>
  );

  const themeMenu = () => (
    <>
      <Popover.Item>
        <Link onClick={() => switchTheme('weiss-light')}>
          <Sun size={15} /> <Spacer w={0.5} />
          Light
        </Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <Link onClick={() => switchTheme('weiss-dark')}>
          <Moon size={15} /> <Spacer w={0.5} />
          Dark
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
            name={getFirstName(token.name)}
          />
          <Spacer w={0.5} />
          <AutoComplete
            width={'100%'}
            iconRight={<Search />}
            placeholder="Search....."
            clearable
            options={options}
          />
          <Text p>
            <Link href="/">Discussions</Link>
          </Text>
          <Text p>
            <Link href="/categories">Category</Link>
          </Text>
          <Text p>
            <Link href={`/u/${token.username}`}>Profile</Link>
          </Text>
          {token.role === 'admin' ? (
            <Text p>
              <Link href="/admin">Admin</Link>
            </Text>
          ) : (
            ''
          )}
          <Text p>
            <Link href="#" icon onClick={logout}>
              Log out <Spacer w={0.5} inline />
            </Link>
          </Text>
        </div>
      ) : (
        <>
          <Text p>
            <Link href="/">Discussions</Link>
          </Text>
          <Text p>
            <Link href="/categories">Category</Link>
          </Text>
          <Text p>
            <Link href="/signup">Signup</Link>
          </Text>
          <Text p>
            <Link href="/login">Login</Link>
          </Text>
        </>
      )}
    </div>
  );

  const options = [
    { label: 'London', value: 'london' },
    { label: 'Sydney', value: 'sydney' },
    { label: 'Shanghai', value: 'shanghai' }
  ];

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

      <Card shadow width="100%" style={{ display: hide ? 'none' : 'inherit' }}>
        <div className="inner">
          <Grid.Container gap={0}>
            <Grid xs={18} md={5}>
              <Link href="/">
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
            </Grid>
            <Grid xs={6} md={0}>
              {token.id ? (
                <Badge.Anchor>
                  <Badge type="error" scale={0.5}>
                    10
                  </Badge>
                  <Link href="/notification">
                    <Bell />
                  </Link>
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
            <Grid xs={0} md={8}>
              <AutoComplete
                width={'100%'}
                iconRight={<Search />}
                placeholder="Search....."
                clearable
                options={options}
              />
            </Grid>
            <Grid xs={0} md={8}>
              {token.id ? (
                <>
                  <Spacer w={6} inline />
                  <Link href="#" onClick={startConversation}>
                    <Edit />
                  </Link>
                  <Spacer w={2} inline />
                  <Badge.Anchor>
                    <Badge type="error" scale={0.5}>
                      10
                    </Badge>
                    <Link href="/notifications">
                      <Bell />
                    </Link>
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
                      name={getFirstName(token.name)}
                    />
                    <ChevronDown size={16} className="caret" />
                  </Popover>
                </>
              ) : (
                <>
                  <Spacer w={4} inline />
                  <Link href="/signup">Signup</Link>
                  <Spacer w={2} inline />
                  <Link href="/login">Login</Link>
                </>
              )}
            </Grid>
            <Grid xs={0} lg={2}>
              <Popover content={themeMenu}>
                <Button
                  icon={
                    theme === 'weiss-dark' ? (
                      <Moon />
                    ) : theme === 'weiss-light' ? (
                      <Sun />
                    ) : (
                      <Sun />
                    )
                  }
                  auto
                  scale={2 / 3}
                >
                  <Text span>
                    {theme === 'weiss-dark'
                      ? 'dark'
                      : theme === 'weiss-light'
                      ? 'light'
                      : 'light'}
                  </Text>
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
