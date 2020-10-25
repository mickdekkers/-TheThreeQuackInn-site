import {UpdateAdvDisAction, AnimalData} from './types';

export function changeAdvantageDisadvantage(animals: AnimalData, {key, value}: UpdateAdvDisAction) {
    const keys = key.split('_');
    const targetAnimalKey = keys[0] + '_' + keys[1];

    return {
        ...animals,
        [targetAnimalKey]: {
            ...animals[targetAnimalKey],
            [keys[2]]: value,
        },
    };
}
