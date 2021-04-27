import '../styles/themes/weiss-bright.scss';

import React from 'react';
import App from 'next/app';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <link
          rel="stylesheet"
          href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default CustomApp;
