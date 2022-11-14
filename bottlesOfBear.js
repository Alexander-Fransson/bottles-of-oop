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

en dataklump är när flera funktioner alltid används tillsammans

Om en klass har en to string metod är det den som aktiveras om klassen används som string i javascript. //Skumt

a factory is a method whose role it is to return the right role playing object

att skapa klasser för tillfellen kan vara bra för att få en överblick av vad som händer i ett tillfälle
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
        const bottleNumber = this.bottleNumberFor(verse_number); 
        const nextBottlesNumber = this.bottleNumberFor(bottleNumber.successor());

        return(
            `${this.capitalize(`${bottleNumber}`)} of beer on the wall, `+
            `${bottleNumber} of beer.\n`+
            `${bottleNumber.action()}, `+
            `${nextBottlesNumber} of beer on the wall.\n`
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

    bottleNumberFor(verse_number){
        let bottleNumberClass;

        switch (verse_number) {
            case 0:
                bottleNumberClass = BottleNumber0;
                break;
            case 1:
                bottleNumberClass = BottleNumber1;
                break;
            default:
                bottleNumberClass = BottleNumber;
                break;
        }

        return new bottleNumberClass(verse_number);
    }
}

class BottleNumber {

    constructor(number){
        this.number = number;
    }

    toString(){
        return `${this.quantity()} ${this.container()}`;
    }

    action(){ 
        return `Take ${this.pronoun()} down and pass it around`;
    }

    successor(){
        return this.number - 1;
    }

    container(){
        return 'bottles';
    }

    pronoun(){
        return 'one';
    }

    quantity(){
        return this.number.toString();
    }
} 

class BottleNumber0 extends BottleNumber{

    quantity(){
        return 'no more';
    }

    action(){
        return 'Go to the store and buy some more';
    }

    successor() {
        return 99;
    }
}

class BottleNumber1 extends BottleNumber{
    
    container(){
        return 'bottle';
    }

    pronoun(){
        return 'it';
    }
}
