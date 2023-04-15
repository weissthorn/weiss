import dict from './dict';

type translationProps = {
  lang: string;
  value: string;
  number?: any;
  name?: any;
};

const useReplyTranslation = (props: translationProps) => {
  let value = props.value?.match(/\(([^)]+)\)/);
  let name = value?.length ? value[1] : '';

  if (props.lang === 'en') {
    return props.value;
  } else if (props.lang === 'es') {
    return `En respuesta al comentario de ${name} #${props.number}`;
  } else if (props.lang === 'fr') {
    return `En réponse au commentaire de ${name} #${props.number}`;
  } else if (props.lang === 'de') {
    return `Als Antwort auf @${props.name} Kommentar #${props.number}`;
  } else if (props.lang === 'ru') {
    return `В ответ на комментарий @${props.name} #${props.number}`;
  } else if (props.lang === 'cn') {
    return `回复@${props.name} 评论 #${props.number}`;
  } else if (props.lang === 'ja') {
    return `@${props.name} コメント #${props.number} への返信`;
  } else if (props.lang === 'ko') {
    return `@${props.name} 댓글 #${props.number}에 대한 회신`;
  }
};

const useRepliedPostTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} replied your post.`;
  } else if (props.lang === 'es') {
    return `${props.name} respondió tu publicación.`;
  } else if (props.lang === 'fr') {
    return `${props.name} a répondu à votre message.`;
  } else if (props.lang === 'de') {
    return `${props.name} hat auf deinen Beitrag geantwortet.`;
  } else if (props.lang === 'ru') {
    return `${props.name} ответила на твой пост.`;
  } else if (props.lang === 'cn') {
    return `${props.name} 回复了你的帖子`;
  } else if (props.lang === 'ja') {
    return `${props.name} があなたの投稿に返信しました。`;
  } else if (props.lang === 'ko') {
    return `${props.name} 이 귀하의 게시물에 답장했습니다 .`;
  }
};

const useRepliedCommentTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} replied your comment.`;
  } else if (props.lang === 'es') {
    return `${props.name} respondió tu comentario.`;
  } else if (props.lang === 'fr') {
    return `${props.name} a répondu à votre commentaire.`;
  } else if (props.lang === 'de') {
    return `${props.name} hat auf deinen Kommentar geantwortet.`;
  } else if (props.lang === 'ru') {
    return `${props.name} ответила на ваш комментарий.`;
  } else if (props.lang === 'cn') {
    return `${props.name} 回复了你的评论`;
  } else if (props.lang === 'ja') {
    return `${props.name} があなたのコメントに返信しました。`;
  } else if (props.lang === 'ko') {
    return `${props.name} 이 귀하의 의견에 답변했습니다.`;
  }
};

const useLikedReplyTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} liked your reply.`;
  } else if (props.lang === 'es') {
    return `A ${props.name} me gusta tu respuesta.`;
  } else if (props.lang === 'fr') {
    return `${props.name}  aime ta réponse.`;
  } else if (props.lang === 'de') {
    return `Ihre Antwort hat ${props.name} gefallen.`;
  } else if (props.lang === 'ru') {
    return `${props.name} понравился твой ответ.`;
  } else if (props.lang === 'cn') {
    return `${props.name} 喜欢你的回复`;
  } else if (props.lang === 'ja') {
    return `${props.name} はあなたの返事を気に入りました`;
  } else if (props.lang === 'ko') {
    return `${props.name} 은 귀하의 답변을 좋아했습니다.`;
  }
};

const useLikedCommentTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} liked your comment.`;
  } else if (props.lang === 'es') {
    return `A ${props.name} le gustó tu comentario.`;
  } else if (props.lang === 'fr') {
    return `${props.name}  a aimé votre commentaire.`;
  } else if (props.lang === 'de') {
    return `${props.name} hat deinen Kommentar gefallen.`;
  } else if (props.lang === 'ru') {
    return `${props.name}  понравился ваш комментарий.`;
  } else if (props.lang === 'cn') {
    return `${props.name} 喜欢你的评论。`;
  } else if (props.lang === 'ja') {
    return `${props.name} はあなたのコメントが気に入りました。`;
  } else if (props.lang === 'ko') {
    return `${props.name} 은 귀하의 의견을 좋아했습니다.`;
  }
};

const useLikedPostTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} liked your post.`;
  } else if (props.lang === 'es') {
    return `A ${props.name} le gustó tu comentario.`;
  } else if (props.lang === 'fr') {
    return `${props.name}  a aimé votre commentaire.`;
  } else if (props.lang === 'de') {
    return `${props.name} hat deinen Beitrag gefallen.`;
  } else if (props.lang === 'ru') {
    return `${props.name} понравился твой пост.`;
  } else if (props.lang === 'cn') {
    return `${props.name} 喜欢你的帖子`;
  } else if (props.lang === 'ja') {
    return `${props.name} はあなたの投稿が好きでした`;
  } else if (props.lang === 'ko') {
    return `${props.name} 이 게시물을 좋아합니다`;
  }
};

const useTranslation = (props: translationProps) => {
  let translation: any = dict
    .filter((item) => item.en === props.value)
    .map((item) => item);
  translation = translation.length ? translation[0]?.[props.lang] : '';

  return translation;
};

const Translation = (props: translationProps) => {
  const translation = useTranslation(props);

  return <span>{translation}</span>;
};

export {
  useTranslation,
  useLikedPostTranslation,
  useLikedCommentTranslation,
  useRepliedCommentTranslation,
  useRepliedPostTranslation,
  useLikedReplyTranslation,
  useReplyTranslation,
  Translation
};
