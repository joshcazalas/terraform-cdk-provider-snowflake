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
exports.createCDKProviderFiles = exports.deleteObsoleteFiles = void 0;
const Handlebars = __importStar(require("handlebars"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const create_resources_json_1 = require("./create_resources_json");
Handlebars.registerHelper('toLowerCase', function (input) {
    if (!input) {
        return '';
    }
    return input.toLowerCase();
});
Handlebars.registerHelper('nestedProperty', function (context, property) {
    // Split the property path by '.' and traverse the nested structure
    const properties = property.split('.');
    let value = context;
    for (const prop of properties) {
        value = value[prop];
    }
    return value;
});
Handlebars.registerHelper('notEqual', function (a, b, options) {
    return a !== b ? options.fn(this) : options.inverse(this);
});
async function readFirst100Lines(filePath) {
    const content = (0, fs_1.readFileSync)(filePath, 'utf8');
    const lines = content.split('\n');
    const first100Lines = lines.slice(0, 100);
    return first100Lines.join('\n');
}
async function extractVersion(changelog) {
    const versionRegex = /\[([\d.]+)\]/;
    const match = changelog.match(versionRegex);
    if (match && match[1]) {
        console.log('************************* Rebuilding Snowflake Provider Using Version ' + match[1] + ' *************************');
        return match ? match[1] : null;
    }
    else {
        return null;
    }
}
function replacePlaceholderInFile(filePath, replacementText) {
    try {
        // Read the file contents
        let fileContents = (0, fs_1.readFileSync)(filePath, 'utf8');
        // Replace the placeholder with the provided text
        fileContents = fileContents.replace(/PROVIDER_VERSION_PLACEHOLDER/g, replacementText);
        // Write the modified contents back to the file
        (0, fs_1.writeFileSync)(filePath, fileContents, 'utf8');
    }
    catch (error) {
        console.error('Error replacing placeholder:', error);
    }
}
async function deleteObsoleteFiles(dir, resource_files) {
    try {
        // Read the files in the directory
        const files = await (0, promises_1.readdir)(dir);
        // Loop through each file in the directory
        for (const file of files) {
            const fileName = path_1.default.basename(file);
            // Remove .ts, .js, and .d.ts extensions
            const resourceFileName = fileName.replace(/\.(ts|js|d\.ts)$/, '');
            if (!resource_files.includes(resourceFileName)) {
                const filePath = path_1.default.join(dir, file);
                // Delete the file
                await (0, promises_1.unlink)(filePath);
                console.log(`Deleted Deprecated file: ${filePath}`);
            }
        }
    }
    catch (error) {
        console.error('Error deleting files:', error);
    }
}
exports.deleteObsoleteFiles = deleteObsoleteFiles;
async function createCDKProviderFiles() {
    const parentDirectory = path_1.default.join(__dirname, '../..');
    const changeLog = await readFirst100Lines(`${parentDirectory}/terraform-provider-snowflake/CHANGELOG.md`);
    const providerVersion = await extractVersion(changeLog);
    await (0, create_resources_json_1.writeParamsToJSON)();
    const createdFiles = ['index', 'snowflake_provider'];
    // const snowflakeResourcesJSON = readFileSync(`${path.join(__dirname, '..')}/snowflake_resources.json`, "utf-8")
    const snowflakeResourcesJSON = (0, fs_1.readFileSync)(`tools/snowflake_resources.json`, "utf-8");
    const snowflakResourceTemplate = Handlebars.compile((0, fs_1.readFileSync)(`${path_1.default.join(__dirname, '..')}/templates/snowflake_resource_template.hb`, "utf-8"), { noEscape: true, knownHelpers: { toLowerCase: true, nestedProperty: true } });
    const indexTemplate = Handlebars.compile((0, fs_1.readFileSync)(`${path_1.default.join(__dirname, '..')}/templates/index_template.hb`, "utf-8"), { noEscape: true, knownHelpers: { notEqual: true } });
    const snowflakeProviderTemplate = Handlebars.compile((0, fs_1.readFileSync)(`${path_1.default.join(__dirname, '..')}/templates/snowflake_provider_template.hb`, "utf-8"), { noEscape: true });
    for (const snowflakeResource of JSON.parse(snowflakeResourcesJSON)) {
        createdFiles.push(snowflakeResource.name.toLowerCase());
        const file_name = `${parentDirectory}/src/snowflake_resources/${snowflakeResource.name.toLowerCase()}`;
        console.log(`Writing Snowflake Resource '${snowflakeResource.name}' to file: src/snowflake_resources/${snowflakeResource.name.toLowerCase()}.ts`);
        (0, fs_1.writeFileSync)(`${file_name}.ts`, snowflakResourceTemplate(snowflakeResource));
    }
    console.log("Writing Index File: src/snowflake_resources/index.ts");
    (0, fs_1.writeFileSync)(`${parentDirectory}/src/snowflake_resources/index.ts`, indexTemplate(createdFiles));
    console.log("Writing Snowflake Provider File: src/snowflake_resources/snowflake_provider.ts");
    (0, fs_1.writeFileSync)(`${parentDirectory}/src/snowflake_resources/snowflake_provider.ts`, snowflakeProviderTemplate(''));
    if (providerVersion) {
        replacePlaceholderInFile(`${parentDirectory}/src/snowflake_resources/snowflake_provider.ts`, providerVersion);
    }
    console.log('Removing Obsolete or Deprecated files...');
    await deleteObsoleteFiles(`${parentDirectory}/src/snowflake_resources/`, createdFiles);
    await deleteObsoleteFiles(`${parentDirectory}/dist/snowflake_resources/`, createdFiles);
}
exports.createCDKProviderFiles = createCDKProviderFiles;
