export default function parseReferences(text: string) {
    const regex = new RegExp(/{(.*?)}/, '');
    // const matches = regex.exec(text);

    let match;
    while ((match = regex.exec(text)) != null) {
        text = text.replace(match[0], transformReference(match[0]));
    }

    return text;
}

function transformReference(reference: string) {
    const text = reference
        .replace(/@(.*?)[\s]/, '')
        .replace('{', '')
        .replace('}', '');

    if (reference.includes('dc')) {
        return 'DC ' + text;
    } else if (reference.includes('atk')) {
        if (reference.includes('mw')) {
            return 'Melee Weapon attack';
        } else if (reference.includes('rw')) {
            return 'Ranged Weapon attack';
        }
    } else if (reference.includes('hit')) {
        return '+' + text;
    } else if (reference.includes('{@h}') || reference.includes('@h')) {
        return 'Hit: ' + text.replace('{@h}', '').replace('@h', '');
    } else if (reference.includes('hit')) {
    }

    return text;
}
