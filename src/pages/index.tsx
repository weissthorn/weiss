import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Spacer,
  Pagination,
  Button,
  Card,
  Link,
  Loading
} from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle } from '@geist-ui/icons';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { observer } from 'mobx-react-lite';
import Navbar from 'components/Navbar';
import Post from 'components/Post';
import Sidebar from 'components/Sidebar';
import useToken from 'components/Token';
import SettingsStore from 'stores/settings';
import DiscussionStore from 'stores/discussion';
import Contributors from 'components/Contributors';
import AdminVerify from 'components/admin/AdminVerify';
import { Translation, useTranslation } from 'components/intl/Translation';

const Home = observer(() => {
  const token = useToken();
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [
    { loading, page, total, limit, discussions, setPage, getDiscussions }
  ] = useState(() => new DiscussionStore());
  const [modal, toggleModal] = useState(false);

  useEffect(() => {
    getSettings();
    getDiscussions();
  }, [token]);

  const paginate = (val: number) => {
    setPage(val);
    getDiscussions();
  };

  const removeBanWords = (data: string) => {
    let banWords: any = settings && settings.banWords ? settings.banWords : '';
    banWords = banWords.replace(/\s/gi, '');
    banWords = banWords.split(',');

    data
      ? banWords.forEach((item: string) => {
          let regEx: any = `${item}`;
          regEx = new RegExp(regEx, 'gi');
          data = data.replace(regEx, '*****');
        })
      : '';

    return data;
  };

  return (
    <AdminVerify>
      <Navbar
        title={settings.siteName}
        description={settings.siteDescription}
        startConversation={() => toggleModal(!modal)}
      />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar
          active="home"
          button={
            <NextLink href={'/start-discussion'}>
              <Button type="secondary" style={{ textTransform: 'unset' }}>
                <Translation
                  lang={settings?.language}
                  value="Start a discussion"
                />
              </Button>
            </NextLink>
          }
          advert={
            settings.advert?.left ? (
              <Card>
                <div
                  dangerouslySetInnerHTML={{ __html: settings.advert?.left! }}
                ></div>
              </Card>
            ) : (
              ''
            )
          }
        />
        <main className="main with-right">
          <div
            style={{ marginBottom: 10 }}
            dangerouslySetInnerHTML={{ __html: settings.advert?.top! }}
          ></div>
          {token.id ? (
            <div className="mobile">
              <NextLink href={'/start-discussion'}>
                <Button type="secondary" style={{ textTransform: 'unset' }}>
                  <Translation
                    lang={settings?.language}
                    value="Start a discussion"
                  />
                </Button>
              </NextLink>
              <Spacer />
            </div>
          ) : (
            ''
          )}

          <div className="custom-tab">
            <NextLink href="/popular">
              <Link>
                <Translation lang={settings?.language} value="Popular" />
              </Link>
            </NextLink>
            <NextLink href="/">
              <Link className="active">
                <Translation lang={settings?.language} value="Recent" />
              </Link>
            </NextLink>
            <NextLink href="/unanswered">
              <Link>
                <Translation lang={settings?.language} value="Unanswered" />
              </Link>
            </NextLink>
          </div>

          {loading ? (
            <div>
              <Spacer h={3} />
              <Loading>
                <Translation lang={settings?.language} value="Loading" />
                &nbsp;
                <Translation lang={settings?.language} value="Discussions" />
              </Loading>
            </div>
          ) : (
            ''
          )}
          {discussions.map((item) => (
            <Post
              key={item.id}
              lang={settings?.language}
              category={item.category?.title}
              slug={item.slug}
              avatar={
                item.profile && item.profile.photo
                  ? `/storage/${item.profile.photo}`
                  : '/images/avatar.png'
              }
              author={item.profile?.name}
              title={removeBanWords(item.title)}
              comment={item.comment}
              date={item.createdAt}
            />
          ))}

          {total >= limit ? (
            <div className="pagination">
              <Pagination
                count={Math.round(total / limit)}
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
        </main>

        <aside>
          <div className="sidenav">
            <Contributors lang={settings.language} />
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
    </AdminVerify>
  );
});

export default Home;
