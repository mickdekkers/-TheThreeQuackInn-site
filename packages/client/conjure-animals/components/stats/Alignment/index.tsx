import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

function determineAlignment(alignments: Array<string>) {
    if (alignments.includes('L') && alignments.includes('G')) {
        return 'Lawful Good';
    } else if (alignments.includes('N') && alignments.includes('G')) {
        return 'Neutral Good';
    } else if (alignments.includes('C') && alignments.includes('G')) {
        return 'Chaotic Good';
    } else if (alignments.includes('L') && alignments.includes('N')) {
        return 'Lawful Neutral';
    } else if (alignments.includes('C') && alignments.includes('N')) {
        return 'Chaotic Neutral';
    } else if (alignments.includes('L') && alignments.includes('E')) {
        return 'Lawful Evil';
    } else if (alignments.includes('N') && alignments.includes('E')) {
        return 'Neutral Evil';
    } else if (alignments.includes('C') && alignments.includes('E')) {
        return 'Chaotic Evil';
    }

    return 'Unaligned';
}

export default function StatsAlignment({stats}: Props) {
    return stats.alignment?.length ? (
        <span className="italic lowercase">, {determineAlignment(stats.alignment)}</span>
    ) : null;
}
