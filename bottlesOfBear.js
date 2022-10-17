/*
classer ska vara solida vileket står för
    * Single pupouse
    * Open-close (att de ska var öppna för att expandera sina syften men att man inte ska behöva ändra så mycket av den existerande koden)
    * Liskov substitution (att de ska kunna göra allt som deras föräldrar kann)
    * Interface segregation (att de inte ska vara beroende av metoder de inte använder)
    * Dependency inversion (att de ska bero på abstrakta saker)
*/


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

    quantity(number){
        if(number === 0){
            return 'no more';
        }else{
            return number;
        }
    }

    verse(number){
        switch (number) {
            case 0:
                return(
                    `No more ${this.container(number)} of beer on the wall, `+
                    `no more ${this.container(number)} of beer.\n`+
                    'Go to the store and buy some more, '+
                    `${number + 99} ${this.container(number + 99)} of beer on the wall.\n`
                );
            default:
                return(
                    `${number} ${this.container(number)} of beer on the wall, `+
                    `${number} ${this.container(number)} of beer.\n`+
                    `Take ${this.pronoun(number)} down and pass it around, `+
                    `${this.quantity(number-1)} ${this.container(number -1)} of beer on the wall.\n`
                );
        }
    }
}
