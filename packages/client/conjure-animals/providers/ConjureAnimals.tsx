import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {AnimalStats} from '../components/stats/stats';
import slugify from '../libs/slugify';

export const ConjureAnimalsContext = createContext<Context>({
    animals: {},
    getAnimalData: (_: string) => undefined,
    formData: [],
});

type Props = {
    children: ReactNode;
};

type Context = {
    animals: {[key: string]: AnimalStats};
    getAnimalData: (animalName: string) => AnimalStats | undefined;
    formData: Array<{label: string; value: string}>;
};

export function ConjureAnimalsProvider({children}: Props) {
    const [animals, setAnimals] = useState<{[key: string]: AnimalStats}>({});
    const [formData, setFormData] = useState<Array<{label: string; value: string}>>([]);

    async function initAnimalData() {
        const data: {default: {[key: string]: AnimalStats}} = await import('../data/animals.json');
        if (data.default) {
            const formData = Object.keys(data.default).map((key) => ({
                label: data.default[key].name,
                value: slugify(key),
            }));

            setAnimals(data.default);
            setFormData(formData);
        }
    }

    function getAnimalData(animalName: string) {
        return animals.hasOwnProperty(animalName) ? animals[animalName] : undefined;
    }

    useEffect(() => {
        initAnimalData();
    }, []);

    return (
        <ConjureAnimalsContext.Provider value={{animals, getAnimalData, formData}}>
            {children}
        </ConjureAnimalsContext.Provider>
    );
}
