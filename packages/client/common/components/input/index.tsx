import React, {ChangeEvent, InputHTMLAttributes} from 'react';

type Props = {
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    name: string;
    placeholder?: string;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    max?: number;
    value: number | string;
    min?: number;
};

export default function Input({type, name, placeholder, label, onChange, max, min, value}: Props) {
    return (
        <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor={name}>
                {label}
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 md:px-3 md:py-2 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                max={max}
                min={min}
                value={value}
            />
        </div>
    );
}
