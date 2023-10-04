import { getOptionalParams, optionalParameters } from "./get_optional_params";
import { getRequiredParams, requiredParameters } from "./get_required_params";
import { getResourceName } from "./get_resource_name";
import { getBlockListParams } from "./get_block_list_params";
import { capitalizeFirstLetter } from "./capitalize_first_letter";
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
            let allParams = await getAllParams(inputString, resourceName, requiredParams, optionalParams)
            // console.dir(allParams, {depth:null})
            return allParams
        }
    }
    catch {
        console.log('Error retrieving Parameters')
    }
    
}

export async function getAllParams(file:string, resource_name: string, requiredParams: string | requiredParameters[], optionalParams: string | optionalParameters[]) {
    // Combine the required and optional parameters into one array
    const allParams = [...requiredParams, ...optionalParams];
    let additionalProperties = await getAdditionalProperties(file)
    let result;
    if (additionalProperties == 'Pattern not found') {
        result = {
            name: capitalizeFirstLetter(resource_name),
            properties: allParams
        };   
    }
    else {
        result = {
            name: capitalizeFirstLetter(resource_name),
            additional_types: [additionalProperties],
            properties: allParams
        };
    }
    const jsonAsString = JSON.stringify(result)
    const modifiedJsonString = jsonAsString.replace(/BLOCK_LIST_RESOURCE_PLACEHOLDER_/g, `${capitalizeFirstLetter(resource_name)}_`);
    let replacedPlaceholderJSON = JSON.parse(modifiedJsonString)

    if (replacedPlaceholderJSON.properties) {
        let resourceName = replacedPlaceholderJSON.name
        for (const item of replacedPlaceholderJSON.properties) {
            if (item.type == 'block list placeholder') {
                let itemName = item.name
                item.type = `${resourceName}_${capitalizeFirstLetter(itemName)}[]`
            }
        }
    }

    return replacedPlaceholderJSON;
}

export async function getAdditionalProperties(file: string) {
    let additionalProperties = await getBlockListParams(file)
    return additionalProperties
}  
