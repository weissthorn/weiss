import dynamic from 'next/dynamic';
const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
});
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

type editorProp = {
  height?: string;
  value?: string;
  onChange?: (value: any) => void;
};
export default function Editor(prop: editorProp) {
  return (
    <div style={{ marginBottom: 15 }}>
      <SunEditor
        height={prop.height}
        placeholder="Type here..."
        setOptions={{
          resizingBar: false,
          buttonList: [
            [
              'undo',
              'redo',
              'formatBlock',
              'blockquote',
              'bold',
              'underline',
              'italic',
              'strike',
              'fontColor',
              'hiliteColor',
              'align',
              'list',
              'table',
              'link',
              'image',
              'video'
            ]
          ]
        }}
        defaultValue={prop.value}
        onChange={prop.onChange}
      />
    </div>
  );
}
