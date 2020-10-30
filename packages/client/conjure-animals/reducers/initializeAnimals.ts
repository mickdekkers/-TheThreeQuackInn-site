import {AnimalStats} from '../components/stats/stats';
import {AnimalData, InitAction} from './types';

export const MAX_CR = 2;

export function calculateMaxAnimals(animal: AnimalStats) {
    if (!animal) return 0;

    const split = animal.cr.split('/');
    const result = split.length > 1 ? parseInt(split[0], 10) / parseInt(split[1], 10) : parseInt(split[0], 10); // Only calculate fractions if the CR dictates

    if (result === 0) return 8;

    return MAX_CR / result;
}

export function initializeAnimals({animalName, num, animal}: InitAction) {
    if (!animal || !window) return {};
    const cr = parseInt(animal.cr.toString(), 10);
    const maxAnimals = calculateMaxAnimals(animal);
    const params = new URLSearchParams(window.location.search);
    const amountParam = params.get('amount');
    const numAnimals = num || (amountParam && parseInt(amountParam, 10));
    if (!numAnimals) return {};

    const animals: AnimalData = {};

    for (let i = 0; i < numAnimals; i++) {
        const currentIndex = i + 1;
        if (currentIndex > maxAnimals || (cr === 0 && currentIndex > 8)) break;

        animals[`${animalName}_${i}`] = {
            name: animal.name,
            hp: animal.hp.average + '',
            roll: null,
            advantage: false,
            disadvantage: false,
        };
    }

    return animals;
}
