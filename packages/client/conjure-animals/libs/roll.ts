import {RollType} from '../reducers/types';

/**
 * Determines whether a roll has advantage, disadvantage, or neither.
 */
export function determineRollType({advantage, disadvantage}: {advantage: boolean; disadvantage: boolean}): RollType {
    // "If circumstances cause a roll to have both advantage and disadvantage, you are considered to have neither of them, and you roll one d20."
    const xvantage = (advantage || disadvantage) && !(advantage && disadvantage);

    if (!xvantage) {
        return RollType.Plain;
    } else if (advantage) {
        return RollType.Advantage;
    } else {
        return RollType.Disadvantage;
    }
}
