"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeParamsToJSON = void 0;
const fs_1 = __importDefault(require("fs"));
const get_params_1 = require("../get_parameters/get_params");
async function writeToFile(fileAdded, filePath, newContents) {
    try {
        // Append the new contents to the file
        fs_1.default.appendFileSync(filePath, newContents, 'utf-8');
        console.log(`${fileAdded} Added to File "${filePath}".`);
    }
    catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}
async function writeParamsToJSON() {
    const fileNames = fs_1.default.readdirSync('../terraform-provider-snowflake/docs/resources');
    // Empty the file by writing an empty string to it
    fs_1.default.writeFileSync('tools/snowflake_resources.json', '[', 'utf-8');
    for (let i = 0; i < fileNames.length; i++) {
        const file = fileNames[i];
        const params = await (0, get_params_1.getParams)(`../terraform-provider-snowflake/docs/resources/${file}`);
        if (file) {
            // Changing behavior of the loop for the last item in the loop
            if (i === fileNames.length - 1) {
                await writeToFile(file, 'tools/snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + '\n]');
            }
            else {
                await writeToFile(file, 'tools/snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + ',');
            }
        }
    }
}
exports.writeParamsToJSON = writeParamsToJSON;
