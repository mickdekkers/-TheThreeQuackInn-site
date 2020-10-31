import React from 'react';
import {create} from 'react-test-renderer';
import Link from './';

describe('Link', () => {
    it('renders correctly', () => {
        const component = create(<Link label="Go to" href="#" target="_blank" />);
        expect(component).toMatchSnapshot();
    });
});
