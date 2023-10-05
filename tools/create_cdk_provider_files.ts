import *  as Handlebars from "handlebars"
import path from "path"
import { readFileSync, writeFileSync } from "fs"
import { writeParamsToJSON } from "./create_resources_json"


function toLowerCase(input: string) {
    if (!input) {
        return ''
    }
    return input.toLowerCase()
}

async function createCDKProviderFiles() {

    Handlebars.registerHelper('toLowerCase', toLowerCase)

    await writeParamsToJSON()

    let createdFiles = []
    const snowflakeResourcesJSON = readFileSync(`${__dirname}/snowflake_resources.json`, "utf-8")
    const snowflakResourceTemplate = Handlebars.compile(readFileSync(`${__dirname}/templates/snowflake_resource_template.hb`, "utf-8"), {noEscape: true, knownHelpers: {toLowerCase: true}})
    const indexTemplate = Handlebars.compile(readFileSync(`${__dirname}/templates/index_template.hb`, "utf-8"), {noEscape: true, knownHelpers: {toLowerCase: true}})

    for (let snowflakeResource of JSON.parse(snowflakeResourcesJSON)) {
        createdFiles.push(snowflakeResource.name.toLowerCase())
        const parentDirectory = path.join(__dirname, '..')
        console.log(parentDirectory)
        const file_name = `${parentDirectory}/src/snowflake_resources/${snowflakeResource.name.toLowerCase()}`
        console.log(`Writing Snowflake Resource '${snowflakeResource.name}' to file: src/snowflake_resources/${snowflakeResource.name.toLowerCase()}.ts`)
        writeFileSync(`${file_name}.ts`, snowflakResourceTemplate(snowflakeResource))
    }

    console.log("Writing index.ts")
    writeFileSync(`${__dirname}/../src/snowflake_resources/index.ts`, indexTemplate(createdFiles))
}

async function main(): Promise<void> {
    await createCDKProviderFiles()
}

main()
