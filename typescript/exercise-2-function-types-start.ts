/**
 * START: Follow the instructions below.
 */

// Add types to this function declaration.

function doubleThePopulation(value:number):number {
    return value * 2;
}

// Correct or remove the function calls which cause type errors.

doubleThePopulation(5);

doubleThePopulation(6.12);

doubleThePopulation(8.12);

doubleThePopulation(10.12);

// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.

function languagesSpoken(country: string, language1: string, language2: string): void {
    console.log(`The languages spoken in ${country} are:`);

    console.log(language1);

    console.log(typeof language2 !== undefined);
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek" , "Antetokounmpo");

languagesSpoken("New Zealand", "English", "Māori");

// ----

export {};
