import {
  Text,
  Popover,
  Tooltip,
  Link,
  User,
  Avatar,
  Spacer,
  Collapse
} from '@geist-ui/core';
import { Heart, HeartFill } from '@geist-ui/icons';
import moment from 'moment';
import NextLink from 'next/link';

type replyProp = {
  id: string;
  activeUser: string;
  name?: string;
  role?: string;
  coin?: number;
  photo?: string;
  content?: string;
  replies?: replyProp[];
  likes?: any;
  date?: Date | string;
  replyTrigger: () => void;
  likeTrigger: (val: string) => void;
  likeTriggerX: (val: string) => void;
};

const Reply = (props: replyProp) => {
  const {
    id,
    activeUser,
    name,
    role,
    coin,
    photo,
    content,
    replies,
    likes,
    date,
    replyTrigger,
    likeTrigger,
    likeTriggerX
  } = props;

  const isActiveLiked = (data: any[]) => {
    data = data.filter((item: any) => item.userId === activeUser);
    if (data.length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="discussion" id={id}>
      <div className="item first">
        <Popover
          trigger="hover"
          content={
            <div style={{ padding: '0 10px' }}>
              <Link color href="#">
                <User src={photo} name={name}>
                  <Text p>
                    {role} - {coin} coins
                  </Text>
                </User>
              </Link>
            </div>
          }
        >
          <Avatar src={photo} w={2.3} h={2.3} />
        </Popover>
      </div>
      <div className="item">
        <Text h5>
          {name} &nbsp;
          <Text small>{moment(date).fromNow()}</Text>
        </Text>
        <div
          style={{ margin: 0, position: 'relative', top: -10 }}
          dangerouslySetInnerHTML={{ __html: content! }}
        ></div>
        <div style={{ margin: 0 }}>
          <Tooltip
            placement="right"
            text="Click on the number count to who see liked."
          >
            <span className="pointer" onClick={() => likeTrigger(id)}>
              {isActiveLiked(likes) ? (
                <HeartFill size={16} />
              ) : (
                <Heart size={16} />
              )}
            </span>
            <Popover
              content={
                <div style={{ maxHeight: 100, overflow: 'auto' }}>
                  {likes
                    ? likes.map((item: any) => (
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
              <Text className="like-btn">{likes ? likes.length : 0}</Text>
            </Popover>
          </Tooltip>

          <Text small className="reply-btn" onClick={() => replyTrigger()}>
            Reply
          </Text>
        </div>

        {replies?.length ? (
          <Collapse
            style={{ padding: 0, margin: 0 }}
            width={'100%'}
            initialVisible
            title={
              replies?.length > 1
                ? replies?.length + ' Replies'
                : replies?.length + ' Reply'
            }
          >
            {replies?.length
              ? replies.map((i: any) => (
                  <div className="discussion" id={i.slug} key={i.id}>
                    <div className="item first">
                      <Popover
                        trigger="hover"
                        content={
                          <div style={{ padding: '0 10px' }}>
                            <Link color href="#">
                              <User
                                src={
                                  i.author.photo
                                    ? `/storage/${i.author.photo}`
                                    : `/images/avatar.png`
                                }
                                name={i.author.name}
                              >
                                <Text p>
                                  {i.author.role} - {i.author.coin} coins
                                </Text>
                              </User>
                            </Link>
                          </div>
                        }
                      >
                        <Avatar
                          src={
                            i.author.photo
                              ? `/storage/${i.author.photo}`
                              : `/images/avatar.png`
                          }
                          w={2}
                          h={2}
                        />
                      </Popover>
                    </div>
                    <div className="item">
                      <Text h5>
                        {i.author.name} &nbsp;
                        <Text small>{moment(i.createdAt).fromNow()}</Text>
                      </Text>
                      <div
                        style={{ margin: 0, position: 'relative', top: -10 }}
                        dangerouslySetInnerHTML={{ __html: i.comment! }}
                      ></div>
                      <Tooltip
                        placement="right"
                        text="Click on the number count to who see liked."
                      >
                        <span
                          className="pointer"
                          onClick={() => likeTriggerX(i.id)}
                        >
                          {isActiveLiked(i.likes) ? (
                            <HeartFill size={16} />
                          ) : (
                            <Heart size={16} />
                          )}
                        </span>
                        <Popover
                          content={
                            <div style={{ maxHeight: 100, overflow: 'auto' }}>
                              {i.likes && i.likes.length
                                ? i.likes.map((l: any) => (
                                    <NextLink
                                      href={`/u/${l.profile.username}`}
                                      key={l.id}
                                    >
                                      <Link style={{ display: 'block' }}>
                                        <User
                                          src={
                                            l.profile && l.profile.photo
                                              ? `/storage/${l.profile.photo}`
                                              : '/images/avatar.png'
                                          }
                                          name={l.profile.name}
                                        />
                                      </Link>
                                    </NextLink>
                                  ))
                                : ''}
                            </div>
                          }
                        >
                          <Text className="like-btn">
                            {i.likes ? i.likes.length : 0}
                          </Text>
                        </Popover>
                      </Tooltip>
                    </div>
                  </div>
                ))
              : ''}
          </Collapse>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Reply;
