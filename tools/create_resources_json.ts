import fs from 'fs';
import { getParams } from './get_parameters/get_params';

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
    const fileNames = fs.readdirSync('../terraform-provider-snowflake/docs/resources')

    // Empty the file by writing an empty string to it
    fs.writeFileSync('./snowflake_resources.json', '[', 'utf-8');

    for (let i = 0; i < fileNames.length; i++) {
      const file = fileNames[i];
      const params = await getParams(`../terraform-provider-snowflake/docs/resources/${file}`)
      if (file) {
        // Changing behavior of the loop for the last item in the loop
        if (i === fileNames.length - 1) {
          await writeToFile(file,'./snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + '\n]')
        }
        else {
          await writeToFile(file,'./snowflake_resources.json', JSON.stringify(params, null, 2).replace('\\n', '') + ',')
        }
      }
    }
}
