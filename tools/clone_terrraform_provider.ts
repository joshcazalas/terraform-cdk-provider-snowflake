import { clone } from 'isomorphic-git';
import fs from 'fs/promises';
import http from 'isomorphic-git/http/node';

const repoURL = 'https://github.com/Snowflake-Labs/terraform-provider-snowflake';
const targetDirectory = '../terraform-provider-snowflake'; // Replace with the directory where you want to clone the repository.

(async () => {
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

    // Now you can access the files in the cloned directory.
  } catch (error) {
    console.error('Error cloning repository:', error);
  }
})();