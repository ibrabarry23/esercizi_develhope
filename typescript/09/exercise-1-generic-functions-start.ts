/**
 * START: Follow the instructions below.
 */

// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the `value` function parameter should use a type variable.

function identity<Type>(value: Type) {
    return value;
}

let value1 = identity<string>("France");

let value2 = identity<number>(67_413_000);

// ----

// Simulate fetching data with hardcoded data.
async function fetchData<Type>(url: string) {
    // You can replace this with hardcoded data or any other source.
    const hardcodedData = {
        name: "John Doe",
    };

    return hardcodedData as Type;
}

interface User {
    name: string;
}

// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 35.

let user = await fetchData<User>("http://api.com/user/1");

console.log(user.name);

// ----

export {};
