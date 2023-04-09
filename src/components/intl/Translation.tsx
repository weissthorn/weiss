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
  }
};

const useRepliedPostTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} replied your post.`;
  } else if (props.lang === 'es') {
    return `${props.name} respondió tu publicación.`;
  } else if (props.lang === 'fr') {
    return `${props.name} a répondu à votre message.`;
  }
};

const useRepliedCommentTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} replied your comment.`;
  } else if (props.lang === 'es') {
    return `${props.name} respondió tu comentario.`;
  } else if (props.lang === 'fr') {
    return `${props.name} a répondu à votre commentaire.`;
  }
};

const useLikedReplyTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} liked your reply.`;
  } else if (props.lang === 'es') {
    return `A ${props.name} me gusta tu respuesta.`;
  } else if (props.lang === 'fr') {
    return `${props.name}  aime ta réponse.`;
  }
};

const useLikedCommentTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} liked your comment.`;
  } else if (props.lang === 'es') {
    return `A ${props.name} le gustó tu comentario.`;
  } else if (props.lang === 'fr') {
    return `${props.name}  a aimé votre commentaire.`;
  }
};

const useLikedPostTranslation = (props: translationProps) => {
  if (props.lang === 'en') {
    return `${props.name} liked your post.`;
  } else if (props.lang === 'es') {
    return `A ${props.name} le gustó tu comentario.`;
  } else if (props.lang === 'fr') {
    return `${props.name}  a aimé votre commentaire.`;
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
