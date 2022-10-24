/*
classer ska vara solida vileket står för
    * Single pupouse
    * Open-close (att de ska var öppna för att expandera sina syften men att man inte ska behöva ändra så mycket av den existerande koden)
    * Liskov substitution (att de ska kunna göra allt som deras föräldrar kann)
    * Interface segregation (att de inte ska vara beroende av metoder de inte använder)
    * Dependency inversion (att de ska bero på abstrakta saker)
    
namn på funktioner ska vara en abstraktion av funktionens potentiella output 
tänk att alla outputs som kan komma ska kuna läggas under en kolumn i ett schema 

med flocking menas att komplexa beteenden ska komma från änkla regler

Bland de versta typerna av error är state mutation errors så undvik att mutera objekt states.
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

    verse(verse_number){
        const bottleNumber = new BottleNumber(verse_number);
        const nextBottlesNumber = new BottleNumber(bottleNumber.successor())

        return(
            `${this.capitalize(bottleNumber.quantity().toString())} ${bottleNumber.container()} of beer on the wall, `+
            `${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n`+
            `${bottleNumber.action()}, `+
            `${nextBottlesNumber.quantity()} ${nextBottlesNumber.container()} of beer on the wall.\n`
        );
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
}

class BottleNumber {

    constructor(number){
        this.number = number;
    }

    action(){
        if(this.number === 0){
            return 'Go to the store and buy some more';
        }else{
            return `Take ${this.pronoun()} down and pass it around`;
        } 
    }

    successor(){
        if(this.number === 0){
            return 99;
        }else{
            return this.number - 1;
        }
    }

    container(){
        if(this.number === 1){
            return 'bottle';
        }else{
            return 'bottles';
        }
    }

    pronoun(){
        if(this.number === 1){
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
