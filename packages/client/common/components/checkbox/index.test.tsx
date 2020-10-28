import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './';

describe('Checkbox', () => {
    it('renders correctly', () => {
        const onChange = jest.fn();
        const tree = renderer
            .create(<Checkbox checked={false} onChange={onChange} name="Test" label="Testing" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
