"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone_terrraform_provider_1 = require("./tools/create_resources/clone_terrraform_provider");
const create_cdk_provider_files_1 = require("./tools/create_resources/create_cdk_provider_files");
const child_process_1 = require("child_process");
async function main() {
    await (0, clone_terrraform_provider_1.cloneRepository)();
    await (0, create_cdk_provider_files_1.createCDKProviderFiles)();
    console.log('Running Linter...');
    (0, child_process_1.execSync)('npm run format-json', { stdio: 'inherit' });
    (0, child_process_1.execSync)('npx eslint . --ext .ts --ext .json --fix', { stdio: 'inherit' });
    console.log('Recompiling Typescript files...');
    (0, child_process_1.execSync)('tsc', { stdio: 'inherit' });
    console.log('❆ ❆ ❆  Success! All CDK Snowflake Provider files created! ❆ ❆ ❆');
}
main();
