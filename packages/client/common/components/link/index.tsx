import React from 'react';

type Props = HTMLAnchorElement & {
    target: HTMLAnchorElement['target'];
    href: HTMLAnchorElement['href'];
    label: string;
    title?: HTMLAnchorElement['title'];
    rel?: HTMLAnchorElement['rel'];
};

export default function Link({target, href, title, rel, label}: Props) {
    return (
        <a
            className="transition-colors duration-300 mx-1 font-medium hover:underline"
            href={href}
            target={target}
            title={title}
            rel={rel}
        >
            {label}
        </a>
    );
}
