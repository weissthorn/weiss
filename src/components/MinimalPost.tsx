import { Text, Spacer } from '@geist-ui/core';
import Link from 'next/link';
import moment from 'moment';
import { pluralize } from './api/utils';

type postProps = {
  title: string;
  comment?: number;
  slug: string;
  category: string;
  date: Date;
};

const MinimalPost = (props: postProps) => {
  const { title, comment, category, slug, date } = props;

  const ellipsis = (val: string) => {
    val = val.length >= 100 ? val.substring(0, 65) + '....' : val;
    return val;
  };

  return (
    <Link href={`/d/${slug}`}>
      <div className="post minimal pointer without-right">
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
            {comment} Comment{pluralize(comment!)}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default MinimalPost;
