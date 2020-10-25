import {AnimalData, AnimalObj, UpdateIndivualRollAction} from './types';

function rollDice(animal: AnimalObj) {
    const {advantage, disadvantage} = animal;

    if (parseInt(animal.hp, 10) <= 0) {
        return {outcome: -1, rolls: []};
    }

    const rolls = [Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1];

    if ((!advantage && !disadvantage) || (advantage && disadvantage)) {
        return {
            outcome: rolls[0],
            rolls,
        };
    } else if (advantage) {
        return {
            outcome: Math.max(...rolls),
            rolls,
        };
    }

    return {
        outcome: Math.min(...rolls),
        rolls,
    };
}

export function updateRolls(animals: AnimalData) {
    const keys = Object.keys(animals);

    return keys.reduce((prev: AnimalData, current) => {
        prev[current] = {
            ...animals[current],
            dice: rollDice(animals[current]),
        };

        return prev;
    }, {});
}

export function updateIndivualRoll(animals: AnimalData, action: UpdateIndivualRollAction) {
    return {
        ...animals,
        [action.key]: {
            ...animals[action.key],
            dice: rollDice(animals[action.key]),
        },
    };
}
