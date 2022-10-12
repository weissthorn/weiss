import { memo } from 'react';
import dynamic from 'next/dynamic';
const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
});
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import Mention from './Mention';

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
        lang={prop.lang}
        height={prop.height}
        placeholder={prop.placeholder ? prop.placeholder : 'Type here....'}
        setOptions={{
          resizingBar: false,
          // plugins: [Mention],
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
        onChange={prop.onChange}
      />
    </div>
  );
};

export default memo(Editor);
