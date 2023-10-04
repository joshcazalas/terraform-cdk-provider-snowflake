import { readFileSync } from "fs";
import { isFile } from "./is_file";
import { cleanTypes } from "./clean_types";

export interface blockListRequiredParameters {
    name: string
}

export async function getBlockListRequiredParams(file: string) {

    const isInputAFile: boolean = isFile(file)
    let inputString = ''
    if (isInputAFile) {
        inputString = readFileSync(`${file}`, 'utf8');
    }
    else {
        inputString = file
    }
    //console.log(inputString)
    

    // Initialize an array to hold lines between "### Required" and "### Optional"
    const linesBetweenSections = [];

    // Split the inputString by lines
    const lines = inputString.split('\n');

    // Initialize a flag to determine if we are within the section
    let withinSection = false;

    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.trim() === 'Required:') {
            withinSection = true;
        } else if (line.trim() === 'Optional:') {
            withinSection = false;
        } else if (withinSection) {
            linesBetweenSections.push(line);
        }
    }

    const requiredParams: blockListRequiredParameters[] = [];

    for (const line of linesBetweenSections) {
        if (line != '') {
            const backtickRegex = /`([^`]*)`/g;
            const backtickMatches = line.match(backtickRegex);
            if (backtickMatches) {
                // Extract content within backticks and push it to the array
                let contentWithinBackticks = ''
                backtickMatches.forEach(match => {
                    contentWithinBackticks = match.slice(1, -1); // Remove backticks
                });
                const parenthesesRegex = /\(([^)]*)\)/g;
                const parenthesesMatches = line.match(parenthesesRegex);
                if (parenthesesMatches) {
                    // Extract content within parentheses and push it to the array
                    let contentWithinParentheses = ''
                    parenthesesMatches.forEach(match => {
                        contentWithinParentheses = match.slice(1, -1); // Remove parentheses
                    });
                    requiredParams.push({
                        name: `readonly ${contentWithinBackticks}: ${cleanTypes(contentWithinParentheses)};`
                    })
                }
            }
        }
    }
    return requiredParams
}

getBlockListRequiredParams('../terraform-provider-snowflake/docs/resources/database.md')