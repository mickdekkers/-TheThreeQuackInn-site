import {determineRollType} from '../libs/roll';
import {AnimalData, AnimalObj, Roll, RollType, UpdateIndivualRollAction} from './types';

const d20 = () => Math.floor(Math.random() * 20) + 1;

function rollDice(animal: AnimalObj): Roll | null {
    const {advantage, disadvantage} = animal;

    if (parseInt(animal.hp, 10) <= 0) {
        return null;
    }

    const dice = [d20(), d20()];
    const rollType = determineRollType({advantage, disadvantage});

    return {
        type: rollType,
        dice,
        outcome:
            rollType === RollType.Plain
                ? dice[0]
                : rollType === RollType.Advantage
                ? Math.max(...dice)
                : Math.min(...dice),
    };
}

export function updateRolls(animals: AnimalData) {
    const keys = Object.keys(animals);

    return keys.reduce((prev: AnimalData, current) => {
        prev[current] = {
            ...animals[current],
            roll: rollDice(animals[current]),
        };

        return prev;
    }, {});
}

export function updateIndivualRoll(animals: AnimalData, action: UpdateIndivualRollAction) {
    return {
        ...animals,
        [action.key]: {
            ...animals[action.key],
            roll: rollDice(animals[action.key]),
        },
    };
}
