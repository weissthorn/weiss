import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Text,
  Popover,
  Link,
  User,
  Avatar,
  Card,
  Button,
  ButtonDropdown,
  Spacer,
  Image,
  Loading
} from '@geist-ui/core';
import moment from 'moment';
import { ChevronDown, Lock } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Navbar from 'components/Navbar';
import useToken from 'components/Token';
import DiscussionStore from 'stores/discussion';
import { pluralize } from 'components/api/utils';
import Reply from 'components/Reply';
import Recommendation from 'components/Recommendation';

const Discussion = observer(() => {
  const token = useToken();
  const router = useRouter();
  const { slug } = router.query;
  const [
    {
      loading,
      page,
      total,
      limit,
      commentLoading,
      discussion,
      comments,
      getDiscussion,
      getReplies
    }
  ] = useState(() => new DiscussionStore());

  const { profile, category } = discussion;

  useEffect(() => {
    router.isReady
      ? getDiscussion(slug).then((data) => {
          getReplies(data.id);
        })
      : null;
  }, [router]);

  const report = async (id: string, type: string) => {
    // await
  };

  const reports = [
    'Fraud or Spam',
    'False information',
    'Nudity',
    'Hate speech',
    'Violence',
    'Harassment',
    'Terrorism',
    'Suicide or self injury',
    'Child abuse'
  ];

  return (
    <div>
      {!token.id && category && category.authRequired === true ? (
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
      <Navbar title={discussion.title} description={discussion.title} />

      <div className="page-container top-100">
        <div className="discussion-container">
          {loading ? (
            <Loading>Loading</Loading>
          ) : (
            <div className="item">
              <Text h2>{discussion.title} </Text>
              <NextLink href={`/category/${category?.slug}`}>
                <Link font={'14px'}>
                  Category:&nbsp;
                  <span style={{ color: category?.color }}>
                    {category?.title}
                  </span>
                </Link>
              </NextLink>{' '}
              {token.id === discussion.userId ? (
                <span>
                  -{' '}
                  <NextLink href={`/edit/${discussion.slug}`}>
                    <Link font={'14px'}>Edit discussion</Link>
                  </NextLink>
                </span>
              ) : (
                ''
              )}
              {token.id ? (
                <>
                  &nbsp; - &nbsp;
                  <Popover
                    offset={0}
                    content={
                      <div>
                        {reports.map((item, key) => (
                          <Popover.Item key={key}>
                            <Link
                              href="#"
                              onClick={() => report(discussion.id!, item)}
                            >
                              {item}
                            </Link>
                          </Popover.Item>
                        ))}
                      </div>
                    }
                  >
                    <Text className="pointer" font={'14px'}>
                      Report
                    </Text>
                  </Popover>
                </>
              ) : (
                ''
              )}
              <span style={{ float: 'right' }}>
                <ButtonDropdown type="secondary" scale={0.5} w={'50px'}>
                  <ButtonDropdown.Item main>Share</ButtonDropdown.Item>
                  <ButtonDropdown.Item>
                    <Link
                      target="_blank"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
                    >
                      <Image src="/images/twitter.svg" height={'18px'} />
                      &nbsp;&nbsp;{' '}
                      <span style={{ position: 'relative', top: -5 }}>
                        Tweet
                      </span>
                    </Link>
                  </ButtonDropdown.Item>
                  <ButtonDropdown.Item>
                    <Link
                      target="_blank"
                      href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}&text=${discussion.title}`}
                    >
                      <Image src="/images/facebook.svg" height={'18px'} />
                      &nbsp;&nbsp;{' '}
                      <span style={{ position: 'relative', top: -5 }}>
                        Share
                      </span>
                    </Link>
                  </ButtonDropdown.Item>
                  <ButtonDropdown.Item>
                    <Link
                      target="_blank"
                      href={`mailto:info@example.com?&subject=&cc=&bcc=&body=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}%0A${discussion.title}`}
                    >
                      <Image src="/images/mail.svg" height={'18px'} />
                      &nbsp;&nbsp;{' '}
                      <span style={{ position: 'relative', top: -5 }}>
                        Email
                      </span>
                    </Link>
                  </ButtonDropdown.Item>
                </ButtonDropdown>
              </span>
              <div className="discussion">
                <div className="item first">
                  <Popover
                    trigger="hover"
                    content={
                      <div style={{ padding: '0 10px' }}>
                        <NextLink href={`/u/${profile?.username}`}>
                          <Link color>
                            <User
                              src={`/storage/${profile?.photo}`}
                              name={profile?.name}
                            >
                              <Text p>
                                <span className="capitalize">
                                  {profile?.role}
                                </span>{' '}
                                - {profile?.coin} coin
                                {pluralize(profile?.coin!)}
                              </Text>
                            </User>
                          </Link>
                        </NextLink>
                      </div>
                    }
                  >
                    <NextLink href={`/u/${profile?.username}`}>
                      <Avatar
                        src={`/storage/${profile?.photo}`}
                        w={2.3}
                        h={2.3}
                      />
                    </NextLink>
                  </Popover>
                </div>
                <div className="item">
                  <Text h5>
                    <NextLink href={`/u/${profile?.username}`}>
                      <Link>{profile?.name}</Link>
                    </NextLink>
                    &nbsp;&nbsp;
                    <Text small>{moment(discussion.createdAt).fromNow()}</Text>
                  </Text>
                  <div
                    dangerouslySetInnerHTML={{ __html: discussion.content! }}
                  ></div>

                  <Link font={'14px'}>Like</Link>
                  <Spacer inline />
                  <Link font={'14px'}>Reply</Link>
                </div>
              </div>
              {commentLoading ? <Loading>Loading Replies</Loading> : ''}
              {comments.map((item) => (
                <Reply
                  key={item.id}
                  name="Wott"
                  role="Moderator"
                  photo={'avatar.png'}
                  content="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo tempora, iure adipisci magni voluptate eius itaque ex
                    nobis in. Ipsum totam quidem eveniet perspiciatis libero
                    sapiente eius placeat incidunt sunt?"
                  date={new Date()}
                />
              ))}
              <Spacer />
              {total < limit ? (
                <div className="pagination">
                  <Button type="abort" iconRight={<ChevronDown />}>
                    Load more
                  </Button>
                </div>
              ) : (
                ''
              )}
            </div>
          )}
          <div className="item">
            <aside className="max">
              <div className="sidenav max-width">
                {discussion.id ? (
                  <Recommendation
                    title={discussion.title!}
                    category={discussion.categoryId!}
                  />
                ) : (
                  ''
                )}

                <Image
                  src="https://image.adsoftheworld.com/5d8cynqohu8hwrupvbllbn2t95zb"
                  width={'100%'}
                />
                <Spacer h={4} />
              </div>
            </aside>
          </div>
        </div>

        {/* <EditorModal show={false} /> */}
      </div>
    </div>
  );
});

export default Discussion;
