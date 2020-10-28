import React from 'react';
import renderer from 'react-test-renderer';
import Card from './';

describe('Card', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Card title="Test" className="mt-4">
                    <p>Testing</p>
                </Card>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
