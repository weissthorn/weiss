import { useEffect, useState } from 'react';
import {
  Spacer,
  Text,
  Tabs,
  Pagination,
  Link,
  Button,
  Card,
  User
} from '@geist-ui/core';
import {
  ChevronRightCircle,
  ChevronLeftCircle,
  Circle,
  Settings
} from '@geist-ui/icons';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { observer } from 'mobx-react-lite';
import Navbar from 'components/Navbar';
import Post from 'components/Post';
import Sidebar from 'components/Sidebar';
import EditorModal from 'components/modals/EditorModal';
import useToken from 'components/Token';
import SettingsStore from 'stores/settings';
import DiscussionStore from 'stores/discussion';

const Home = observer(() => {
  const token = useToken();
  const router = useRouter();
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ loading, discussion, setDiscussion, newDiscussion }] = useState(
    () => new DiscussionStore()
  );
  const [modal, toggleModal] = useState(false);

  useEffect(() => {
    getSettings();
  }, [token]);

  const handleDiscussion = (val: any) => {
    setDiscussion({ ...discussion, ...val });
  };

  const save = async () => {
    const { title, categoryId, content } = discussion;
    if (!title) {
      toast.error('Title is too short!');
    } else if (!content) {
      toast.error('Content is blank.');
    } else {
      let data = {
        ...discussion,
        categoryId: categoryId ? categoryId : 'general',
        userId: token.id
      };

      console.log(data);
      await newDiscussion(data).then((res: any) => {
        if (res.success) {
          router.push(`/d/${res.data.slug}`);
        } else {
          toast.error('Error creating post! Please try again.');
        }
      });
    }
  };

  return (
    <div>
      <Navbar
        title="Home"
        description="Home"
        startConversation={() => toggleModal(!modal)}
      />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar
          active="home"
          button={
            <Button
              type="secondary"
              style={{ textTransform: 'unset' }}
              onClick={() => toggleModal(!modal)}
            >
              Start a Discussion
            </Button>
          }
          advert={
            <div
              dangerouslySetInnerHTML={{ __html: settings.advert?.left }}
            ></div>
          }
        />
        <main className="main with-right">
          <div
            style={{ marginBottom: 10 }}
            dangerouslySetInnerHTML={{ __html: settings.advert?.top }}
          ></div>
          <Tabs initialValue="html" hideDivider>
            <Tabs.Item label="Popular" value="html">
              {Array.from({ length: 20 }).map((i, key) => (
                <Post
                  key={key}
                  slug="/"
                  avatar="https://unix.bio/assets/avatar.png"
                  title="CSS is the language that we can use to style and lay out our
                  web content, as well as adding behavior like animation."
                  date={new Date()}
                />
              ))}
              <div className="pagination">
                <Pagination count={30} initialPage={1} limit={5}>
                  {' '}
                  <Pagination.Next>
                    <ChevronRightCircle />
                  </Pagination.Next>
                  <Pagination.Previous>
                    <ChevronLeftCircle />
                  </Pagination.Previous>
                </Pagination>
              </div>
            </Tabs.Item>
            <Tabs.Item label="Recents" value="css">
              {Array.from({ length: 20 }).map((i, key) => (
                <Post
                  key={key}
                  slug="/"
                  avatar="https://unix.bio/assets/avatar.png"
                  title="text-overflow:ellipsis; only works when the following are true: The element's width must be constrained in px (pixels)."
                  date={new Date()}
                />
              ))}
            </Tabs.Item>
            <Tabs.Item label="Unanswered" value="js">
              {Array.from({ length: 20 }).map((i, key) => (
                <Post
                  key={key}
                  slug="/"
                  avatar="https://unix.bio/assets/avatar.png"
                  title="We step into the summer 🌅 with another release. Version 1.4 follows within two months of 1.3 to tackle a wide range of bugs and improve extensibility. Many of these improvements are purely internal focused at core, but cascade into the ecosystem through bundled and community extensions."
                  date={new Date()}
                />
              ))}
            </Tabs.Item>
          </Tabs>
        </main>

        <aside>
          <div className="sidenav">
            <Text h3>Top Contributors</Text>
            <Link href="/">
              <User
                src="https://unix.bio/assets/avatar.png"
                name="Witt Cambridge Chakraboty Junior"
              >
                <Text small>294 Discussions &nbsp;- 23 Replies</Text>
              </User>
            </Link>
            <Link href="/">
              <User
                src="https://unix.bio/assets/avatar.png"
                name="Witt Cambridge"
              >
                <Text small>294 Discussions &nbsp;- 23 Replies</Text>
              </User>
            </Link>
            <Spacer />
            <Card>
              <div
                dangerouslySetInnerHTML={{ __html: settings.advert?.right }}
              ></div>
            </Card>
          </div>
        </aside>
        <EditorModal
          loading={loading}
          title={discussion.title}
          category={discussion.categoryId ? discussion.categoryId : 'general'}
          content={discussion.content}
          show={modal}
          toggleModal={() => toggleModal(!modal)}
          actionTrigger={handleDiscussion}
          save={save}
        />
      </div>
    </div>
  );
});

export default Home;
