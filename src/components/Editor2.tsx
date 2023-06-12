import React, { useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor({ onChange, value }) {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
}

export default Editor;
