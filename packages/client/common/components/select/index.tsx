import React, {SelectHTMLAttributes} from 'react';

type Props = {
    label: string;
    name: string;
    options: Array<{value: string; label: string}>;
    onChange: SelectHTMLAttributes<HTMLSelectElement>['onChange'];
    value: string;
};

export default function Select(props: Props) {
    const {label, name, options, onChange, value} = props;

    return (
        <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor={name}>
                {label}
            </label>
            <div className="relative">
                <select
                    className="block appearance-none w-full bg-gray-200 border text-gray-700 py-2 px-2 md:px-3 md:py-2 rounded leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-gray-500 "
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value} data-name={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
