import React from 'react';
import parseReferences from '../../../libs/parseReferences';
import {AnimalStats} from '../../stats/stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsActions({stats}: Props) {
    return Array.isArray(stats.action) ? (
        <div className="flex flex-wrap">
            {stats.action.map((action) => (
                <div className="mt-2" key={action.name}>
                    <span className="font-bold mr-1 inline-block">{action.name}</span>
                    {action.entries.map((entry, i) => (
                        <span key={i}>{parseReferences(entry)}</span>
                    ))}
                </div>
            ))}
        </div>
    ) : null;
}
