import React from 'react';
import Card from '@threequackinn/client-common/components/card';
import StatsAbilityScores from './AbilityScores';
import StatsAC from './AC';
import StatsSize from './Size';
import StatsSkills from './Skills';
import StatsSpeed from './Speed';
import StatsLanguages from './Languages';
import StatsCR from './CR';
import StatsTraits from './Traits';
import StatsActions from './Actions';
import {AnimalStats} from './stats';
import StatsAlignment from './Alignment';
import useConjureAnimals from '../../hooks/useConjureAnimals';

export type Animal = AnimalStats;

type Props = {
    animal: string;
};

export default function ConjureAnimalsStats({animal}: Props) {
    const {animals} = useConjureAnimals();
    const stats = animals[animal];

    return stats && Object.keys(stats).length ? (
        <Card className="flex flex-wrap w-full" title={stats.name}>
            <StatsSize stats={stats} />
            <StatsAlignment stats={stats} />
            <StatsAC stats={stats} />
            <StatsSpeed stats={stats} />
            <StatsAbilityScores stats={stats} />
            <StatsSkills stats={stats} />
            <StatsLanguages stats={stats} />
            <StatsCR stats={stats} />
            <StatsTraits stats={stats} />
            <StatsActions stats={stats} />
        </Card>
    ) : (
        <Card className="flex flex-wrap md:mr-10 mt-5 w-full md:w-1/2" title="No stats found">
            <span>No stats were found for this beast. Select a new one from the list.</span>
        </Card>
    );
}
