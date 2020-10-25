import React from 'react';
import {AppProps} from 'next/app';
import '../css/index.css';

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Component {...pageProps} />
        </div>
    );
}
