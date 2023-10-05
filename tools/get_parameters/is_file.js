"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFile = void 0;
function isFile(input) {
    const filePathRegex = /^([/]|\.\/|\.\.\/)[\w\/.-]+\.[\w]+$/;
    if (filePathRegex.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isFile = isFile;
