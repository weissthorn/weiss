import React, { useEffect, useRef, useState } from 'react';
import { Spacer, Button, Select, Popover } from '@geist-ui/core';
import { Maximize, Minimize, XCircleFill } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import CategoryStore from 'stores/category';
import Editor from 'components/Editor';

type editorProps = {
  loading: boolean;
  title?: string;
  category?: string;
  content?: string;
  show: boolean;
  toggleModal: () => void;
  actionTrigger: (value: any) => void;
  save: (value: any) => void;
};

const EditorModal = observer((props: editorProps) => {
  const {
    loading,
    title,
    category,
    content,
    show,
    actionTrigger,
    toggleModal,
    save
  } = props;
  const [{ categories, getCategories }] = useState(() => new CategoryStore());
  const editor = useRef<any>(null);
  const [width, setWidth] = useState('700px');
  const [height, setHeight] = useState('auto');
  const [_height, _setHeight] = useState('150px');

  useEffect(() => {
    getCategories();
  }, []);

  const toggleFullScreen = () => {
    if (editor.current.requestFullscreen) {
      setWidth('100%');
      setHeight('100vh');
      _setHeight('calc(100% - 100px)');
      editor.current.requestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      setWidth('700px');
      setHeight('auto');
      _setHeight('150px');
      document.exitFullscreen();
    }
  };

  return (
    <>
      {show ? (
        <div className="editor-container" ref={editor}>
          <div className="content" style={{ width, height }}>
            <div className="close">
              {_height === '150px' ? (
                <Maximize size={28} onClick={toggleFullScreen} />
              ) : (
                <Minimize size={28} onClick={closeFullscreen} />
              )}
              <Spacer w={1} inline />
              <XCircleFill
                size={30}
                onClick={() => {
                  closeFullscreen();
                  toggleModal();
                }}
              />
            </div>
            <div className="">
              <Select
                h={0.75}
                initialValue="general"
                onChange={(val) => actionTrigger({ category: val })}
                value={category}
              >
                {categories.map((item: any) => (
                  <Select.Option key={item.id} value={item.slug}>
                    {item.title}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <input
              width="100%"
              placeholder="Discussion Title"
              defaultValue={title}
              onChange={(e) => actionTrigger({ title: e.target.value })}
            />
            <Spacer h={1} />
            <Editor
              height={_height}
              value={content}
              onChange={(value) => {
                actionTrigger({ content: value });
              }}
            />
            <Button loading={loading} type="success-light" onClick={save}>
              Publish
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
});

export default EditorModal;
