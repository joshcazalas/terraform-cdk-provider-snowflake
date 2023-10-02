import { readFileSync } from "fs";

interface optionalParameters {
    name: string;
    type: string;
    required: boolean;
}

function checkForBlockList(input: string) {
    if (input.includes('Block List')) {
        return 'block list'
    }
    else {
        return input
    }
}

function cleanTypes(input: string) {
    let checked_input = checkForBlockList(input)
    switch (checked_input.toLowerCase()) {
    case 'map of string':
        return 'Record<string, string>';
    case 'set of string':
        return 'string[]';
    case 'block list':
        return 'BLOCK LIST PLACEHOLDER'
    // Add more cases for other possible values to replace
    default:
        return input.toLowerCase();
    }
}

function getOptionalParams(file: string) {
    const inputString = readFileSync(`${file}`, 'utf8');

    // Initialize an array to hold lines between "### Optional" and "### Read-Only"
    const linesBetweenSections = [];

    // Split the inputString by lines
    const lines = inputString.split('\n');

    // Initialize a flag to determine if we are within the section
    let withinSection = false;

    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.trim() === '### Optional') {
            withinSection = true;
        } else if (line.trim() === '### Read-Only') {
            withinSection = false;
        } else if (withinSection) {
            linesBetweenSections.push(line);
        }
    }

    // Initialize an array to hold the optional parameters
    const optionalParams: optionalParameters[] = [];

    for (const line of linesBetweenSections) {
        if (line != '') {
            const backtickRegex = /`([^`]*)`/g;
            const backtickMatches = line.match(backtickRegex);
            if (backtickMatches) {
                let contentWithinBackticks = '';
                backtickMatches.forEach(match => {
                    contentWithinBackticks = match.slice(1, -1); // Remove backticks
                });

                // Use a non-global regular expression to match and capture only the first set of parentheses
                const parenthesesRegex = /\(([^)]*)\)/;
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

    console.log(optionalParams);
    //return optionalParams;
}

getOptionalParams('../terraform-provider-snowflake/docs/resources/database.md');