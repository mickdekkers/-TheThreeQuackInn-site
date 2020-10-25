import React, {KeyboardEvent, ChangeEvent} from 'react';
import classNames from 'classnames';

type Props = {
    name: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    onKeyEnter?: (target: KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
};

export default function Checkbox({name, checked, onChange, label, onKeyEnter, className}: Props) {
    function handleOnKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter' && onKeyEnter) {
            onKeyEnter(e);
        }
    }

    return (
        <label className={classNames('inline-flex items-center mr-2', className)} htmlFor={name}>
            <input
                name={name}
                id={name}
                type="checkbox"
                className="form-checkbox focus:outline-none focus:shadow-outline"
                checked={checked}
                onChange={onChange}
                onKeyPress={handleOnKeyPress}
            />
            <span className="ml-1 text-gray-700">{label}</span>
        </label>
    );
}
