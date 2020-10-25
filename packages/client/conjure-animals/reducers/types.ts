import {AnimalStats} from '../../components/spells/conjure-animals/Stats/stats';

export enum ActionTypes {
    init = 'init',
    changeHp = 'changeHp',
    updateAdvDis = 'updateAdvDis',
    updateRolls = 'updateRolls',
    updateRollIndividual = 'updateRollIndividual',
}

export type Action = InitAction | ChangeHpAction | UpdateAdvDisAction | UpdateRollsAction | UpdateIndivualRollAction;

export type InitAction = {
    type: ActionTypes.init;
    animalName: string;
    animal: AnimalStats | undefined;
    num: number;
};

export type ChangeHpAction = {
    type: ActionTypes.changeHp;
    key: string;
    hp: string;
    animal: AnimalStats;
};

export type UpdateAdvDisAction = {
    type: ActionTypes.updateAdvDis;
    key: string;
    value: boolean;
};

export type UpdateRollsAction = {
    type: ActionTypes.updateRolls;
};

export type UpdateIndivualRollAction = {
    type: ActionTypes.updateRollIndividual;
    key: string;
};

export type AnimalData = {
    [key: string]: AnimalObj;
};

export type AnimalObj = {
    name: string;
    hp: string;
    dice: {
        rolls: Array<number>;
        outcome: number;
    };
    advantage: boolean;
    disadvantage: boolean;
};
