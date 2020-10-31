import React from 'react';
import {create} from 'react-test-renderer';
import Card from './';

describe('Card', () => {
    it('renders correctly', () => {
        const component = create(
            <Card title="Testing">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante mauris, dapibus at
                    tristique non, hendrerit at diam. Curabitur volutpat, ipsum ac imperdiet tincidunt, felis ipsum
                    tincidunt lorem, vel tristique purus lacus eget ipsum. Sed gravida mattis volutpat. Nulla lacinia
                    nisi egestas justo rhoncus, eget feugiat neque luctus. Vivamus quis turpis orci. Mauris vel nisi
                    quis purus dictum placerat in eu mi. Pellentesque aliquet leo vitae justo laoreet tempor. In
                    sagittis eleifend tempor. Cras tincidunt ultrices lacus quis finibus. Mauris mauris nulla, pharetra
                    in dolor quis, varius facilisis neque. Vestibulum tempus fermentum diam at tristique. Aliquam congue
                    laoreet enim, a aliquam urna feugiat non.
                </p>
            </Card>,
        );
        expect(component).toMatchSnapshot();
    });
});
