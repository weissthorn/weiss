import dict from './language.json';

type translationProps = {
  lang: string;
  value: string;
};

const useTranslation = (props: translationProps) => {
  let enDict = dict['en'];
  let index = enDict.indexOf(props.value);
  let languageDict = dict[props.lang];
  let translation = languageDict[index];

  return translation;
};

const Translation = (props: translationProps) => {
  const translate = (value: string) => {
    let enDict = dict['en'];
    let index = enDict.indexOf(value);
    let languageDict = dict[props.lang];
    let translation = languageDict[index];

    return translation;
  };

  return <span>{translate(props.value)}</span>;
};

export { useTranslation, Translation };
