import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsLanguages({stats}: Props) {
    return stats.languages ? (
        <div className="">
            <span className="inline-block mr-1 font-bold">Languages</span>
            {stats.languages.map((language, i) => (
                <span className="inline-flex mr-2 capitalize break-words" key={i}>
                    {language}
                </span>
            ))}
        </div>
    ) : null;
}
