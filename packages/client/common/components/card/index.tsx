import React, {ReactNode} from 'react';
import classNames from 'classnames';

type Props = {
    title: string;
    children: ReactNode;
    className?: string;
};

export default function Card({title, children, className}: Props) {
    return (
        <div className={classNames(['rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden', className])}>
            <div className="px-3 pt-2 pb-3 md:p-5 relative box-border w-full">
                <h4 className="font-bold text-xl mb-2">{title}</h4>
                {children}
            </div>
        </div>
    );
}
