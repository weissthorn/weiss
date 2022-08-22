import { useState } from 'react';
import {
  Spacer,
  Text,
  Tabs,
  Pagination,
  Link,
  Button,
  User,
  Snippet,
  Code
} from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle, Circle } from '@geist-ui/icons';
import Navbar from 'components/Navbar';
import Sidebar from 'components/DocSidebar';

export default function Docs() {
  return (
    <div>
      <Navbar title="Docs" description="Docs" />
      <div className="page-container top-100">
        <Sidebar active="user" />
        <main className="main">
          <Text h3>Users</Text>

          <Code block width="100%">{`function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}`}</Code>
        </main>
      </div>
    </div>
  );
}
