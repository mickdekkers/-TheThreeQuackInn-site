/* eslint-disable */
const fs = require('fs');
const data = require('./bestiary-mm.json');

const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
const p = new RegExp(a.split('').join('|'), 'g');

function slugify(input) {
    return input
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word characters
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}

const animalData = data.reduce((prev, current) => {
    if (current.type !== 'beast' || !current.cr || parseInt(current.cr.toString(), 10) > 2) return prev;

    const name = slugify(current.name);

    return {
        ...prev,
        [name]: {
            name: current.name,
            size: current.size,
            ac: {
                ac: typeof current.ac[0] === 'number' ? current.ac[0] : current.ac[0].ac,
                from: (current.ac[0].from && current.ac[0].from[0]) || '',
            },
            hp: current.hp,
            speed: current.speed,
            str: current.str,
            dex: current.dex,
            con: current.con,
            int: current.int,
            cha: current.cha,
            wis: current.wis,
            skill: current.skill,
            senses: current.senses,
            languages: current.languages,
            cr: current.cr,
            trait: current.trait,
            action: current.action,
            passive: current.passive,
            alignment: current.alignment,
            type: current.type,
        },
    };
}, {});

fs.writeFile('./src/data/animals.json', JSON.stringify(animalData, null, 4), 'utf-8', (err) => {
    if (err) throw new Error(err);
});
