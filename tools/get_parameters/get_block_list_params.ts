import { getBlockListRequiredParams } from "./get_block_list_required_params";
import { getBlockListOptionalParams } from "./get_block_list_optional_params";
import { getBlockListResourceName } from "./get_block_list_resource_name";
import { capitalizeFirstLetter } from "./capitalize_first_letter";

export interface additionalProperties {
    additional_properties?: [
        {
            name?: string,
            properties?: string[]
        }
    ]
}

function addSpaceBetweenSemicolonAndComma(inputString: string): string {
    // Check if the input string is empty or null
    if (!inputString) {
      return inputString;
    }
  
    // Use a regular expression to find instances of a semicolon followed by a comma and replace with a semicolon, space, and comma
    const result = inputString.replace(/;,/g, '; ,');
  
    return result;
  }


export async function getBlockListParams(file: string) {

    const regexPattern = new RegExp(`(### Nested Schema for \`[\\s\\S]*?)## Import`);
    const matches = file.match(regexPattern);

    if (matches && matches[1]) {
        const capturedText = matches[1].trim(); // Trim any leading/trailing whitespace
        const nestedRegexPattern = /### Nested Schema for `([^]+?)(?=(### Nested Schema for `|$))/gs;

        let nestedMatch;
        let jsonOutput;
        let additionalProperties: additionalProperties = {additional_properties:[{}]}
        while ((nestedMatch = nestedRegexPattern.exec(capturedText)) !== null) {
            if (nestedMatch[1]) {
                let blockListResourceName = await getBlockListResourceName(nestedMatch[1])
                let blockListRequiredParams = await getBlockListRequiredParams(nestedMatch[1])
                let blockListOptionalParams = await getBlockListOptionalParams(nestedMatch[1])

                const allBlockListParams = [...blockListRequiredParams, ...blockListOptionalParams];
                let formattedBlockListParams = allBlockListParams.map(property => property.name);
                // Inserting spaces between each parameter in formattedBlockListParams
                let finalBlockListParams: string[] = []
                for (let entry of formattedBlockListParams) {
                    let editedEntry = addSpaceBetweenSemicolonAndComma(entry)
                    finalBlockListParams.push(editedEntry)
                }
                
                if (blockListResourceName) {
                    jsonOutput = {
                        name: `BLOCK_LIST_RESOURCE_PLACEHOLDER_` + capitalizeFirstLetter(blockListResourceName),
                        properties: formattedBlockListParams
                    }
                    if (additionalProperties.additional_properties) {
                        additionalProperties.additional_properties.push(jsonOutput)
                    }
                }
            }
        }

        let nestedParams: string[] = []
        let nestedProperties: string[] = []
        if (additionalProperties.additional_properties) {
            // Loop through all the 'name' properties in 'additionalProperties'
            for (const item of additionalProperties.additional_properties) {
                // Remove the block list placeholder
                const name = item.name?.slice(32);
                if (name?.includes(".")) {
                    nestedParams.push(name)
                    if (item.properties) {
                        let propertiesAsString = item.properties.join('\n')
                        let adjustedProperties = `{${propertiesAsString}}`
                        nestedProperties.push(adjustedProperties)
                    }
                    
                }
            }
        }
        let n = 0
        for (let param of nestedParams) {
            let splitParam = param.split('.')
            let paramName = splitParam[0]
            let paramType = splitParam[1]
            let newLine: string = ''
            if (additionalProperties.additional_properties) {
                for (const item of additionalProperties.additional_properties) {
                    const name = item.name?.slice(32);
                    if (name == paramName) {
                        if (item.properties) {
                            for (let line of item.properties) {
                                if (paramType && line.includes(paramType)) {
                                    if (nestedProperties[n]) {
                                        // Insert a space between parameters so the output changes from '{readonly name: string;readonly type: string;};' to '{readonly name: string; readonly type: string; };'
                                        let nestedProperty = nestedProperties[n]?.replace(/;/g, '; ')
                                        if (nestedProperty) {
                                            newLine = line.replace('block list placeholder', nestedProperty)
                                        }
                                        n ++ 
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
                            for (let line of item.properties) {
                                if (paramType && line.includes(paramType)) {
                                    let index = item.properties.indexOf(line)
                                    newLine = newLine.replace('\n','')
                                    item.properties[index] = newLine
                                }
                            }
                        }
                    }
                }
            }            
        }
        // Use filter to keep only entries without a "." in the 'name' property
        let filteredAdditionalProperties
        if (additionalProperties.additional_properties) {
            let firstFilter = additionalProperties.additional_properties.filter(entry => !entry.name || !entry.name.includes('.'));
            filteredAdditionalProperties = firstFilter.filter(entry => Object.keys(entry).length > 0);
        }
        return filteredAdditionalProperties
    } else {
        return "Pattern not found";
    }
}
