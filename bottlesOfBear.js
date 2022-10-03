module.exports = class Bottles{
    song(){
        return this.verses(99,0);
    }

    verses(upper, lower){
        return this.downTo(upper, lower)
            .map(i => this.verse(i))
            .join('\n');
    }

    downTo(upper,lower){
        const numbers = [];
        for (let n = upper; n >= lower; n--) {
            numbers.push(n);
        }
        return numbers;
    }

    verse(number){
        switch (number) {
            case 0:
                return(
                    'No more bottles of beer on the wall, '+
                    'no more bottles of beer.\n'+
                    'Go to the store and buy some more, '+
                    '99 bottles of beer on the wall.\n'
                );
            case 1:
                return(
                    '1 more bottle of beer on the wall, '+
                    '1 more bottle of beer.\n'+
                    'Take it down and pass it around, '+
                    'no more bottles of bear on the wall.\n'
                );
            case 2:
                return(
                    '2 bottles of beer on the wall, '+
                    '2 bottles of beer.\n'+
                    'Take one down and pass it around, '+
                    '1 more bottle of beer on the wall.\n'
                );
                        
            default:
                return(
                    `${number} bottles of beer on the wall, `+
                    `${number} bottles of beer.\n`+
                    `Take one down and pass it around, `+
                    `${number -1} bottles of beer on the wall.\n`
                );
        }
    }
}
