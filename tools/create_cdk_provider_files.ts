import *  as Handlebars from "handlebars"
import path from "path"
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from "fs"
import { readdir, unlink } from "fs/promises";
import { writeParamsToJSON } from "./create_resources_json"
import { cloneRepository } from "./clone_terrraform_provider"

Handlebars.registerHelper('toLowerCase', function (input) {
    if (!input) {
        return ''
    }
    return input.toLowerCase()
})

Handlebars.registerHelper('nestedProperty', function (context, property) {
    // Split the property path by '.' and traverse the nested structure
    const properties = property.split('.');
    let value = context;
  
    for (const prop of properties) {
      value = value[prop];
    }
  
    return value;
  });

  async function deleteObsoleteFiles(dir: string, resource_files: string[]) {
    try {
      // Read the files in the directory
      const files = await readdir(dir); // Use fs.promises.readdir
  
      // Loop through each file in the directory
      for (const file of files) {
        const resourceFileName = path.basename(file, path.extname(file)); // Remove file extension
  
        // Check if the resource name is not in the array
        if (!resource_files.includes(resourceFileName)) {
          const filePath = path.join(dir, file);
  
          // Delete the file
          await unlink(filePath); // Use fs.promises.unlink
          console.log(`Deleted Obsolete/Deprecated file: ${filePath}`);
        }
      }
    } catch (error) {
      console.error('Error deleting files:', error);
    }
  }

async function createCDKProviderFiles() {

    await writeParamsToJSON()

    const createdFiles: string[] = []
    const snowflakeResourcesJSON = readFileSync(`${__dirname}/snowflake_resources.json`, "utf-8")
    const snowflakResourceTemplate = Handlebars.compile(readFileSync(`${__dirname}/templates/snowflake_resource_template.hb`, "utf-8"), {noEscape: true, knownHelpers: {toLowerCase: true, nestedProperty: true}})
    const indexTemplate = Handlebars.compile(readFileSync(`${__dirname}/templates/index_template.hb`, "utf-8"), {noEscape: true, knownHelpers: {toLowerCase: true, nestedProperty: true}})

    for (const snowflakeResource of JSON.parse(snowflakeResourcesJSON)) {
        createdFiles.push(snowflakeResource.name.toLowerCase())
        const parentDirectory = path.join(__dirname, '..')
        const file_name = `${parentDirectory}/src/snowflake_resources/${snowflakeResource.name.toLowerCase()}`
        console.log(`Writing Snowflake Resource '${snowflakeResource.name}' to file: src/snowflake_resources/${snowflakeResource.name.toLowerCase()}.ts`)
        writeFileSync(`${file_name}.ts`, snowflakResourceTemplate(snowflakeResource))
        console.log('Removing Obsolete or Deprecated files...')
        deleteObsoleteFiles(`${parentDirectory}/src/snowflake_resources/`, createdFiles)
        deleteObsoleteFiles(`${parentDirectory}/dist/snowflake_resources/`, createdFiles)
    }

    console.log(createdFiles)

    console.log("Writing index.ts to file: src/snowflake_resources/index.ts")
    const parentDirectory = path.join(__dirname, '..')
    writeFileSync(`${parentDirectory}/src/snowflake_resources/index.ts`, indexTemplate(createdFiles))
}

async function main(): Promise<void> {
    await cloneRepository()
    await createCDKProviderFiles()
    console.log('Running Linter...')
    execSync('npm run format-json', { stdio: 'inherit' });
    execSync('npx eslint . --ext .ts --ext .json --fix', { stdio: 'inherit' });
    console.log('Recompiling Typescript files...')
    execSync('tsc', { stdio: 'inherit' });
    console.log('Success! All Provider files created.')
}

main()
