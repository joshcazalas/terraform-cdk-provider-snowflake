"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeParamsToJSON = void 0;
const fs_1 = __importStar(require("fs"));
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
    const fileNames = fs_1.default.readdirSync('terraform-provider-snowflake/docs/resources');
    // Empty the file by writing an empty string to it
    fs_1.default.writeFileSync('tools/snowflake_resources.json', '[', 'utf-8');
    for (let i = 0; i < fileNames.length; i++) {
        const fileName = fileNames[i];
        const file = (0, fs_1.readFileSync)(`terraform-provider-snowflake/docs/resources/${fileName}`, "utf-8");
        const params = await (0, get_params_1.getParams)(file);
        if (file) {
            // Changing behavior of the loop for the last item in the loop
            if (i === fileNames.length - 1 && fileName) {
                await writeToFile(fileName, 'tools/snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + '\n]');
            }
            else {
                if (fileName) {
                    await writeToFile(fileName, 'tools/snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + ',');
                }
            }
        }
    }
}
exports.writeParamsToJSON = writeParamsToJSON;
