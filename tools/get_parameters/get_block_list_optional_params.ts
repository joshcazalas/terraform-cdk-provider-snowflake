import { readFileSync } from "fs";
import { cleanTypes } from "./clean_types";
import { isFile } from "./is_file";

interface blockListOptionalParameters {
    name: string;
}

export async function getBlockListOptionalParams(file: string) {

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
    const blockListOptionalSection: string[] = [];

    // Initialize a flag to determine if we are within the section
    let foundOptional = false;

    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.trim() == 'Optional:') {
            foundOptional = true;
            continue;
        }
        if (line.trim() === '##') {
            break;
        }
        if (foundOptional) {
            blockListOptionalSection.push(line.trim());
        }
    }

    if (blockListOptionalSection.length == 0) {
        return 'There is no Optional Section in this File'
    }

    // Initialize an array to hold the optional parameters
    const optionalParams: blockListOptionalParameters[] = [];

    for (const line of blockListOptionalSection) {
        if (line != '') {
            const backtickRegex = /`([^`]*)`/g;
            const backtickMatches = line.match(backtickRegex);
            if (backtickMatches) {
                let contentWithinBackticks = '';
                contentWithinBackticks = backtickMatches[0].slice(1, -1); // Remove backticks

                // Use a non-global regular expression to match and capture only the first set of parentheses
                const parenthesesRegex = /\(([^)]*)\)/;
                const parenthesesMatch = line.match(parenthesesRegex);

                if (parenthesesMatch) {
                    const contentWithinParentheses = parenthesesMatch[1]; // Extract content within the first parentheses
                    if (contentWithinParentheses) {
                        optionalParams.push({
                            name: `readonly ${contentWithinBackticks}?: ${cleanTypes(contentWithinParentheses)};`,
                        });
                    }
                }
            }
        }
    }
    return optionalParams;
}
