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

const listItemClassName = 'block mt-4 lg:inline-block lg:mt-0 font-bold mr-4 cursor-pointer';
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

                <ul className={classNames(navStyles.subMenu, subMenu)}>
                    {items.map((item) => (
                        <Link href={item.href} key={item.href}>
                            <li
                                className={classNames(
                                    listItemClassName,
                                    'my-2',
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
