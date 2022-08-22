import { useState } from 'react';
import {
  Spacer,
  Text,
  Tabs,
  Pagination,
  Link,
  Button,
  User
} from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle, Circle } from '@geist-ui/icons';
import Navbar from 'components/Navbar';

export default function PageNotFound() {
  return (
    <div>
      <Navbar title="Page not found" description="Page not found" />
      <div className="page-container top-100">
        <Text h3>Oops! Page not found or has been deleted.</Text>
      </div>
    </div>
  );
}
