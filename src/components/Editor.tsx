import { memo } from 'react';
import dynamic from 'next/dynamic';
const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
});
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

import { useTranslation } from './intl/Translation';

type editorProp = {
  lang?: any;
  height?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: any) => void;
};

const Editor = (prop: editorProp) => {
  return (
    <div style={{ marginBottom: 15 }}>
      <SunEditor
        lang={prop.lang === 'cn' ? 'zh_cn' : prop.lang}
        height={prop.height}
        placeholder={
          prop.placeholder
            ? prop.placeholder
            : useTranslation({ lang: prop.lang, value: 'Type here...' })
        }
        setOptions={{
          resizingBar: false,
          buttonList: [
            [
              'formatBlock',
              'bold',
              'underline',
              'italic',
              'strike',
              'blockquote',
              'showBlocks',
              'fontColor',
              'hiliteColor',
              'align',
              'list',
              'table',
              'link',
              'image',
              'video',
              'removeFormat'
            ]
          ]
        }}
        defaultValue={prop.value}
        onChange={() => prop.onChange(prop.value)}
      />
    </div>
  );
};

export default memo(Editor);
