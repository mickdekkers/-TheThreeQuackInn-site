import {useContext} from 'react';
import {ConjureAnimalsContext} from '../providers/ConjureAnimals';

export default function useConjureAnimals() {
    return useContext(ConjureAnimalsContext);
}
