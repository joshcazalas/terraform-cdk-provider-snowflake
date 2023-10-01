"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const inputString = (0, fs_1.readFileSync)('../terraform-provider-snowflake/docs/resources/schema.md', 'utf8');
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
