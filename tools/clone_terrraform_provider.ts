import { clone, pull } from 'isomorphic-git';
import * as fs from 'fs';
import path from 'path';
import http from 'isomorphic-git/http/node';

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
  const targetDirectory = '../terraform-provider-snowflake'; // Replace with the directory where you want to clone the repository.

  deleteDirectoryRecursive(targetDirectory);
  recreateDirectory(targetDirectory);
    try {
      // Clone the repository
      await clone({
        fs,
        http,
        dir: targetDirectory,
        url: repoURL,
        singleBranch: true, // Only clone the default branch (main)
        depth: 1, // Limit the history to the latest commit
      });
  
      console.log('Repository cloned successfully.');
  
      await pull({
        fs,
        http,
        dir: targetDirectory,
        url: repoURL,
        singleBranch: true, // Only clone the default branch (main)
        author: {name: "placeholder"},
        fastForwardOnly: true
      })
  
      // Now you can access the files in the cloned directory.
    } catch (error) {
      console.error('Error cloning repository:', error);
    }
}
