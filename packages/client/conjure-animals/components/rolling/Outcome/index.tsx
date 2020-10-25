import React from 'react';
import {AnimalObj} from '../../../reducers/types';

type Props = {
    animal: AnimalObj;
};

export default function RollOutcome({animal}: Props) {
    const {dice, advantage, disadvantage} = animal;

    if (dice.outcome === -1) {
        return null;
    }

    const max = Math.max(...dice.rolls);
    const min = Math.min(...dice.rolls);

    return (
        <p className="mb-1">
            <span className="inline-block mr-1 text-gray-700">
                {(advantage && disadvantage) || (!advantage && !disadvantage)
                    ? `Rolled: ${dice.outcome}`
                    : `Rolled: ${dice.rolls.map((roll) => roll).join(' and ')}`}
            </span>
            {(advantage && disadvantage) || (!advantage && !disadvantage) ? null : (
                <span className="inline-block mr-1 text-gray-700">
                    {advantage ? `Outcome: ${max}, with advantage` : `Outcome: ${min}, with disadvantage`}
                </span>
            )}
        </p>
    );
}
