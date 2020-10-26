import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import heroStyles from './hero.module.css';

export default function Hero() {
    return (
        <div
            className={classNames(
                'flex items-center py-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8',
                heroStyles.hero,
            )}
        >
            <div className="sm:text-center lg:text-left container mx-auto">
                <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                    Conjure animals helper for
                    <span className="link inline-block ml-3">druids</span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Managing the conjure animals spell during combat can be overwhelming and can take out the speed of
                    combat. This tool aims to solve that problem by providing inputs for all the possible animals and
                    tracking initiative
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div>
                        <Link href="/conjure-animals">
                            <a className="button-gradient w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Take me to the tool
                            </a>
                        </Link>
                    </div>
                    <div className="rounded-md">
                        <Link href="https://www.deviantart.com/huussii/art/Exiled-Druids-of-Lornwood-622851414">
                            <a
                                target="_blank"
                                rel="norefferer nofollow"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-400 hover:text-white focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                            >
                                Art credit - Huussii
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
