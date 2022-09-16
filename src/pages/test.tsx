import { Spacer, Text, Button } from '@geist-ui/core';
import Editor from 'components/Editor';
import Navbar from 'components/Navbar';

export default function PageNotFound() {
  return (
    <div>
      <Navbar title="Page not found" description="Page not found" />
      <div className="page-container top-100">
        <Spacer h={4} />
        <Editor height="200px" />
        <Spacer h={2} />
      </div>
    </div>
  );
}
