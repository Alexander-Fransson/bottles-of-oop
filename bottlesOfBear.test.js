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

    test('the forth last verse', () => {
        const expected = 
        `3 bottles of beer on the wall, `+
        `3 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `2 bottles of beer on the wall.\n`;
        expect(new Bottles().verse(3)).toBe(expected);
    });

    test('the third last verse', () => {
        const expected = 
        `2 bottles of beer on the wall, `+
        `2 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `1 more bottle of beer on the wall.\n`;
        expect(new Bottles().verse(2)).toBe(expected);
    });

    test('the second last verse', () => {
        const expected =
        '1 more bottle of beer on the wall, '+
        '1 more bottle of beer.\n'+
        'Take it down and pass it around, '+
        'no more bottles of bear on the wall.\n';
        expect(new Bottles().verse(1)).toBe(expected);
    });

    test('the final verse', () => {
        const expected = 
        'No more bottles of beer on the wall, '+
        'no more bottles of beer.\n'+
        'Go to the store and buy some more, '+
        '99 bottles of beer on the wall.\n'
        expect(new Bottles().verse(0)).toBe(expected);
    });

    test('verses method for the two first verses', () => {
        const expected =
        `99 bottles of beer on the wall, `+
        `99 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `98 bottles of beer on the wall.\n`+
        '\n'+
        `98 bottles of beer on the wall, `+
        `98 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `97 bottles of beer on the wall.\n`;
        expect(new Bottles().verses(99,98)).toBe(expected);
    });

    test('verses method for the three last verses', () => {
        const expected =
        `2 bottles of beer on the wall, `+
        `2 bottles of beer.\n`+
        `Take one down and pass it around, `+
        `1 more bottle of beer on the wall.\n`+
        '\n'+
        '1 more bottle of beer on the wall, '+
        '1 more bottle of beer.\n'+
        'Take it down and pass it around, '+
        'no more bottles of bear on the wall.\n'+
        '\n'+
        'No more bottles of beer on the wall, '+
        'no more bottles of beer.\n'+
        'Go to the store and buy some more, '+
        '99 bottles of beer on the wall.\n';
        expect(new Bottles().verses(2,0)).toBe(expected);
    })
});