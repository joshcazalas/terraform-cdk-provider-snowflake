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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = __importStar(require("handlebars"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const create_resources_json_1 = require("./create_resources_json");
const clone_terrraform_provider_1 = require("./clone_terrraform_provider");
function toLowerCase(input) {
    if (!input) {
        return '';
    }
    return input.toLowerCase();
}
Handlebars.registerHelper('nestedProperty', function (context, property) {
    // Split the property path by '.' and traverse the nested structure
    const properties = property.split('.');
    let value = context;
    for (const prop of properties) {
        value = value[prop];
    }
    return value;
});
async function createCDKProviderFiles() {
    Handlebars.registerHelper('toLowerCase', toLowerCase);
    await (0, create_resources_json_1.writeParamsToJSON)();
    let createdFiles = [];
    const snowflakeResourcesJSON = (0, fs_1.readFileSync)(`${__dirname}/snowflake_resources.json`, "utf-8");
    const snowflakResourceTemplate = Handlebars.compile((0, fs_1.readFileSync)(`${__dirname}/templates/snowflake_resource_template.hb`, "utf-8"), { noEscape: true, knownHelpers: { toLowerCase: true, nestedProperty: true } });
    const indexTemplate = Handlebars.compile((0, fs_1.readFileSync)(`${__dirname}/templates/index_template.hb`, "utf-8"), { noEscape: true, knownHelpers: { toLowerCase: true, nestedProperty: true } });
    for (let snowflakeResource of JSON.parse(snowflakeResourcesJSON)) {
        createdFiles.push(snowflakeResource.name.toLowerCase());
        const parentDirectory = path_1.default.join(__dirname, '..');
        const file_name = `${parentDirectory}/src/snowflake_resources/${snowflakeResource.name.toLowerCase()}`;
        console.log(`Writing Snowflake Resource '${snowflakeResource.name}' to file: src/snowflake_resources/${snowflakeResource.name.toLowerCase()}.ts`);
        (0, fs_1.writeFileSync)(`${file_name}.ts`, snowflakResourceTemplate(snowflakeResource));
    }
    console.log("Writing index.ts to file: src/snowflake_resources/index.ts");
    const parentDirectory = path_1.default.join(__dirname, '..');
    (0, fs_1.writeFileSync)(`${parentDirectory}/src/snowflake_resources/index.ts`, indexTemplate(createdFiles));
}
async function main() {
    await (0, clone_terrraform_provider_1.cloneRepository)();
    await createCDKProviderFiles();
}
main();
