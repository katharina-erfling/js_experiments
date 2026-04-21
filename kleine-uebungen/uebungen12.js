/* ----------------- */
/*    Rekursion      */
/* ----------------- */

'use strict'

// Übung 5 - Summe einer Zahlenreihe rekursiv berechnen

console.log('Übung 5 - Summe einer Zahlenreihe rekursiv berechnen');

const sumRecursive = (n) => {
    if (n === 0) {
        return 0;
    }
    return n + sumRecursive(n - 1);
}

// Test Cases
console.log(sumRecursive(5)); // => 15 (5 + 4 + 3 + 2 + 1)
console.log(sumRecursive(10)); // => 55 (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1)
console.log(sumRecursive(0)); // => 0

console.log('/////////////////////////');





// Übung 6 - Berechnung von Kombinationen mit Rekursion
console.log('Übung 6 - Berechnung von Kombinationen mit Rekursion');

const combinations = (n, k) => {
    if (k === 0) return 1;
    if (k === n) return 1;
    if (k > n) return 0;

    return combinations(n-1, k-1) + combinations(n-1, k);
}

// Test Cases
console.log(combinations(5, 2)); // => 10
console.log(combinations(6, 3)); // => 20
console.log(combinations(4, 0)); // => 1
console.log(combinations(4, 4)); // => 1
console.log(combinations(5, 6)); // => 0

console.log('/////////////////////////');




/// Fibonacci
const fibonacciMemo = (n, memo = {}) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
};

// Test Cases
console.log(fibonacciMemo(50)); // => 12586269025

console.log('/////////////////////////');





// Übung 7 - Rekursive Umkehrung eines Strings
console.log('Übung 7 - Rekursive Umkehrung eines Strings');


const reverseString = (string) => {
    if (string.length === 0) return '';
    return reverseString(string.slice(1)) + string[0];
};


console.log(reverseString('hello'));     // => "olleh"
console.log(reverseString('Recursion')); // => "noisruceR"
console.log(reverseString(''));          // => ""
console.log(reverseString('A'));         // => "A"

console.log('/////////////////////////');





// Übung 8 - Rekursive Suche des Maximums in einem Array
console.log('Rekursive Suche des Maximums in einem Array');


const findMax = (arr) => {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], findMax(arr.slice(1)));

};

// Test cases
console.log(findMax([1, 5, 3, 9, 2])); // => 9
console.log(findMax([-10, -20, -3, -4])); // => -3
console.log(findMax([42])); // => 42
console.log(findMax([])); // => null
console.log('/////////////////////////');




// Übung 9: Tiefste Ebene eines verschachtelten Arrays finden
console.log('Übung 9: Tiefste Ebene eines verschachtelten Arrays finden');



const findDeepestLevel = (arr, currentLevel = 1) => {
    let maxLevel = currentLevel;
    arr.forEach(element => {
        if (Array.isArray(element)) {
            const depth = findDeepestLevel(element, currentLevel + 1);
            maxLevel = Math.max(maxLevel, depth);
        };
    })

    return maxLevel;
}

// Test cases
console.log(findDeepestLevel([1, [2, [3, [4]], 5]])); // => 4
console.log(findDeepestLevel([1, 2, 3, 4, 5])); // => 1
console.log(findDeepestLevel([])); // => 1
console.log(findDeepestLevel([1, [2], [3, [4, [5]]]])); // => 4
console.log(findDeepestLevel([1, [2, [3]], [4, [5, [6]]]])); // => 4

console.log('/////////////////////////');




// Übung 10: Summe aller Zahlen in einem verschachtelten Array
console.log('Übung 10: Summe aller Zahlen in einem verschachtelten Array');


const sumNestedArray = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        if (typeof element === 'number') {
            sum += element;
        } else if (Array.isArray(element)) {
            sum += sumNestedArray(element);
        }
    });
    return sum;
}

console.log('/////////////////////////');