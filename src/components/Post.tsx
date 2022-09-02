import { Popover, Text, Link, Avatar, Spacer, User } from '@geist-ui/core';
import NextLink from 'next/link';
import moment from 'moment';
import { pluralize } from './api/utils';

type postProps = {
  title?: string;
  avatar?: string;
  author?: string;
  slug?: string;
  category?: string;
  comment?: number;
  date?: Date | string;
};
const Post = (props: postProps) => {
  const { title, avatar, slug, category, comment, author, date } = props;

  const ellipsis = (val: string) => {
    val = val.length >= 50 ? val.substring(0, 50) + '....' : val;
    return val;
  };

  const content = () => (
    <div style={{ padding: '0 10px' }}>
      <Link color href="#">
        <User src={avatar} name={author}>
          Moderator
        </User>
      </Link>
    </div>
  );

  return (
    <NextLink href={`/d/${slug}`}>
      <Link width="100%">
        <div className="post without-right">
          <div className="item">
            <Popover trigger="hover" content={content}>
              <Avatar src={avatar} w={1.7} h={1.7} />
            </Popover>
          </div>
          <div className="item">
            <Text h1 className="title">
              {title}
            </Text>
            <Text b className="name">
              {category}
            </Text>
            <Spacer w={1} inline />
            <Text span className="date">
              {moment(date).format('MMM Do, YYYY')}
            </Text>
            <Spacer w={1} inline />
            <Text span className="comment">
              {comment} Comment{pluralize(comment!)}
            </Text>
          </div>
        </div>
      </Link>
    </NextLink>
  );
};

export default Post;
