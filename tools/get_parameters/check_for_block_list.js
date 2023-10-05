"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForBlockList = void 0;
function checkForBlockList(input) {
    if (input.includes('Block List') || input.includes('Block Set') || input.includes('Block')) {
        return 'block list';
    }
    else {
        return input;
    }
}
exports.checkForBlockList = checkForBlockList;
