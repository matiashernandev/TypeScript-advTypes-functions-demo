const prices: (number | string)[] = [1, 'dfasfsad', 2, 3, 4, 5];
prices.push('fdsafadfdasf');
prices.push(2);

console.log(prices);

/* -------------------------------------------------------------------------- */

let user: [string, number, boolean?] = ['sasfd', 444];

/* user = [3434, 4343]; */
user = ['3434', 4343];

/* -------------------------------------------------------------------------- */

let user2: [string, number] = ['text', 5];

user2.push('sarasa');

console.log(user2);

console.log(user2[2]); //! Tuple type '[string, number]' of length '2' has no element at index '3'.
