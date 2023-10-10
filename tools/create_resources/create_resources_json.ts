import fs, { readFileSync } from 'fs';
import { getParams } from '../get_parameters/get_params';

async function writeToFile(fileAdded: string, filePath: string, newContents: string) {
  try {
    // Append the new contents to the file
    fs.appendFileSync(filePath, newContents, 'utf-8');

    console.log(`${fileAdded} Added to File "${filePath}".`);
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

export async function writeParamsToJSON() {
    const fileNames = fs.readdirSync('terraform-provider-snowflake/docs/resources')

    // Empty the file by writing an empty string to it
    fs.writeFileSync('tools/snowflake_resources.json', '[', 'utf-8');

    for (let i = 0; i < fileNames.length; i++) {
      const fileName = fileNames[i];
      const file = readFileSync(`terraform-provider-snowflake/docs/resources/${fileName}`, "utf-8")
      const params = await getParams(file)
      if (file) {
        // Changing behavior of the loop for the last item in the loop
        if (i === fileNames.length - 1 && fileName) {
          await writeToFile(fileName,'tools/snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + '\n]')
        }
        else {
          if (fileName) {
            await writeToFile(fileName,'tools/snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + ',')
          }
        }
      }
    }
}
