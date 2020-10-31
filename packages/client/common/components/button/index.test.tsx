import React from 'react';
import {create} from 'react-test-renderer';
import Button from './';

describe('Button', () => {
    it('renders the primary variant correctly', () => {
        const onClick = jest.fn();
        const component = create(<Button label="Testing" onClick={onClick} variant="primary" />);
        expect(component).toMatchSnapshot();
    });

    it('renders the outline variant correctly', () => {
        const onClick = jest.fn();
        const component = create(<Button label="Testing" onClick={onClick} variant="outline" />);
        expect(component).toMatchSnapshot();
    });
});
