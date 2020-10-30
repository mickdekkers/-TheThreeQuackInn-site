import React from 'react';
import {AnimalObj, RollType} from '../../../reducers/types';

type Props = {
    animal: AnimalObj;
};

export default function RollOutcome({animal}: Props) {
    const {roll} = animal;

    if (roll == null) {
        return null;
    }

    return (
        <p className="mb-1">
            <span className="inline-block mr-1 text-gray-700">Rolled:</span>
            <span className="inline-block mr-1 text-gray-700 font-bold">{roll.outcome}</span>
            {roll.type === RollType.Plain ? null : (
                <span className="inline-block mr-1 text-gray-700">{`(${roll.dice.join(' and ')})`}</span>
            )}
        </p>
    );
}
