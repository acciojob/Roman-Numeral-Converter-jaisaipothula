function convertToRoman(num) {
    // Define the symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let romanNumeral = '';

    // Iterate through the symbols and their values
    for (let [symbol, value] of romanSymbols) {
        // While the number is greater than or equal to the value
        while (num >= value) {
            romanNumeral += symbol; // Append the symbol to the result
            num -= value; // Subtract the value from the number
        }
    }

    return romanNumeral; // Return the resulting Roman numeral
}

// Example usage:
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
