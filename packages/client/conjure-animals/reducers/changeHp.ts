import {ChangeHpAction, AnimalData} from './types';

export function changeHp(animals: AnimalData, {hp, key, animal}: ChangeHpAction) {
    const parsedHp = parseInt(hp, 10);

    return {
        ...animals,
        [key]: {
            ...animals[key],
            hp: parsedHp > animal.hp.average ? animal.hp.average + '' : hp,
            dice: parsedHp <= 0 ? {rolls: [], outcome: -1} : animals[key].dice,
        },
    };
}
