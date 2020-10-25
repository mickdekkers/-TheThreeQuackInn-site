import React, {KeyboardEvent, ChangeEvent, Fragment, useEffect, useReducer} from 'react';
import classNames from 'classnames';
import Input from '@threequackinn/client-common/components/input';
import {ActionTypes} from '../../reducers/types';
import {animalsReducer} from '../../reducers';
import RollOutcome from './Outcome';
import Button from '@threequackinn/client-common/components/button';
import Checkbox from '@threequackinn/client-common/components/checkbox';
import useConjureAnimals from '../../hooks/useConjureAnimals';

type Props = {
    num: number;
    animalName: string;
};

export default function ConjureAnimalsRolling({num, animalName}: Props) {
    const {animals: animalsObject, getAnimalData} = useConjureAnimals();
    const [animals, dispatch] = useReducer(animalsReducer, {});
    const animalKeys = Object.keys(animals);

    function handleOnHpChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        const animalKey = name.split('_');
        const derivedKey = animalKey[0];
        const animal = getAnimalData(derivedKey);

        animal && dispatch({type: ActionTypes.changeHp, hp: value, key: name, animal});
    }

    function handleRollGroup() {
        dispatch({type: ActionTypes.updateRolls});
    }

    function handleRollIndivual(key: string) {
        dispatch({type: ActionTypes.updateRollIndividual, key});
    }

    function handleAdvantageDisadvantage(e: ChangeEvent<HTMLInputElement>) {
        const {name, checked} = e.target;
        dispatch({type: ActionTypes.updateAdvDis, key: name, value: checked});
    }

    function handleOnKeyEnter(e: KeyboardEvent<HTMLInputElement>) {
        const {name, checked} = e.currentTarget;
        dispatch({type: ActionTypes.updateAdvDis, key: name, value: !checked});
    }

    useEffect(() => {
        const animal = getAnimalData(animalName);
        dispatch({type: ActionTypes.init, animalName, animal, num});
    }, [num, animalName, getAnimalData]);

    return (
        <Fragment>
            <div className={classNames('flex flex-wrap', animalKeys.length ? '-mx-2' : '')}>
                {animalKeys.length ? (
                    animalKeys.map((key, i) => (
                        <div key={key} className="w-1/2 px-2">
                            <Input
                                type="number"
                                name={key}
                                onChange={handleOnHpChange}
                                label={`${animals[key].name} ${i + 1}`}
                                value={animals[key].hp}
                                min={0}
                                max={animalsObject[animalName].hp.average}
                            />
                            <div className="my-1 flex flex-1 flex-wrap">
                                <Checkbox
                                    className="w-full md:w-auto"
                                    label="Advantage"
                                    name={`${key}_advantage`}
                                    checked={animals[key].advantage}
                                    onChange={handleAdvantageDisadvantage}
                                    onKeyEnter={handleOnKeyEnter}
                                />
                                <Checkbox
                                    className="w-full md:w-auto"
                                    label="Disadvantage"
                                    name={`${key}_disadvantage`}
                                    checked={animals[key].disadvantage}
                                    onChange={handleAdvantageDisadvantage}
                                    onKeyEnter={handleOnKeyEnter}
                                />
                                <Button
                                    onClick={() => handleRollIndivual(key)}
                                    label="Roll"
                                    variant="outline"
                                    className="text-gray-700 px-0 py-0 hover:underline focus:underline focus:outline-none focus:shadow-none"
                                />
                            </div>
                            <RollOutcome animal={animals[key]} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-700">To begin, select an animal and the number of animals to spawn.</p>
                )}
            </div>
            {num ? (
                <div className="flex items-center justify-between mt-5">
                    <Button
                        variant="primary"
                        label="Roll group"
                        onClick={handleRollGroup}
                        className="font-semibold py-2 px-4"
                    />
                </div>
            ) : null}
        </Fragment>
    );
}
