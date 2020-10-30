import {ChangeHpAction, AnimalData} from './types';

export function changeHp(animals: AnimalData, {hp, key, animal}: ChangeHpAction) {
    const parsedHp = parseInt(hp, 10);

    return {
        ...animals,
        [key]: {
            ...animals[key],
            hp: parsedHp > animal.hp.average ? animal.hp.average + '' : hp,
            roll: parsedHp <= 0 ? null : animals[key].roll,
        },
    };
}
