import React, {useState, ChangeEvent, Fragment, useEffect} from 'react';
import Card from '@threequackinn/client-common/components/card';
import ConjureAnimalsForm from '../form';
import ConjureAnimalsRolling from '../rolling';
import ConjureAnimalsStats from '../stats';
import useConjureAnimals from '../../hooks/useConjureAnimals';
import {calculateMaxAnimals} from '../../reducers/initializeAnimals';

function determineNum(amount: string) {
    const num = parseInt(amount, 10);
    if (isNaN(num)) return 0;
    if (num > 8) return 8;
    if (num < 0) return 0;
    return num;
}

export default function ConjureAnimals() {
    const urlParams = new URLSearchParams();
    const animalParam = urlParams.get('beast');
    const amountParam = urlParams.get('amount');
    const amount = amountParam || '0';
    const [num, setNum] = useState(determineNum(amount));
    const {formData, animals} = useConjureAnimals();
    const [animal, setAnimal] = useState<string>(animalParam || formData[0]?.value);

    function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
        setAnimal(e.target.value);
        setQueryParam('beast', e.target.value);
    }

    function setQueryParam(key: string, value: string) {
        if (window) {
            const params = new URLSearchParams(window.location.search);
            params.set(key, value);
            window.history.replaceState({}, '', decodeURIComponent(`${window.location.pathname}?${params}`));
        }
    }

    function handleOnSetNum(e: ChangeEvent<HTMLInputElement>) {
        setNum(parseInt(e.target.value, 10));
        setQueryParam('amount', e.target.value);
    }

    useEffect(() => {
        if (Object.keys(formData).length && !animalParam && !animal) {
            setAnimal(formData[0].value);
            setQueryParam('beast', formData[0].value);
        }
    }, [formData, animal, animalParam]);

    return Object.keys(formData).length ? (
        <Fragment>
            <div className="mb-5 md:mb-0 md:flex flex-no-wrap md:flex-wrap md:w-1/2 w-full block">
                <Card title="Conjure Animals" className="w-full">
                    <ConjureAnimalsForm
                        animal={animal}
                        onChange={handleOnChange}
                        onSetNum={handleOnSetNum}
                        options={formData}
                        value={num}
                        max={calculateMaxAnimals(animals[animal])}
                    />
                </Card>
                <Card title="Animals" className="mt-4 md:mt-5 w-full">
                    <ConjureAnimalsRolling num={num} animalName={animal} />
                </Card>
            </div>
            <div className="md:ml-5 mt-4 md:mt-5 flex md:flex-wrap md:w-1/2 w-full">
                <ConjureAnimalsStats animal={animal} />
            </div>
        </Fragment>
    ) : null;
}
