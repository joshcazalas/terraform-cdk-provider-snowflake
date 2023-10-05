import *  as Handlebars from "handlebars"
import path from "path"
import { readFileSync, writeFileSync } from "fs"
import { readdir, unlink } from "fs/promises";
import { writeParamsToJSON } from "./create_resources_json"

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

  Handlebars.registerHelper('notEqual', function (a, b, options) {
    return a !== b ? options.fn(this) : options.inverse(this);
  });

export async function deleteObsoleteFiles(dir: string, resource_files: string[]) {
  try {
    // Read the files in the directory
    const files = await readdir(dir);

    // Loop through each file in the directory
    for (const file of files) {
      const fileName = path.basename(file);

      // Remove .ts, .js, and .d.ts extensions
      const resourceFileName = fileName.replace(/\.(ts|js|d\.ts)$/, '');

      if (!resource_files.includes(resourceFileName)) {
          const filePath = path.join(dir, file);
  
          // Delete the file
          await unlink(filePath);
          console.log(`Deleted Deprecated file: ${filePath}`);
        }
    }
  } catch (error) {
    console.error('Error deleting files:', error);
  }
}

export async function createCDKProviderFiles() {

    await writeParamsToJSON()

    const createdFiles: string[] = ['index', 'snowflake_provider']
    const parentDirectory = path.join(__dirname, '../..')
    const snowflakeResourcesJSON = readFileSync(`${path.join(__dirname, '..')}/snowflake_resources.json`, "utf-8")
    const snowflakResourceTemplate = Handlebars.compile(readFileSync(`${path.join(__dirname, '..')}/templates/snowflake_resource_template.hb`, "utf-8"), {noEscape: true, knownHelpers: {toLowerCase: true, nestedProperty: true}})
    const indexTemplate = Handlebars.compile(readFileSync(`${path.join(__dirname, '..')}/templates/index_template.hb`, "utf-8"), {noEscape: true, knownHelpers: {notEqual: true}})
    const snowflakeProviderTemplate = Handlebars.compile(readFileSync(`${path.join(__dirname, '..')}/templates/snowflake_provider_template.hb`, "utf-8"), {noEscape: true})


    for (const snowflakeResource of JSON.parse(snowflakeResourcesJSON)) {
        createdFiles.push(snowflakeResource.name.toLowerCase())
        const file_name = `${parentDirectory}/src/snowflake_resources/${snowflakeResource.name.toLowerCase()}`
        console.log(`Writing Snowflake Resource '${snowflakeResource.name}' to file: src/snowflake_resources/${snowflakeResource.name.toLowerCase()}.ts`)
        writeFileSync(`${file_name}.ts`, snowflakResourceTemplate(snowflakeResource))
    }

    console.log("Writing Index File: src/snowflake_resources/index.ts")
    writeFileSync(`${parentDirectory}/src/snowflake_resources/index.ts`, indexTemplate(createdFiles))

    console.log("Writing Snowflake Provider File: src/snowflake_resources/snowflake_provider.ts")
    writeFileSync(`${parentDirectory}/src/snowflake_resources/snowflake_provider.ts`, snowflakeProviderTemplate(''))

    console.log('Removing Obsolete or Deprecated files...')
    await deleteObsoleteFiles(`${parentDirectory}/src/snowflake_resources/`, createdFiles)
    await deleteObsoleteFiles(`${parentDirectory}/dist/snowflake_resources/`, createdFiles)
}
