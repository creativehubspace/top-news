import React from 'react';
import Head from 'next/head';


const Layout = (props) => (
  <div>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Tops News!</title>
    </Head>

    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;