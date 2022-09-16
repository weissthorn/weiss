import { useRef, useState } from 'react';
import Link from 'next/link';
import { Spacer, Button, Select, Popover, Text } from '@geist-ui/core';
import { Maximize, Minimize, XCircleFill } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import Editor from 'components/Editor';

type editorProps = {
  loading: boolean;
  content?: string;
  show: boolean;
  isAuthenticate: boolean;
  replyUsername?: string;
  replyId?: string;
  commentNumber?: number;
  toggleModal: () => void;
  actionTrigger: (value: any) => void;
  save: (value: any) => void;
};

const CommentModal = observer((props: editorProps) => {
  const {
    loading,
    content,
    show,
    isAuthenticate,
    replyId,
    replyUsername,
    commentNumber,
    actionTrigger,
    toggleModal,
    save
  } = props;

  const editor = useRef<any>(null);
  const [width, setWidth] = useState('720px');
  const [height, setHeight] = useState('auto');
  const [_height, _setHeight] = useState('150px');

  const toggleFullScreen = () => {
    if (editor.current.requestFullscreen) {
      setWidth('100%');
      setHeight('100vh');
      _setHeight('80vh');
      editor.current.requestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      setWidth('720px');
      setHeight('auto');
      _setHeight('150px');
      document.exitFullscreen();
    }
  };

  return (
    <>
      {show ? (
        <div className="editor-container" ref={editor}>
          <div className="content" style={{ maxWidth: width, height }}>
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
            <Text>
              {replyUsername
                ? `In reply to @${replyUsername} comment #${commentNumber}`
                : ''}
            </Text>
            <Spacer />
            <Editor
              height={_height}
              value={content}
              onChange={(value) => {
                actionTrigger(value);
              }}
            />
            {isAuthenticate ? (
              <Button loading={loading} type="success-light" onClick={save}>
                Send Reply
              </Button>
            ) : (
              <Link href="/login">
                <Button loading={loading} type="success-light">
                  Sign in to Reply
                </Button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
});

export default CommentModal;
