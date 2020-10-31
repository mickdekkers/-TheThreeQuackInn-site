import React from 'react';
import {create} from 'react-test-renderer';
import Input from './';

describe('Input', () => {
    it('renders correctly', () => {
        const onChange = jest.fn();
        const component = create(<Input name="test" label="Test" onChange={onChange} type="text" value="testing" />);
        expect(component).toMatchSnapshot();
    });

    it('renders min/max correctly', () => {
        const onChange = jest.fn();
        const component = create(
            <Input name="test" label="Test" onChange={onChange} type="text" value="testing" min={0} max={8} />,
        );
        expect(component).toMatchSnapshot();
    });

    it('renders placeholder correctly', () => {
        const onChange = jest.fn();
        const component = create(
            <Input
                name="test"
                label="Test"
                onChange={onChange}
                type="text"
                value="testing"
                placeholder="Type here..."
            />,
        );
        expect(component).toMatchSnapshot();
    });
});
