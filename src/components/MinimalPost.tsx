import { Text, Spacer } from '@geist-ui/core';
import Link from 'next/link';
import { format } from 'date-fns';
import { es, fr, enUS } from 'date-fns/locale';
import { pluralize } from './api/utils';
import { Translation, useTranslation } from 'components/intl/Translation';

type postProps = {
  lang: string;
  title: string;
  comment?: number;
  slug: string;
  category?: string;
  date: Date;
};

const MinimalPost = (props: postProps) => {
  const { lang, title, comment, category, slug, date } = props;

  const renderDate = (value: any) => {
    const date: any = value
      ? format(new Date(value), 'MMM d, yyyy @ h:mm a', {
          locale:
            lang === 'es'
              ? es
              : lang === 'fr'
              ? fr
              : lang === 'en'
              ? enUS
              : null
        })
      : '';
    return <span className="locale-time">{date}</span>;
  };

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
            {renderDate(date)}
          </Text>
          <Spacer w={1} inline />
          <Text span className="comment">
            {comment}{' '}
            {useTranslation({
              lang: lang,
              value: `Comment${pluralize(comment!)}`
            })}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default MinimalPost;
