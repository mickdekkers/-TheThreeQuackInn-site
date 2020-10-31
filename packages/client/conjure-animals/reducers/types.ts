import {AnimalStats} from '../components/stats/stats';

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

export enum RollType {
    Plain = 'Plain',
    Advantage = 'Advantage',
    Disadvantage = 'Disadvantage',
}

export type Roll = {
    type: RollType;
    dice: Array<number>;
    outcome: number;
};

export type AnimalObj = {
    name: string;
    hp: string;
    roll: Roll | null;
    advantage: boolean;
    disadvantage: boolean;
};
