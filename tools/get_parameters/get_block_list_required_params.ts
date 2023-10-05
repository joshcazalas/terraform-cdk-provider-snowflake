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

    // Split the inputString by lines
    const lines = inputString.split('\n');

    // Initialize an array to hold lines between "### Optional" and "### Read-Only"
    const blockListRequiredSection: string[] = [];

    // Initialize a flag to determine if we are within the section
    let foundRequired = false;

    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.trim() == 'Required:') {
            foundRequired = true;
            continue;
        }
        if (line.trim() == 'Optional:' || line.trim() == '## Import') {
            break;
        }
        if (foundRequired) {
            blockListRequiredSection.push(line.trim());
        }
    }

    if (blockListRequiredSection.length == 0) {
        return 'There is no Optional Section in this File'
    }

    const requiredParams: blockListRequiredParameters[] = [];

    for (const line of blockListRequiredSection) {
        if (line != '') {
            const backtickRegex = /`([^`]*)`/g;
            const backtickMatches = line.match(backtickRegex);
            if (backtickMatches) {
                // Extract content within backticks and push it to the array
                let contentWithinBackticks = ''
                contentWithinBackticks = backtickMatches[0].slice(1, -1); // Remove backticks
                const parenthesesRegex = /\(([^)]*)\)/g;
                const parenthesesMatches = line.match(parenthesesRegex);
                if (parenthesesMatches) {
                    // Extract content within parentheses and push it to the array
                    let contentWithinParentheses = ''
                    const parenthesisMatch = parenthesesMatches[0]
                    contentWithinParentheses = parenthesisMatch.slice(1, -1); // Remove parentheses
                    requiredParams.push({
                        name: `readonly ${contentWithinBackticks}: ${cleanTypes(contentWithinParentheses)};`
                    })
                }
            }
        }
    }
    return requiredParams
}
