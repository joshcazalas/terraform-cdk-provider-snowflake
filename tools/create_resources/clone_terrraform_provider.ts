import  { execSync } from 'child_process';
import * as fs from 'fs';
import path from 'path';

function deleteDirectoryRecursive(dirPath: string) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        deleteDirectoryRecursive(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

function recreateDirectory(dirPath: string) {
  console.log('Removing any existing files from the repository...');
  console.log('Recreating directory for the repository to clone into...');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export async function cloneRepository() {
  const repoURL = 'https://github.com/Snowflake-Labs/terraform-provider-snowflake';
  const targetDirectory = ''; // Replace with the directory where you want to clone the repository.
  const deleteDirectory = 'terraform-provider-snowflake'

  deleteDirectoryRecursive(deleteDirectory);
  recreateDirectory(deleteDirectory);
    try {
  
      execSync(`git clone ${repoURL}`, {
        stdio: [0, 1, 2], // we need this so node will print the command output
        cwd: path.resolve(targetDirectory, ''), // path to where you want to save the file
      })

      console.log('Repository cloned successfully.');
  
      // Now you can access the files in the cloned directory.
    } catch (error) {
      console.error('Error cloning repository:', error);
    }
}
