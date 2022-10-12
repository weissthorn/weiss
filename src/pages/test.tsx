import { Spacer, Text, Button } from '@geist-ui/core';
import { Translation } from 'components/intl/Translation';
import Navbar from 'components/Navbar';
import Link from 'next/link';

export default function Test() {
  return (
    <div>
      <Navbar title="Test" description="Test" />
      <div className="page-container top-100 center">
        <Spacer h={4} />
        <Text>
          <Translation lang="es" value="Admin" />
        </Text>
        <Spacer h={2} />
      </div>
    </div>
  );
}
