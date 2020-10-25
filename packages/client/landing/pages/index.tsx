import React from 'react';
import Head from 'next/head';
import {Fragment} from 'react';
import Button from '@threequackinn/client-common/components/button';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>The Three Quack Inn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Button className="font-semibold py-2 px-4" label="Test" variant="primary" onClick={console.log} />
        </Fragment>
    );
}
