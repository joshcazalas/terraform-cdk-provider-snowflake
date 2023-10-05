"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalProperties = exports.getAllParams = exports.getParams = void 0;
const get_optional_params_1 = require("./get_optional_params");
const get_required_params_1 = require("./get_required_params");
const get_resource_name_1 = require("./get_resource_name");
const get_block_list_params_1 = require("./get_block_list_params");
const capitalize_first_letter_1 = require("./capitalize_first_letter");
const is_file_1 = require("./is_file");
const fs_1 = require("fs");
async function getParams(file) {
    const isInputAFile = (0, is_file_1.isFile)(file);
    let inputString = '';
    if (isInputAFile) {
        inputString = (0, fs_1.readFileSync)(`${file}`, 'utf8');
    }
    else {
        inputString = file;
    }
    try {
        let resourceName = await (0, get_resource_name_1.getResourceName)(inputString);
        let requiredParams = await (0, get_required_params_1.getRequiredParams)(inputString);
        let optionalParams = await (0, get_optional_params_1.getOptionalParams)(inputString);
        if (resourceName) {
            let allParams = await getAllParams(inputString, resourceName, requiredParams, optionalParams);
            return allParams;
        }
    }
    catch {
        console.log('Error retrieving Parameters');
    }
}
exports.getParams = getParams;
async function getAllParams(file, resource_name, requiredParams, optionalParams) {
    let allParams;
    if (requiredParams == 'Unable to find Required Parameters' || requiredParams == 'There is no Required Section in this File') {
        allParams = optionalParams;
    }
    else if (optionalParams == 'Unable to find Optional Parameters' || optionalParams == 'There is no Optional Section in this File') {
        allParams = requiredParams;
    }
    else {
        allParams = [...requiredParams, ...optionalParams];
    }
    // Combine the required and optional parameters into one array
    let additionalProperties = await getAdditionalProperties(file);
    let result;
    if (additionalProperties == 'Pattern not found') {
        result = {
            name: (0, capitalize_first_letter_1.capitalizeFirstLetter)(resource_name),
            properties: allParams
        };
    }
    else {
        result = {
            name: (0, capitalize_first_letter_1.capitalizeFirstLetter)(resource_name),
            additional_types: [additionalProperties],
            properties: allParams
        };
    }
    const jsonAsString = JSON.stringify(result);
    const modifiedJsonString = jsonAsString.replace(/BLOCK_LIST_RESOURCE_PLACEHOLDER_/g, `${(0, capitalize_first_letter_1.capitalizeFirstLetter)(resource_name)}_`);
    let replacedPlaceholderJSON = JSON.parse(modifiedJsonString);
    if (replacedPlaceholderJSON.properties) {
        let resourceName = replacedPlaceholderJSON.name;
        for (const item of replacedPlaceholderJSON.properties) {
            if (item.type == 'block list placeholder') {
                let itemName = item.name;
                item.type = `${resourceName}_${(0, capitalize_first_letter_1.capitalizeFirstLetter)(itemName)}[]`;
            }
        }
    }
    return replacedPlaceholderJSON;
}
exports.getAllParams = getAllParams;
async function getAdditionalProperties(file) {
    let additionalProperties = await (0, get_block_list_params_1.getBlockListParams)(file);
    return additionalProperties;
}
exports.getAdditionalProperties = getAdditionalProperties;
