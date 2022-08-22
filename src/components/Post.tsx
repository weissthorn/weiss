import { Popover, Text, Link, Avatar, Spacer, User } from '@geist-ui/core';
import moment from 'moment';
import { pluralize } from './api/utils';

type postProps = {
  title: string;
  avatar?: string;
  slug: string;
  category: string;
  comment: number;
  date: Date;
};
const Post = (props: postProps) => {
  const { title, avatar, slug, category, comment, date } = props;

  const ellipsis = (val: string) => {
    val = val.length >= 100 ? val.substring(0, 50) + '....' : val;
    return val;
  };

  const content = () => (
    <div style={{ padding: '0 10px' }}>
      <Link color href="#">
        <User src={avatar} name="Witt">
          Moderator
        </User>
      </Link>
    </div>
  );

  return (
    <Link href={`/p/${slug}`}>
      <div className="post without-right">
        <div className="item">
          <Popover trigger="hover" content={content}>
            <Avatar src={avatar} w={1.7} h={1.7} />
          </Popover>
        </div>
        <div className="item">
          <Text h1 className="title">
            {ellipsis(title)}
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
            {comment} Comment{pluralize(comment)}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default Post;
