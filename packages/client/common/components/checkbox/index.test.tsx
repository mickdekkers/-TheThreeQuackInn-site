import React from 'react';
import {create} from 'react-test-renderer';
import Checkbox from './';

describe('Checkbox', () => {
    it('renders the unchecked state correctly', () => {
        const onChange = jest.fn();
        const component = create(
            <Checkbox label="Test" name="test" className="test" checked={false} onChange={onChange} />,
        );
        expect(component).toMatchSnapshot();
    });

    it('renders the checked state correctly', () => {
        const onChange = jest.fn();
        const component = create(
            <Checkbox label="Test" name="test" className="test" checked={true} onChange={onChange} />,
        );
        expect(component).toMatchSnapshot();
    });
});
