import { Popover, Text, Link, Avatar, Spacer, User } from '@geist-ui/core';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { es, fr, enUS, de, ja, ru, zhCN } from 'date-fns/locale';
import { pluralize } from './api/utils';
import { Translation, useTranslation } from 'components/intl/Translation';

type postProps = {
  title?: string;
  avatar?: string;
  author?: string;
  slug?: string;
  category?: string;
  comment?: number;
  date?: Date | string;
  lang: string;
};

const Post = (props: postProps) => {
  const { title, avatar, slug, category, comment, author, date, lang } = props;

  const ellipsis = (val: string) => {
    val = val.length >= 50 ? val.substring(0, 50) + '....' : val;
    return val;
  };

  const content = () => (
    <div style={{ padding: '0 10px' }}>
      <Link color href="#">
        <User src={avatar} name={author}>
          <Translation lang={props.lang} value={'Moderator'} />
        </User>
      </Link>
    </div>
  );

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
              : lang === 'ru'
              ? ru
              : lang === 'de'
              ? de
              : lang === 'cn'
              ? zhCN
              : lang === 'ja'
              ? ja
              : null
        })
      : '';
    return <span className="locale-time">{date}</span>;
  };

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
              {renderDate(date)}
            </Text>
            <Spacer w={1} inline />
            <Text span className="comment">
              {comment}{' '}
              {useTranslation({
                lang: props.lang,
                value: `Comment${pluralize(comment!)}`
              })}
            </Text>
          </div>
        </div>
      </Link>
    </NextLink>
  );
};

export default Post;
