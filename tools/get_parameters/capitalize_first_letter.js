"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = void 0;
function capitalizeFirstLetter(inputString) {
    // Check if the input string is empty or null
    if (!inputString) {
        return inputString;
    }
    let result = "";
    let capitalizeNextChar = true;
    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString.charAt(i);
        if (currentChar === "_") {
            // If the current character is an underscore, set the flag to capitalize the next character
            capitalizeNextChar = true;
            result += currentChar;
        }
        else if (capitalizeNextChar) {
            // If the flag is set to capitalize, capitalize the current character
            result += currentChar.toUpperCase();
            capitalizeNextChar = false;
        }
        else {
            // Otherwise, keep the character as-is
            result += currentChar;
        }
    }
    return result;
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
