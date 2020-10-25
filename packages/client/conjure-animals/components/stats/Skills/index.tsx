import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsSkills({stats}: Props) {
    const skills = stats.skill;
    return skills ? (
        <div className="flex">
            <span className="font-bold inline-block mr-1">Skills</span>
            {Object.keys(skills).map((key) => (
                <span className="inline-block mr-2" key={key}>{`${key} ${skills[key]}`}</span>
            ))}
        </div>
    ) : null;
}
