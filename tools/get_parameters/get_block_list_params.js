"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockListParams = void 0;
const get_block_list_required_params_1 = require("./get_block_list_required_params");
const get_block_list_optional_params_1 = require("./get_block_list_optional_params");
const get_block_list_resource_name_1 = require("./get_block_list_resource_name");
const capitalize_first_letter_1 = require("./capitalize_first_letter");
function addSpaceBetweenSemicolonAndComma(inputString) {
    // Check if the input string is empty or null
    if (!inputString) {
        return inputString;
    }
    // Use a regular expression to find instances of a semicolon followed by a comma and replace with a semicolon, space, and comma
    const result = inputString.replace(/;,/g, '; ,');
    return result;
}
async function getBlockListParams(file) {
    const regexPattern = new RegExp(`(### Nested Schema for \`[\\s\\S]*?)## Import`);
    const matches = file.match(regexPattern);
    if (matches && matches[1]) {
        const capturedText = matches[1].trim(); // Trim any leading/trailing whitespace
        const nestedRegexPattern = /### Nested Schema for `([^]+?)(?=(### Nested Schema for `|$|## Import))/gs;
        let nestedMatch;
        let jsonOutput;
        const additionalProperties = { additional_properties: [{}] };
        while ((nestedMatch = nestedRegexPattern.exec(capturedText)) !== null) {
            if (nestedMatch[1]) {
                const blockListResourceName = await (0, get_block_list_resource_name_1.getBlockListResourceName)(nestedMatch[1]);
                const blockListRequiredParams = await (0, get_block_list_required_params_1.getBlockListRequiredParams)(nestedMatch[1]);
                const blockListOptionalParams = await (0, get_block_list_optional_params_1.getBlockListOptionalParams)(nestedMatch[1]);
                let formattedBlockListParams;
                let allBlockListParams;
                if (typeof blockListRequiredParams !== 'string' && typeof blockListOptionalParams !== 'string') {
                    allBlockListParams = [...blockListRequiredParams, ...blockListOptionalParams];
                    formattedBlockListParams = allBlockListParams.map(property => property.name);
                }
                else if (typeof blockListRequiredParams == 'string' && typeof blockListOptionalParams !== 'string') {
                    allBlockListParams = blockListOptionalParams;
                    formattedBlockListParams = allBlockListParams.map(property => property.name);
                }
                else if (typeof blockListOptionalParams == 'string' && typeof blockListRequiredParams !== 'string') {
                    allBlockListParams = blockListRequiredParams;
                    formattedBlockListParams = allBlockListParams.map(property => property.name);
                }
                else {
                    formattedBlockListParams = [];
                }
                // Inserting spaces between each parameter in formattedBlockListParams
                const finalBlockListParams = [];
                for (const entry of formattedBlockListParams) {
                    const editedEntry = addSpaceBetweenSemicolonAndComma(entry);
                    finalBlockListParams.push(editedEntry);
                }
                if (blockListResourceName) {
                    jsonOutput = {
                        name: `BLOCK_LIST_RESOURCE_PLACEHOLDER_` + (0, capitalize_first_letter_1.capitalizeFirstLetter)(blockListResourceName),
                        properties: formattedBlockListParams
                    };
                    if (additionalProperties.additional_properties) {
                        additionalProperties.additional_properties.push(jsonOutput);
                    }
                }
            }
        }
        const nestedParams = [];
        const nestedProperties = [];
        if (additionalProperties.additional_properties) {
            // Loop through all the 'name' properties in 'additionalProperties'
            for (const item of additionalProperties.additional_properties) {
                // Remove the block list placeholder
                const name = item.name?.slice(32);
                if (name?.includes(".")) {
                    nestedParams.push(name);
                    if (item.properties) {
                        const propertiesAsString = item.properties.join('\n');
                        const adjustedProperties = `{${propertiesAsString}}`;
                        nestedProperties.push(adjustedProperties);
                    }
                }
            }
        }
        let n = 0;
        for (const param of nestedParams) {
            const splitParam = param.split('.');
            const paramName = splitParam[0];
            const paramType = splitParam[1];
            let newLine = '';
            if (additionalProperties.additional_properties) {
                for (const item of additionalProperties.additional_properties) {
                    const name = item.name?.slice(32);
                    if (name == paramName) {
                        if (item.properties) {
                            for (const line of item.properties) {
                                if (paramType && line.includes(paramType)) {
                                    if (nestedProperties[n]) {
                                        // Insert a space between parameters so the output changes from '{readonly name: string;readonly type: string;};' to '{readonly name: string; readonly type: string; };'
                                        const nestedProperty = nestedProperties[n]?.replace(/;/g, '; ');
                                        if (nestedProperty) {
                                            newLine = line.replace('block list placeholder', nestedProperty);
                                        }
                                        n++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (additionalProperties.additional_properties) {
                for (const item of additionalProperties.additional_properties) {
                    const name = item.name?.slice(32);
                    if (name == paramName) {
                        if (item.properties) {
                            for (const line of item.properties) {
                                if (paramType && line.includes(paramType)) {
                                    const index = item.properties.indexOf(line);
                                    newLine = newLine.replace('\n', '');
                                    item.properties[index] = newLine;
                                }
                            }
                        }
                    }
                }
            }
        }
        // Use filter to keep only entries without a "." in the 'name' property
        let filteredAdditionalProperties;
        if (additionalProperties.additional_properties) {
            const firstFilter = additionalProperties.additional_properties.filter(entry => !entry.name || !entry.name.includes('.'));
            filteredAdditionalProperties = firstFilter.filter(entry => Object.keys(entry).length > 0);
        }
        return filteredAdditionalProperties;
    }
    else {
        return "Pattern not found";
    }
}
exports.getBlockListParams = getBlockListParams;
