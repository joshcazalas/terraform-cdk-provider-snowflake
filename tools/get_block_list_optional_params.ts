import { readFileSync } from "fs";
import { cleanTypes } from "./clean_types";
import { isFile } from "./is_file";

interface blockListOptionalParameters {
    name: string;
    type: string;
    required: boolean;
}

export function getBlockListOptionalParams(file: string) {

    const isInputAFile: boolean = isFile(file)
    let inputString = ''
    if (isInputAFile) {
        inputString = readFileSync(`${file}`, 'utf8');
    }
    else {
        inputString = file
    }

    // Initialize an array to hold lines between "### Optional" and "### Read-Only"
    const linesBetweenSections = [];

    // Split the inputString by lines
    const lines = inputString.split('\n');

    // Initialize a flag to determine if we are within the section
    let withinSection = false;

    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.trim() === 'Optional:') {
            withinSection = true;
        } else if (line.trim() === '##') {
            withinSection = false;
        } else if (withinSection) {
            linesBetweenSections.push(line);
        }
    }

    // Initialize an array to hold the optional parameters
    const optionalParams: blockListOptionalParameters[] = [];

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
                            type: cleanTypes(contentWithinParentheses, inputString),
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

getBlockListOptionalParams('../terraform-provider-snowflake/docs/resources/database.md');