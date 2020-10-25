import {changeAdvantageDisadvantage} from './changeAdvantageDisadvantage';
import {changeHp} from './changeHp';
import {initializeAnimals} from './initializeAnimals';
import {ActionTypes, Action, AnimalData} from './types';
import {updateRolls, updateIndivualRoll} from './updateRolls';

export function animalsReducer(animals: AnimalData, action: Action) {
    switch (action.type) {
        case ActionTypes.init:
            return initializeAnimals(action);
        case ActionTypes.changeHp:
            return changeHp(animals, action);
        case ActionTypes.updateAdvDis:
            return changeAdvantageDisadvantage(animals, action);
        case ActionTypes.updateRolls:
            return updateRolls(animals);
        case ActionTypes.updateRollIndividual:
            return updateIndivualRoll(animals, action);
        default:
            return {};
    }
}
