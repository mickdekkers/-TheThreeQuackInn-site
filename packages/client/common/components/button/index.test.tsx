import React from 'react';
import renderer from 'react-test-renderer';
import Button from './';

describe('Button', () => {
    it('renders the primary button correctly', () => {
        const onClick = jest.fn();
        const tree = renderer.create(<Button onClick={onClick} variant="primary" label="Click me" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the outline button correctly', () => {
        const onClick = jest.fn();
        const tree = renderer.create(<Button onClick={onClick} variant="outline" label="Click me" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
