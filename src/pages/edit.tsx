import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../components/Editor2'), {
  ssr: false
});
import { useState } from 'react';

export default function App() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [content, setContent] = useState('content');
  const [content2, setContent2] = useState('content 2');

  console.log(content);

  return (
    <div>
      <div className="discuss-grid">
        <div>
          <h1>Editor 1</h1>
          <Editor value={content} onChange={setContent} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className="discuss-grid">
        <div>
          <h1>Editor 2</h1>
          <Editor value={content2} onChange={setContent2} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content2 }}></div>
      </div>
    </div>
  );
}
