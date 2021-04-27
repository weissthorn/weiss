import * as React from 'react';
import Head from 'next/head';

const Page = ({ title, top, grey, description, children }) => (
  <div className={`page ${top ? 'top' : ''} ${grey ? 'grey' : ''}`}>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
    <div>{children}</div>
  </div>
);

export default Page;
