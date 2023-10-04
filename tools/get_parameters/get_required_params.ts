import { cleanTypes } from "./clean_types";

export interface requiredParameters {
    name: string
    type: string
    required: boolean
}

export async function getRequiredParams(file: string) {

    const requiredParams: requiredParameters[] = [];

    // Initialize an array to hold lines between "### Required" and "### Optional"
    const linesBetweenSections = [];

    // Split the inputString by lines
    const lines = file.split('\n');

    // Initialize a flag to determine if we are within the section
    let withinSection = false;

    // Iterate through the lines and capture lines within the section
    for (const line of lines) {
        if (line.trim() === '### Required') {
            withinSection = true;
        } else if (line.trim() === '### Optional') {
            withinSection = false;
        } else if (withinSection) {
            linesBetweenSections.push(line);
        }
    }

    for (const line of linesBetweenSections) {
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
                    let parenthesisMatch = parenthesesMatches[0]
                    contentWithinParentheses = parenthesisMatch.slice(1, -1); // Remove parentheses
                    requiredParams.push({
                        name: contentWithinBackticks,
                        type: cleanTypes(contentWithinParentheses),
                        required: true
                    })
                }
            }
        }
    }
    if (requiredParams.length === 0) {
        return 'Unable to find Required Parameters';
    }
    return requiredParams;
}
