import React from 'react';
import Link from '@threequackinn/client-common/components/link';
import ConjureAnimalsApp from './components/app';
import {ConjureAnimalsProvider} from './providers/ConjureAnimals';

export default function ConjureAnimals() {
    return (
        <ConjureAnimalsProvider>
            <div className="flex flex-wrap items-center justify-center">
                <div className=" p-2 md:p-5 md:flex flex-wrap md:flex-no-wrap md:items-center justify-center">
                    <ConjureAnimalsApp />
                </div>
                <p className="text-gray-700 mb-3">
                    Data used from
                    <Link
                        href="https://5e.tools/"
                        target="_blank"
                        title="5etools: A suite of tools for 5th Edition Dungeons and Dragons players and Dungeon Masters."
                        rel="noreferrer noopener"
                        label="5e.tools"
                    />
                </p>
            </div>
        </ConjureAnimalsProvider>
    );
}
