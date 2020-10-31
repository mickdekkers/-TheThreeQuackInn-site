import React from 'react';
import {create} from 'react-test-renderer';
import Select from './';

const options = [
    {
        label: 'Test 1',
        value: 'test-1',
    },
    {
        label: 'Test 2',
        value: 'test-2',
    },
    {
        label: 'Test 3',
        value: 'test-3',
    },
];

describe('Select', () => {
    it('renders correctly', () => {
        const onChange = jest.fn();
        const component = create(<Select label="Testing" value="" onChange={onChange} name="test" options={options} />);
        expect(component).toMatchSnapshot();
    });

    it('renders value correctly', () => {
        const onChange = jest.fn();
        const component = create(
            <Select label="Testing" value="test-2" onChange={onChange} name="test" options={options} />,
        );
        expect(component).toMatchSnapshot();
    });
});
