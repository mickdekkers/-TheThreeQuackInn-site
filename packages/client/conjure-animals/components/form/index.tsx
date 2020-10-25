import React, {ChangeEvent} from 'react';
import Input from '@threequackinn/client-common/components/input';
import Select from '@threequackinn/client-common/components/select';

type Props = {
    animal: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{label: string; value: string}>;
    onSetNum: (e: ChangeEvent<HTMLInputElement>) => void;
    value: number | string;
    max: number;
};

export default function ConjureAnimalsForm({animal, onChange, options, onSetNum, value, max}: Props) {
    return (
        <div>
            <div className="mb-4">
                <Select label="Choose animal" value={animal} options={options} name="animal" onChange={onChange} />
            </div>
            <div className="mb-4">
                <Input
                    type="number"
                    name="num"
                    label="Number of animals"
                    onChange={onSetNum}
                    value={value}
                    min={0}
                    max={max}
                />
            </div>
        </div>
    );
}
