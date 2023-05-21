import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@toast-ui/react-editor'), {
  ssr: false
});
// import { Editor } from '@toast-ui/react-editor';

const Test = () => {
  return (
    <div>
      <h2>Hello</h2>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
};
