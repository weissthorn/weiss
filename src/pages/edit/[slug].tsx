import { useEffect, useState } from 'react';
import {
  Spacer,
  Text,
  Input,
  Select,
  Button,
  Card,
  Modal
} from '@geist-ui/core';
import { Lock, Trash2 } from '@geist-ui/icons';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from 'components/Navbar';
import { observer } from 'mobx-react-lite';
import DiscussionStore from 'stores/discussion';
import useToken from 'components/Token';
import { useRouter } from 'next/router';
import Editor from 'components/Editor';
import CategoryStore from 'stores/category';
import SettingsStore from 'stores/settings';
import { resProp } from 'interfaces/res';

const EditDiscussion = observer(() => {
  const token = useToken();
  const router = useRouter();
  const { slug } = router.query;
  const [modal, toggleModal] = useState(false);
  const [content, setContent] = useState('');
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ categories, getCategories }] = useState(() => new CategoryStore());
  const [
    {
      loading,
      discussion,
      setDiscussion,
      updateDiscussion,
      deleteDiscussion,
      getDiscussion
    }
  ] = useState(() => new DiscussionStore());

  useEffect(() => {
    getSettings();
    token.id ? getCategories() : null;
    router.isReady
      ? getDiscussion(slug).then((data) => {
          setContent(data.content!);
        })
      : null;
  }, [token, router]);

  const deletePost = async (id: string) => {
    await deleteDiscussion({ id }).then((res: resProp) => {
      if (res.success) {
        toast.success(res.message);
        router.push('/404');
      } else {
        toast.error(res.message);
      }
    });
  };

  const save = async () => {
    const { title, categoryId } = discussion;
    if (!title) {
      toast.error('Title is too short!');
    } else if (!categoryId) {
      toast.error('Please choose a category!');
    } else if (!content) {
      toast.error('Content is blank.');
    } else {
      let data = {
        id: discussion.id,
        title,
        content,
        categoryId
      };

      await updateDiscussion(data).then((res: any) => {
        if (res.success) {
          router.push(`/d/${slug}`);
        } else {
          toast.error('Error creating post! Please try again.');
        }
      });
    }
  };

  return (
    <div>
      <Toaster />
      {!token.id ? (
        <div className="custom-modal all">
          <div className="inner">
            <Card shadow>
              <div className="center">
                <Lock size={30} />
                <Text>You are required to login to access this page</Text>
                <Spacer />
                <Link href="/login">
                  <Button type="secondary">Sign in</Button>
                </Link>
                <Spacer />
              </div>
            </Card>
          </div>
        </div>
      ) : (
        ''
      )}
      <Navbar title="Edit Discussion" description="Edit Discussion" />
      <Modal visible={modal} disableBackdropClick>
        <Modal.Title>Delete Discussion</Modal.Title>
        <Modal.Content>
          <p className="center">Are you sure you want to delete?</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => toggleModal(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action
          style={{ color: '#cb0000' }}
          loading={loading}
          onClick={() => deletePost(discussion.id)}
        >
          Yes, Delete
        </Modal.Action>
      </Modal>
      <div className="page-container top-100">
        <div className="notification-container">
          <Text h3>Edit Discussion</Text>
          <Spacer />
          <div className="discuss-grid">
            <div className="item">
              <Input
                width="100%"
                placeholder="Discussion Title"
                value={discussion.title}
                onChange={(e) =>
                  setDiscussion({ ...discussion, title: e.target.value })
                }
              ></Input>
            </div>
            <div className="item">
              <Select
                disableMatchWidth={true}
                width={'100%'}
                placeholder="Choose a Category"
                value={discussion.categoryId}
                onChange={(val) =>
                  setDiscussion({ ...discussion, categoryId: val })
                }
              >
                {categories.map((item: any) => (
                  <Select.Option key={item.id} value={item.slug}>
                    {item.title}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          {discussion.content ? (
            <Editor
              lang={settings.language}
              value={content}
              height="200px"
              placeholder="Type something memorable..."
              onChange={(val) => setContent(val)}
            />
          ) : (
            ''
          )}

          {token.id ? (
            <>
              <Button loading={loading} type="secondary-light" onClick={save}>
                Save
              </Button>
              <Button
                type="abort"
                auto
                icon={<Trash2 />}
                onClick={() => toggleModal(true)}
              />
            </>
          ) : (
            <Link href="/login">
              <Button loading={loading} type="secondary-light">
                Sign in to publish
              </Button>
            </Link>
          )}
          <Spacer h={5} />
        </div>
      </div>
    </div>
  );
});

export default EditDiscussion;
