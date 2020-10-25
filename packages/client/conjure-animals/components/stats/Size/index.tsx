import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

function mapSize(size: string) {
    switch (size) {
        case 'S':
            return 'Small';
        case 'M':
            return 'Medium';
        case 'L':
            return 'Large';
        case 'T':
            return 'Tiny';
        case 'H':
            return 'Huge';
        default:
            return size;
    }
}

export default function StatsSize({stats}: Props) {
    return (
        <span className="italic">
            {mapSize(stats.size)} {stats.type}
        </span>
    );
}
