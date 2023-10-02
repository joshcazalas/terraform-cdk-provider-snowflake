// import { getOptionalParams } from "./get_optional_params";
import { readFileSync } from "fs";
import { getBlockListRequiredParams } from "./get_block_list_required_params";
//import { getBlockListOptionalParams } from "./get_block_list_optional_params";

export function getBlockListParams(parameter: string, file: string) {

    const regexPattern = new RegExp(`### Nested Schema for \`${parameter}\`([\\s\\S]*?##)`);
    const matches = file.match(regexPattern);

    if (matches && matches[1]) {
        const capturedText = matches[1].trim(); // Trim any leading/trailing whitespace
        //console.log(capturedText);
        console.log(getBlockListRequiredParams(capturedText))
        //getBlockListOptionalParams(capturedText)
    } else {
        console.log("Pattern not found");
    }
}

getBlockListParams('replication_configuration', readFileSync('../terraform-provider-snowflake/docs/resources/database.md', 'utf8'))