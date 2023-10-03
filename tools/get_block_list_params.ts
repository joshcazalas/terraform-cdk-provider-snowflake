// import { getOptionalParams } from "./get_optional_params";
import { readFileSync } from "fs";
import { getBlockListRequiredParams } from "./get_block_list_required_params";
import { getBlockListOptionalParams } from "./get_block_list_optional_params";

export async function getBlockListParams(file: string) {

    const regexPattern = new RegExp(`(### Nested Schema for \`[\\s\\S]*?)## Import`);
    const matches = file.match(regexPattern);

    if (matches && matches[1]) {
        const capturedText = matches[1].trim(); // Trim any leading/trailing whitespace
        const nestedRegexPattern = /### Nested Schema for `([^]+?)(?=(### Nested Schema for `|$))/gs;
        // console.log(capturedText) // working perfectly up to here. capturing all nested schemas

        //const nestedMatches = [];
        let nestedMatch;
        while ((nestedMatch = nestedRegexPattern.exec(capturedText)) !== null) {
            //console.log('**************SECTION**************' + nestedMatch[1])
            if (nestedMatch[1]) {
               await getBlockListRequiredParams(nestedMatch[1])
               await getBlockListOptionalParams(nestedMatch[1])
            }
            //nestedMatches.push(nestedMatch[1]);
        }

        //console.log(nestedMatches)
        // for (const section of nestedMatches) {
        //     console.log('**************SECTION************** ' + section)
        //     // Invoke your functions to process required and optional variables
        //     // getBlockListRequiredParams(section);
        //     // getBlockListOptionalParams(section);
        // }
    } else {
        console.log("Pattern not found");
    }
}

getBlockListParams(readFileSync('../terraform-provider-snowflake/docs/resources/table.md', 'utf8'))