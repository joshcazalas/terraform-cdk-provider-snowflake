"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function getRequiredParams(file) {
    const inputString = (0, fs_1.readFileSync)(`${file}`, 'utf8');
    // Initialize an array to hold lines between "### Required" and "### Optional"
    const linesBetweenSections = [];
    // Split the inputString by lines
    const lines = inputString.split('\n');
    // Initialize a flag to determine if we are within the section
    let withinSection = false;
    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.trim() === '### Required') {
            withinSection = true;
        }
        else if (line.trim() === '### Optional') {
            withinSection = false;
        }
        else if (withinSection) {
            linesBetweenSections.push(line);
        }
    }
    // Join the captured lines to get the content between "### Required" and "### Optional"
    const contentBetweenSections = linesBetweenSections.join('\n');
    console.log(contentBetweenSections);
    for (const line of linesBetweenSections) {
        if (line != '') {
            const backtickRegex = /`([^`]*)`/g;
            const backtickMatches = line.match(backtickRegex);
            if (backtickMatches) {
                // Extract content within backticks and push it to the array
                let contentWithinBackticks = '';
                backtickMatches.forEach(match => {
                    contentWithinBackticks = match.slice(1, -1); // Remove backticks
                    linesBetweenSections.push(contentWithinBackticks);
                });
                console.log(contentWithinBackticks);
            }
            const parenthesesRegex = /\(([^)]*)\)/g;
            const parenthesesMatches = line.match(parenthesesRegex);
            if (parenthesesMatches) {
                // Extract content within parentheses and push it to the array
                let contentWithinParentheses = '';
                parenthesesMatches.forEach(match => {
                    contentWithinParentheses = match.slice(1, -1); // Remove parentheses
                    linesBetweenSections.push(contentWithinParentheses.toLowerCase());
                });
                console.log(contentWithinParentheses.toLowerCase());
            }
        }
    }
}
getRequiredParams('../terraform-provider-snowflake/docs/resources/schema.md');
