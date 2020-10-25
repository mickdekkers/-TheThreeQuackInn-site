import React from 'react';
import NavItem from './Item';

export default function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white px-6 py-3 shadow-md">
            <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto mb-1">
                <ul className="text-sm sm:flex-grow">
                    <NavItem href="/" label="Home" />
                    <NavItem href="#" label="Druids" items={[{label: 'Conjure Animals', href: '/conjure-animals'}]} />
                </ul>
            </div>
        </nav>
    );
}
