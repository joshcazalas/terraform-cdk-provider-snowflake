import { getOptionalParams, optionalParameters } from "./get_optional_params";
import { getRequiredParams, requiredParameters } from "./get_required_params";
import { getResourceName } from "./get_resource_name";
import { isFile } from "./is_file";
import { readFileSync } from "fs";

export async function getParams(file: string) {

    const isInputAFile: boolean = isFile(file)
    let inputString = ''
    if (isInputAFile) {
        inputString = readFileSync(`${file}`, 'utf8');
    }
    else {
        inputString = file
    }
    try {
        let resourceName = await getResourceName(inputString)
        let requiredParams = await getRequiredParams(inputString)
        let optionalParams = await getOptionalParams(inputString)
        if (resourceName) {
            let allParams = await getAllParams(resourceName, requiredParams, optionalParams)
            console.log(allParams)
        }
    }
    catch {
        console.log('Error retrieving Parameters')
    }
    
}

export async function getAllParams(resource_name: string, requiredParams: string | requiredParameters[], optionalParams: string | optionalParameters[]) {
    // Combine the required and optional parameters into one array
    const allParams = [...requiredParams, ...optionalParams];
    const result = {
        name: resource_name,
        properties: allParams
    };
    return result;
}

getParams('../terraform-provider-snowflake/docs/resources/schema.md')
