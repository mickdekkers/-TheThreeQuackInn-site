import React from 'react';
import {AnimalStats} from '../stats';
import AbilityScore from './Score';

type Props = {
    stats: AnimalStats;
};

export default function StatsAbilityScores({stats}: Props) {
    return (
        <div className="flex flex-wrap lg:flex-no-wrap">
            <AbilityScore type="str" score={stats.str} />
            <AbilityScore type="dex" score={stats.dex} />
            <AbilityScore type="con" score={stats.con} />
            <AbilityScore type="int" score={stats.int} />
            <AbilityScore type="wis" score={stats.wis} />
            <AbilityScore type="cha" score={stats.cha} />
        </div>
    );
}
