import { Spacer, Text, Button } from '@geist-ui/core';
import Navbar from 'components/Navbar';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div>
      <Navbar title="Page not found" description="Page not found" />
      <div className="page-container top-100 center">
        <Spacer h={4} />
        <Text h3>Oops! Page not found or has been deleted.</Text>
        <Spacer h={2} />
        <Link href="/">
          <Button type="secondary">&larr; Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
