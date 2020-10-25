import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsSpeed({stats}: Props) {
    return (
        <p>
            <span className="font-bold mr-2">Speed</span>
            {Object.keys(stats.speed).map((type) => {
                return type && stats.speed.hasOwnProperty(type) ? (
                    <span className="inline-block mr-2 capitalize" key={type}>
                        {`${type}: ${stats.speed[type]} ft.`}
                    </span>
                ) : null;
            })}
        </p>
    );
}
