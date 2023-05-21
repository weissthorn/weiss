import { useEffect, useState } from 'react';
import { Spacer, Text, Input, Select, Button, Card } from '@geist-ui/core';
import { Lock } from '@geist-ui/icons';
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
import { Translation, useTranslation } from 'components/intl/Translation';

const StartDiscussion = observer(() => {
  const token = useToken();
  const router = useRouter();
  const { channel } = router.query;
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ categories, getCategories }] = useState(() => new CategoryStore());
  const [{ loading, discussion, setDiscussion, newDiscussion }] = useState(
    () => new DiscussionStore()
  );

  useEffect(() => {
    getSettings();
    token.id ? getCategories() : null;
    router.isReady
      ? setDiscussion({ ...discussion, categoryId: channel })
      : null;
  }, [token, router]);

  const save = async () => {
    const { title, categoryId, content } = discussion;
    if (!title) {
      toast.error(
        useTranslation({
          lang: settings?.language,
          value: 'Title is too short!'
        })
      );
    } else if (!categoryId) {
      toast.error(
        useTranslation({
          lang: settings?.language,
          value: 'Please choose a category!'
        })
      );
    } else if (!content) {
      toast.error(
        useTranslation({
          lang: settings?.language,
          value: 'Content is blank.'
        })
      );
    } else {
      let data = {
        ...discussion,
        userId: token.id
      };

      await newDiscussion(data).then((res: any) => {
        if (res.success) {
          router.push(`/d/${res.data.slug}`);
        } else {
          toast.error(
            useTranslation({
              lang: settings?.language,
              value: 'Error creating post! Please try again.'
            })
          );
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
                <Text>
                  <Translation
                    lang={settings?.language}
                    value={'You are required to login to access this page'}
                  />
                </Text>
                <Spacer />
                <Link href="/login">
                  <Button type="secondary">
                    <Translation lang={settings?.language} value={'Sign in'} />
                  </Button>
                </Link>
                <Spacer />
              </div>
            </Card>
          </div>
        </div>
      ) : (
        ''
      )}

      <Navbar
        title={useTranslation({
          lang: settings?.language,
          value: 'Start a discussion'
        })}
        description={useTranslation({
          lang: settings?.language,
          value: 'Start a discussion'
        })}
      />
      <div className="page-container top-100">
        <div className="notification-container">
          <Text h3>
            <Translation
              lang={settings?.language}
              value={useTranslation({
                lang: settings?.language,
                value: 'Start a discussion'
              })}
            />
          </Text>
          <Spacer />
          <div className="discuss-grid">
            <div className="item">
              <Input
                width="100%"
                placeholder={useTranslation({
                  lang: settings?.language,
                  value: 'Discussion Title'
                })}
                onChange={(e) =>
                  setDiscussion({ ...discussion, title: e.target.value })
                }
              ></Input>
            </div>
            <div className="item">
              <Select
                disableMatchWidth={true}
                width={'100%'}
                placeholder={useTranslation({
                  lang: settings?.language,
                  value: 'Choose a Category'
                })}
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
          <Editor
            lang={settings.language}
            value={discussion?.content}
            height="200px"
            placeholder={useTranslation({
              lang: settings?.language,
              value: 'Type something memorable...'
            })}
            onChange={(val) => setDiscussion({ ...discussion, content: val })}
          />

          {token.id ? (
            <Button loading={loading} type="secondary-light" onClick={save}>
              <Translation lang={settings?.language} value={'Publish'} />
            </Button>
          ) : (
            <Link href="/login">
              <Button loading={loading} type="secondary-light">
                <Translation
                  lang={settings?.language}
                  value={'Sign in to publish'}
                />
              </Button>
            </Link>
          )}
          <Spacer h={5} />
        </div>
      </div>
    </div>
  );
});

export default StartDiscussion;
