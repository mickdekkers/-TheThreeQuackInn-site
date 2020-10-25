export type AnimalStats = {
    name: string;
    size: string;
    alignment: Array<string>;
    languages?: Array<string>;
    ac: {ac: number; from: string};
    hp: {average: number; formula: string};
    speed: {[key: string]: number};
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    skill?: {[key: string]: string};
    passive: number;
    languages?: Array<string>;
    cr: string;
    type: string;
    trait?: Array<{
        name: string;
        entries: Array<string>;
    }>;
    action?: Array<{
        name: string;
        entries: Array<string>;
    }>;
};
