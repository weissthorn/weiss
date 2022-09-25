import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Text,
  Popover,
  Tooltip,
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
import { ChevronDown, Lock, Eye, Heart, HeartFill } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import CountUp from 'react-countup';
import Navbar from 'components/Navbar';
import useToken from 'components/Token';
import DiscussionStore from 'stores/discussion';
import { pluralize } from 'components/api/utils';
import Reply from 'components/Reply';
import Recommendation from 'components/Recommendation';
import ReportStore from 'stores/report';
import toast, { Toaster } from 'react-hot-toast';
import CommentModal from 'components/modals/CommentModal';
import ReplyModal from 'components/modals/ReplyModal';
import CommentStore from 'stores/comment';
import SettingsStore from 'stores/settings';
import LikeStore from 'stores/like';

const Discussion = observer(() => {
  const token = useToken();
  const router = useRouter();
  const { slug }: any = router.query;
  const [modal, toggleModal] = useState(false);
  const [reply, toggleReply] = useState<any>({
    modal: false,
    replyId: '',
    username: '',
    comment: 0
  });
  const [content, setContent] = useState('');
  const [{ newReport }] = useState(() => new ReportStore());
  const [{ newComment, newReply }] = useState(() => new CommentStore());
  const [{ likeDiscussion, likeComment, likeReply }] = useState(
    () => new LikeStore()
  );
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
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
      refreshDiscussion,
      getComments,
      refreshComments,
      updateDiscussion
    }
  ] = useState(() => new DiscussionStore());

  const { profile, category } = discussion;

  useEffect(() => {
    let hash: any = router.isReady ? window.location.hash : '';
    hash = hash.replace('#', '');

    getSettings();
    router.isReady
      ? getDiscussion(slug).then((data: any) => {
          if (data.id) {
            getComments(data.id).then((res) => {
              res.data.length
                ? setTimeout(() => {
                    scrollToDiv(hash);
                  }, 1000)
                : null;
            });
            updateDiscussion({ id: data.id, view: data.view + 1 });
          }
        })
      : null;
  }, [router]);

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

  const toggleCommentBox = (
    replyId?: string,
    replyUsername?: string,
    commentNumber?: number
  ) => {
    toggleReply({
      ...reply,
      modal: !reply.modal,
      username: replyUsername,
      comment: commentNumber,
      replyId
    });
  };

  const report = async (discussionId: string, type: string) => {
    let t = toast.loading('Reporting....');
    await newReport({ discussionId, type, slug: discussion.slug }).then(
      (res: any) => {
        toast.dismiss(t);
        if (res.success) {
          toast.success('Discussion reported!');
        } else {
          toast.success('Error occured. Please try again!');
        }
      }
    );
  };

  const reports = [
    'Inappropiate content',
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

  const scrollToDiv = (id: string) => {
    const divElement: any = document.getElementById(id);
    divElement ? divElement.scrollIntoView({ behavior: 'smooth' }) : null;
  };

  const saveComment = async () => {
    if (!content) {
      toast.error('Comment is blank!');
    } else {
      await newComment({
        comment: content,
        discussionId: discussion.id,
        userId: token.id
      })
        .then((res: any) => {
          if (res.success) {
            getComments(discussion.id!).then(() => {
              toggleModal(!modal);
              setContent('');
              setTimeout(() => {
                scrollToDiv(res.data.slug);
              }, 1000);
            });
          } else {
            toast.error('Unable to save comment.');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const saveReply = async () => {
    if (!content) {
      toast.error('Comment is blank!');
    } else {
      await newReply({
        comment: content,
        discussionId: discussion.id,
        userId: token.id,
        type: 'reply',
        replyId: reply.replyId
      })
        .then((res: any) => {
          if (res.success) {
            getComments(discussion.id!).then(() => {
              toggleReply({
                modal: false,
                replyId: '',
                username: '',
                comment: 0
              });
              setContent('');
              setTimeout(() => {
                scrollToDiv(res.data.slug);
              }, 1000);
            });
          } else {
            toast.error('Unable to save reply.');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const likeDiscussionAction = async (id: string) => {
    await likeDiscussion({
      userId: token.id,
      discussionId: id
    }).then((res: any) => {
      if (res.success) {
        refreshDiscussion(slug);
      }
    });
  };

  const likeCommentAction = async (postId: string) => {
    await likeComment({
      postId,
      userId: token.id,
      discussionId: discussion.id
    }).then((res: any) => {
      if (res.success) {
        refreshComments(discussion.id!, 'comment');
      }
    });
  };

  const likeReplyAction = async (postId: string) => {
    await likeReply({
      postId,
      userId: token.id,
      discussionId: discussion.id
    }).then((res: any) => {
      if (res.success) {
        refreshComments(discussion.id!, 'comment');
      }
    });
  };

  const isActiveLiked = (data: any[]) => {
    data = data.filter((item: any) => item.userId === token.id);
    if (data.length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Toaster />
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

      <Navbar
        title={removeBanWords(discussion.title)}
        description={removeBanWords(discussion.title)}
      />

      <div className="page-container top-100">
        <div className="discussion-container">
          {loading ? (
            <Loading>Loading</Loading>
          ) : (
            <div className="item">
              <Text h2>{removeBanWords(discussion.title)} </Text>
              <div className="discuss-grid block">
                <div className="item">
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
                            {reports.map((item: string, key) => (
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
                </div>
                <div className="item">
                  <span className="right">
                    <Text span style={{ position: 'relative', top: 7 }}>
                      <Eye />
                      <span
                        style={{
                          position: 'relative',
                          top: -5,
                          width: 50,
                          paddingLeft: 5
                        }}
                      >
                        <CountUp
                          start={0}
                          end={discussion.view!}
                          separator={','}
                        />
                      </span>
                    </Text>
                    <Spacer inline />
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
                </div>
              </div>

              <div className="discussion">
                <div className="item first">
                  <Popover
                    trigger="hover"
                    content={
                      <div style={{ padding: '0 10px' }}>
                        <NextLink href={`/u/${profile?.username}`}>
                          <Link color>
                            <User
                              src={
                                profile && profile.photo
                                  ? `/storage/${profile.photo}`
                                  : '/images/avatar.png'
                              }
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
                        src={
                          profile && profile.photo
                            ? `/storage/${profile.photo}`
                            : '/images/avatar.png'
                        }
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
                    dangerouslySetInnerHTML={{
                      __html: removeBanWords(discussion.content)
                    }}
                  ></div>
                  <Tooltip
                    placement="right"
                    text="Click on the number count to who see liked."
                  >
                    {discussion.id ? (
                      <span
                        className="pointer"
                        onClick={() => likeDiscussionAction(discussion.id!)}
                      >
                        {isActiveLiked(discussion.likes!) ? (
                          <HeartFill size={16} />
                        ) : (
                          <Heart size={16} />
                        )}
                      </span>
                    ) : (
                      ''
                    )}
                    <Popover
                      content={
                        <div style={{ maxHeight: 100, overflow: 'auto' }}>
                          {discussion.id
                            ? discussion.likes!.map((item: any) => (
                                <NextLink
                                  href={`/u/${item.profile.username}`}
                                  key={item.id}
                                >
                                  <Link style={{ display: 'block' }}>
                                    <User
                                      src={
                                        item.profile && item.profile.photo
                                          ? `/storage/${item.profile.photo}`
                                          : '/images/avatar.png'
                                      }
                                      name={item.profile.name}
                                    />
                                  </Link>
                                </NextLink>
                              ))
                            : ''}
                        </div>
                      }
                    >
                      <Text className="like-btn" span>
                        {discussion.id ? discussion.likes!.length : 0}
                      </Text>
                    </Popover>
                  </Tooltip>
                  <Text
                    small
                    className="reply-btn"
                    onClick={() => toggleModal(!modal)}
                  >
                    Reply
                  </Text>
                </div>
              </div>
              <Spacer />
              {commentLoading ? <Loading>Loading Replies</Loading> : ''}
              {comments.map((item: any, key) => (
                <Reply
                  key={item.id}
                  id={item.slug}
                  activeUser={token.id!}
                  name={item.author.name}
                  role={item.author.role}
                  coin={item.author.coin}
                  photo={
                    item.author.photo
                      ? `/storage/` + item.author.photo
                      : '/images/avatar.png'
                  }
                  replies={item.replies}
                  likes={item.likes}
                  content={item.comment}
                  date={item.createdAt}
                  replyTrigger={() =>
                    toggleCommentBox(item.id, item.author.username, key + 1)
                  }
                  likeTrigger={() => likeCommentAction(item.id!)}
                  likeTriggerX={(val: string) => likeReplyAction(val)}
                />
              ))}
              <Spacer />
              {total >= limit ? (
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

                <Card>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: settings.advert?.right!
                    }}
                  ></div>
                </Card>
                <Spacer h={4} />
              </div>
            </aside>
          </div>
        </div>

        <CommentModal
          loading={commentLoading}
          content={content}
          show={modal}
          isAuthenticate={token.id ? true : false}
          toggleModal={() => toggleModal(!modal)}
          actionTrigger={setContent}
          save={saveComment}
        />

        <ReplyModal
          loading={commentLoading}
          content={content}
          show={reply.modal}
          replyId={reply.replyId}
          replyUsername={reply.username}
          commentNumber={reply.comment}
          isAuthenticate={token.id ? true : false}
          toggleModal={() => toggleReply({ ...reply, modal: !reply.modal })}
          actionTrigger={setContent}
          save={saveReply}
        />
      </div>
    </div>
  );
});

export default Discussion;
