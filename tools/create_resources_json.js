"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
function getResourceName(readmeText) {
    const match = /# (\w+) \(Resource\)/.exec(readmeText);
    if (match) {
        return match[1];
    }
    throw new Error('Resource name not found in README.md');
}
function parseSchemaToJSON(readmeText) {
    const schemaStart = readmeText.indexOf('## Schema');
    const schemaEnd = readmeText.indexOf('## Import', schemaStart);
    const schemaSection = readmeText.slice(schemaStart, schemaEnd);
    const schemaLines = schemaSection.split('\n');
    let currentResource = null;
    const resources = [];
    const resourceName = getResourceName(readmeText); // Extract resource name
    for (const line of schemaLines) {
        if (line.startsWith('### ')) {
            // Start of a new section
            const sectionName = line.replace('### ', '').trim();
            if (sectionName === 'Optional' || sectionName === 'Required') {
                // This is a section for resource properties
                if (currentResource) {
                    currentResource.properties = [];
                }
            }
            else {
                // This is a new resource definition
                currentResource = { name: sectionName, properties: [] };
                resources.push(currentResource);
            }
        }
        else if (line.startsWith('- `')) {
            // Parse field information like "- `enable_multiple_grants` (Boolean) When this is set to true..."
            const fieldInfo = line.replace('- `', '').split('` (');
            if (currentResource) {
                const fieldName = fieldInfo[0];
                const fieldType = fieldInfo[1]?.split(')')[0] || ''; // Use an empty string as a default value if it's undefined
                const isRequired = !line.includes('(Optional)');
                // Only add the property if it's not Read-Only
                if (fieldName && !line.includes('Read-Only')) {
                    currentResource.properties.push({
                        name: fieldName,
                        type: fieldType,
                        required: isRequired, // Set required based on the presence of (Optional)
                    });
                }
            }
        }
    }
    if (resourceName) {
        return { name: resourceName, properties: resources };
    }
    else {
        throw new Error('Resource name not found in README.md');
    }
}
// Read the README file
async function readReadmeFile() {
    try {
        const readmeText = await promises_1.default.readFile('../terraform-provider-snowflake/docs/resources/database.md', 'utf-8');
        return readmeText;
    }
    catch (error) {
        throw new Error('Error reading README.md: ' + error.message);
    }
}
// Main function
async function main() {
    const readmeText = await readReadmeFile();
    //console.log(readmeText)
    const schemaJSON = parseSchemaToJSON(readmeText);
    console.dir(schemaJSON, { depth: null });
    // Write the JSON to a file
    //   try {
    //     await fs.writeFile('snowflake_resources.json', JSON.stringify(schemaJSON, null, 2));
    //     console.log('Schema JSON written to snowflake_resources.json');
    //   } catch (error) {
    //     console.error('Error writing JSON to file: ' + error.message);
    //   }
}
main();
