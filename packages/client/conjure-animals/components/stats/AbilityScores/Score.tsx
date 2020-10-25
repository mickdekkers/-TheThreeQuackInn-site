import React from 'react';
import determineScore from './determineScore';

type Props = {
    type: 'int' | 'cha' | 'str' | 'con' | 'wis' | 'dex';
    score: number;
};

export default function AbilityScore({type, score}: Props) {
    return (
        <div className="p-5 w-1/2 md:w-1/3">
            <p className="font-bold text-center uppercase">{type}</p>
            <p className="text-center">
                {score} ({determineScore(score)})
            </p>
        </div>
    );
}
