import React, {Fragment} from 'react';
import AppHead from '../components/head';
import Hero from '../components/hero';

export default function HomePage() {
    return (
        <Fragment>
            <AppHead title="The Three Quack Inn" />
            <Hero />
        </Fragment>
    );
}
