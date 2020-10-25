import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsCR({stats}: Props) {
    return (
        <div className="flex">
            <span className="inline-block mr-2 font-bold">Challenge Rating</span>
            {stats.cr}
        </div>
    );
}
