const Bottles = require('./bottlesOfBear');

describe('Bottles', () => {
    test('the first verse', () => {
        const expected = 
        `99 bottles of beer on the wall, `+
        `99 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `98 bottles of beer on the wall.\n`;
        expect(new Bottles().verse(99)).toBe(expected);
    });

    test('the third last verse', () => {
        const expected = 
        `3 bottles of beer on the wall, `+
        `3 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `2 bottles of beer on the wall.\n`;
        expect(new Bottles().verse(3)).toBe(expected);
    });

    test('the second last verse', () => {
        const expected = 
        `2 bottles of beer on the wall, `+
        `2 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `1 more bottle of beer on the wall.\n`;
        expect(new Bottles().verse(2)).toBe(expected);
    });
});