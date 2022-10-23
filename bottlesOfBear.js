/*
classer ska vara solida vileket står för
    * Single pupouse
    * Open-close (att de ska var öppna för att expandera sina syften men att man inte ska behöva ändra så mycket av den existerande koden)
    * Liskov substitution (att de ska kunna göra allt som deras föräldrar kann)
    * Interface segregation (att de inte ska vara beroende av metoder de inte använder)
    * Dependency inversion (att de ska bero på abstrakta saker)
*/

const { number } = require("yargs");


/*
namn på funktioner ska vara en abstraktion av funktionens potentiella output 
tänk att alla outputs som kan komma ska kuna läggas under en kolumn i ett schema 
*/

/*
med flocking menas att komplexa beteenden ska komma från änkla regler
*/

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

    capitalize(string){
        const [hd, ...tl] = string;
        const firstLetter = hd.toUpperCase();
        return [firstLetter, ...tl].join('');
    }

    action(number){
        return new BottleNumber(number).action(number);
    }

    successor(number){
        return new BottleNumber(number).successor(number);
    }

    container(number){
        return new BottleNumber(number).container(number);
    }

    pronoun(number){
        return new BottleNumber(number).pronoun(number);
    }

    quantity(number){
        return new BottleNumber(number).quantity();
    }

    verse(verse_number){
        return(
            `${this.capitalize(this.quantity(verse_number).toString())} ${this.container(verse_number)} of beer on the wall, `+
            `${this.quantity(verse_number)} ${this.container(verse_number)} of beer.\n`+
            `${this.action(verse_number)}, `+
            `${this.quantity(this.successor(verse_number))} ${this.container(this.successor(verse_number))} of beer on the wall.\n`
        );
    }
}

class BottleNumber {

    constructor(number){
        this.number = number;
    }

    action(number){
        if(number === 0){
            return 'Go to the store and buy some more';
        }else{
            return `Take ${this.pronoun(number)} down and pass it around`;
        } 
    }

    successor(number){
        if(number === 0){
            return 99;
        }else{
            return number - 1;
        }
    }

    container(number){
        if(number === 1){
            return 'bottle';
        }else{
            return 'bottles';
        }
    }

    pronoun(number){
        if(number === 1){
            return 'it';
        }else{
            return 'one';
        }
    }

    quantity(){
        if(this.number === 0){
            return 'no more';
        }else{
            return this.number.toString();
        }
    }
} 
