import { Text, Spacer } from '@geist-ui/core';
import Link from 'next/link';
import moment from 'moment';
import { pluralize } from './api/utils';

type postProps = {
  title: string;
  comment?: number;
  slug: string;
  category?: string;
  date: Date;
};

const MinimalPost = (props: postProps) => {
  const { title, comment, category, slug, date } = props;

  return (
    <Link href={`/d/${slug}`}>
      <div className="post minimal pointer without-right">
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
  );
};

export default MinimalPost;
