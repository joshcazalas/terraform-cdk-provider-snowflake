// import { getOptionalParams } from "./get_optional_params";
import { readFileSync } from "fs";
import { getBlockListRequiredParams } from "./get_block_list_required_params";
import { getBlockListOptionalParams } from "./get_block_list_optional_params";
import { getBlockListResourceName } from "./get_block_list_resource_name";

export async function getBlockListParams(file: string) {

    const regexPattern = new RegExp(`(### Nested Schema for \`[\\s\\S]*?)## Import`);
    const matches = file.match(regexPattern);

    if (matches && matches[1]) {
        const capturedText = matches[1].trim(); // Trim any leading/trailing whitespace
        const nestedRegexPattern = /### Nested Schema for `([^]+?)(?=(### Nested Schema for `|$))/gs;

        let nestedMatch;
        while ((nestedMatch = nestedRegexPattern.exec(capturedText)) !== null) {
            // console.log('**************SECTION**************' + nestedMatch[1])
            if (nestedMatch[1]) {
                let blockListResourceName = await getBlockListResourceName(nestedMatch[1])
                let blockListRequiredParams = await getBlockListRequiredParams(nestedMatch[1])
                let blockListOptionalParams = await getBlockListOptionalParams(nestedMatch[1])

                const allBlockListParams = [...blockListRequiredParams, ...blockListOptionalParams];
                let formattedBlockListParams = allBlockListParams.map(property => property.name);

                let jsonOutput = {
                    name: `BLOCK_LIST_RESOURCE_PLACEHOLDER_` + blockListResourceName,
                    properties: formattedBlockListParams
                }

                console.dir(jsonOutput, {depth: null})
            }
        }
    } else {
        console.log("Pattern not found");
    }
}

// export async function getAllParams(resource_name: string, requiredParams: string | requiredParameters[], optionalParams: string | optionalParameters[]) {
//     // Combine the required and optional parameters into one array
//     const allParams = [...requiredParams, ...optionalParams];
//     const result = {
//         name: resource_name,
//         properties: allParams
//     };
//     return result;
// }

getBlockListParams(readFileSync('../terraform-provider-snowflake/docs/resources/table.md', 'utf8'))