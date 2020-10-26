import React, {MouseEvent} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import navStyles from '../index.module.css';

type NavItem = {
    href: string;
    label: string;
};

type Props = NavItem & {
    items?: Array<NavItem>;
};

const listItemClassName = 'inline-block lg:inline-block lg:mt-0 font-bold mr-4 cursor-pointer';
const subMenu = 'shadow-lg p-3 bg-white rounded rounded-t-none';

function handleOnClick(e: MouseEvent<HTMLLIElement>) {
    e.preventDefault();
}

export default function NavItem({href, label, items}: Props) {
    const {pathname} = useRouter();
    const isActive = pathname === href;

    return items?.length ? (
        <Link href={href}>
            <li onClick={handleOnClick} className={classNames(listItemClassName, navStyles.hoverMenu)}>
                <span className={items.find((item) => item.href === pathname) && navStyles.active}>{label}</span>
                <svg
                    className="h-5 w-5 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>

                <ul className={classNames(navStyles.subMenu, subMenu)}>
                    {items.map((item) => (
                        <Link href={item.href} key={item.href}>
                            <li
                                className={classNames(
                                    listItemClassName,
                                    item.href === pathname
                                        ? navStyles.active
                                        : 'hover:text-gray-700 transition-colors duration-200',
                                )}
                            >
                                <a>{item.label}</a>
                            </li>
                        </Link>
                    ))}
                </ul>
            </li>
        </Link>
    ) : (
        <Link href={href}>
            <li
                className={classNames(
                    'hover:text-gray-700 transition-colors duration-200',
                    listItemClassName,
                    isActive && navStyles.active,
                )}
            >
                <a>{label}</a>
            </li>
        </Link>
    );
}
