import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsHP({stats}: Props) {
    return (
        <p>
            <span className="font-bold">Hit Points</span> {stats.hp.average} ({stats.hp.formula})
        </p>
    );
}
