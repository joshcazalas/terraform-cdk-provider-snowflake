"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockListResourceName = void 0;
async function getBlockListResourceName(input) {
    // Define a regular expression to match the resource name
    const resourceNameRegex = /^([^\n`]+)`/;
    // Use the regular expression to find the resource name
    const matches = input.match(resourceNameRegex);
    // Extract the resource name
    const resourceName = matches ? matches[1] : null;
    return resourceName;
}
exports.getBlockListResourceName = getBlockListResourceName;
