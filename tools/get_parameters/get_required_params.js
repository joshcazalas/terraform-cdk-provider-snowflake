"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequiredParams = void 0;
const clean_types_1 = require("./clean_types");
async function getRequiredParams(file) {
    const requiredParams = [];
    // Initialize an array to hold lines between "### Required" and "### Optional"
    const requiredSection = [];
    // Split the inputString by lines
    const lines = file.split('\n');
    // Initialize a flag to determine if we are within the section
    let foundRequired = false;
    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.includes('### Required')) {
            foundRequired = true;
            continue;
        }
        if (foundRequired) {
            if (line.includes('### Optional') || line.includes('### Read-Only')) {
                break;
            }
            requiredSection.push(line.trim());
        }
    }
    // Exclude the '### Required' line itself
    requiredSection.shift();
    if (requiredSection.length == 0) {
        return 'There is no Required Section in this File';
    }
    for (const line of requiredSection) {
        if (line != '') {
            const backtickRegex = /`([^`]*)`/g;
            const backtickMatches = line.match(backtickRegex);
            if (backtickMatches) {
                // Extract content within backticks and push it to the array
                let contentWithinBackticks = '';
                contentWithinBackticks = backtickMatches[0].slice(1, -1); // Remove backticks
                const parenthesesRegex = /\(([^)]*)\)/g;
                const parenthesesMatches = line.match(parenthesesRegex);
                if (parenthesesMatches) {
                    // Extract content within parentheses and push it to the array
                    let contentWithinParentheses = '';
                    const parenthesisMatch = parenthesesMatches[0];
                    contentWithinParentheses = parenthesisMatch.slice(1, -1); // Remove parentheses
                    const contentWithCommasRemoved = contentWithinParentheses.split(',')[0]; // Remove , and anything to the right if exists. Handles grabbing the type when documentation is (String, Sensitive)
                    if (contentWithCommasRemoved) {
                        requiredParams.push({
                            name: contentWithinBackticks,
                            type: (0, clean_types_1.cleanTypes)(contentWithCommasRemoved),
                            required: true
                        });
                    }
                }
            }
        }
    }
    if (requiredParams.length === 0) {
        return 'Unable to find Required Parameters';
    }
    return requiredParams;
}
exports.getRequiredParams = getRequiredParams;
