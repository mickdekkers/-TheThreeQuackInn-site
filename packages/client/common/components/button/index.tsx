import React from 'react';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'outline';

type Props = {
    onClick: () => void;
    label: string;
    className?: string;
    variant: ButtonVariant;
    disabled?: boolean;
};

function determineVariantClass(variant: ButtonVariant) {
    switch (variant) {
        case 'primary':
            return 'text-white button-gradient';
        case 'outline':
            return 'bg-transparent hover:bg-transparent';
        default:
            return '';
    }
}

export default function Button({onClick, label, className, disabled, variant}: Props) {
    return (
        <button
            disabled={disabled}
            className={classNames(
                'duration-300 ease-in-out rounded focus:outline-none focus:shadow-outline',
                determineVariantClass(variant),
                className,
            )}
            type="button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
