import { cleanTypes } from "./clean_types";

export interface optionalParameters {
    name: string;
    type: string;
    required: boolean;
}

export async function getOptionalParams(file: string) {
    
    // Initialize an array to hold the optional parameters
    const optionalParams: optionalParameters[] = [];

    // Initialize an array to hold lines between "### Optional" and "### Read-Only"
    const optionalSection: string[] = [];

    // Split the inputString by lines
    const lines = file.split('\n');

    // Initialize a flag to determine if we are within the section
    let foundOptional = false;

    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.includes('### Optional')) {
            foundOptional = true;
            continue;
        }
        if (line.includes('### Read-Only')) {
            break;
        }
        if (foundOptional) {
            optionalSection.push(line.trim());
        }
    }

    optionalSection.shift();

    if (optionalSection.length == 0) {
        return 'There is no Optional Section in this File'
    }

    for (const line of optionalSection) {
        if (line != '') {
            const backtickRegex = /`([^`]*)`/g;
            const backtickMatches = line.match(backtickRegex);
            if (backtickMatches) {
                let contentWithinBackticks = '';
                contentWithinBackticks = backtickMatches[0].slice(1, -1); // Remove backticks

                // Use a non-global regular expression to match and capture only the first set of parentheses
                const parenthesesRegex = /\(([^,)]*)/;
                const parenthesesMatch = line.match(parenthesesRegex);

                if (parenthesesMatch) {
                    const contentWithinParentheses = parenthesesMatch[1]; // Extract content within the first parentheses
                    if (contentWithinParentheses) {
                        optionalParams.push({
                            name: contentWithinBackticks,
                            type: cleanTypes(contentWithinParentheses),
                            required: false,
                        });
                    }
                }
            }
        }
    }
    if (optionalParams.length === 0) {
        return 'Unable to find Optional Parameters';
    }
    return optionalParams;
}
