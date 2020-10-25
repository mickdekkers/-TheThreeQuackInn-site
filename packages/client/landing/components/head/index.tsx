import React, {ReactNode} from 'react';
import Head from 'next/head';

type Props = {
    title: string;
    children?: ReactNode;
};

export default function AppHead({title, children}: Props) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    );
}
