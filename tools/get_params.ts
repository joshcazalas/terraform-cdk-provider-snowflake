import { getOptionalParams, optionalParameters } from "./get_optional_params";
import { getRequiredParams, requiredParameters } from "./get_required_params";
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
        let requiredParams = await getRequiredParams(inputString)
        let optionalParams = await getOptionalParams(inputString)

        // console.log(requiredParams)
        // console.log(optionalParams)

        let allParams = await getAllParams(requiredParams, optionalParams)
        console.log(allParams)
    }
    catch {
        console.log('Error retrieving Parameters')
    }
    
}

export async function getAllParams(requiredParams: string | requiredParameters[], optionalParams: string | optionalParameters[]) {
    // Combine the required and optional parameters into one array
    const allParams = [...requiredParams, ...optionalParams];
    return allParams;
}

getParams('../terraform-provider-snowflake/docs/resources/database.md')
