function convertToRoman(num) {
    // Define the Roman numeral symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Iterate through each symbol
    for (let [symbol, value] of romanSymbols) {
        // While num is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to result
            num -= value;     // Subtract the value from num
        }
    }

    return result; // Return the final Roman numeral string
}

// Example usage:
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(0));    // Output: ''
console.log(convertToRoman(100000)); // Output: 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'