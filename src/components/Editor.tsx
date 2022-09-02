import { memo } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';
import dynamic from 'next/dynamic';
const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
});
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

type editorProp = {
  height?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: any) => void;
};

const Editor = (prop: editorProp) => {
  return (
    <div style={{ marginBottom: 15 }}>
      <SunEditor
        lang="en"
        height={prop.height}
        placeholder={prop.placeholder ? prop.placeholder : 'Type here....'}
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
        onChange={prop.onChange}
      />
    </div>
  );
};

export default memo(Editor);
