import { cloneRepository } from "./tools/create_resources/clone_terrraform_provider"; 
import { createCDKProviderFiles } from "./tools/create_resources/create_cdk_provider_files";
import { execSync } from "child_process"; 



async function main(): Promise<void> {
    await cloneRepository()
    await createCDKProviderFiles()
    console.log('Running Linter...')
    execSync('npm run format-json', { stdio: 'inherit' });
    execSync('npx eslint . --ext .ts --ext .json --fix', { stdio: 'inherit' });
    console.log('Recompiling Typescript files...')
    execSync('tsc', { stdio: 'inherit' });
    console.log('❆ ❆ ❆  Success! All CDK Snowflake Provider files created! ❆ ❆ ❆')
}

main()