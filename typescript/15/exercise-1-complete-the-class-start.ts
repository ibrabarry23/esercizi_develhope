/**
 * START: Follow the instructions below.
 */

class Currency {
    // Add types for these fields and make them private.
    // Hint: Look at the type of values being passed when `new Currency()`
    // is called below.

    private _name:string;
    private _code:string;
    private _symbol:string;

    // Add types to the constructor parameters.

    constructor(name, code, symbol) {
        this._name = name;
        this._code = code;
        this._symbol= symbol;


        // Store the `code` and `symbol` parameter values in
        // their corresponding class fields.


    }

    // Methods are public by default.
    // Add a visibility modifier to make it clear this method is public.
    //
    // Add a return type for this method
    // Hint: Look at the inferred return type.

    describe() : void{
        // Replace the `null` values below with the appropriate field values.
        // Hint: Access field values with: this.fieldName

        let description = `The ${null} currency `;
        description += `has the code ${null} `;
        description += `and uses the symbol ${null}.`;

        console.log(description);
    }
}

// ----

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira);

// Call the `describe()` method on the `currencyNaira` object.



// ----

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

// Call the `describe()` method on the `currencyUsDollar` object.



// ----

export {};
