"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanTypes = void 0;
const check_for_block_list_1 = require("./check_for_block_list");
function cleanTypes(input) {
    let checkedInput = (0, check_for_block_list_1.checkForBlockList)(input);
    if (checkedInput.includes(', deprecated')) {
        checkedInput = checkedInput.replace(', deprecated', '');
    }
    switch (checkedInput.toLowerCase()) {
        case 'map of string':
            return 'Record<string, string>';
        case 'set of string':
            return 'Set<string>';
        case 'list of string':
            return 'string[]';
        case 'set of number':
            return 'Set<number>';
        case 'block list':
            return 'block list placeholder';
        // Add more cases for other possible values to replace
        default:
            return input.toLowerCase();
    }
}
exports.cleanTypes = cleanTypes;
