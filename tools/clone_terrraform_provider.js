"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_git_1 = require("isomorphic-git");
const promises_1 = __importDefault(require("fs/promises"));
const node_1 = __importDefault(require("isomorphic-git/http/node"));
const repoURL = 'https://github.com/Snowflake-Labs/terraform-provider-snowflake';
const targetDirectory = '../terraform-provider-snowflake'; // Replace with the directory where you want to clone the repository.
(async () => {
    try {
        // Clone the repository
        await (0, isomorphic_git_1.clone)({
            fs: promises_1.default,
            http: node_1.default,
            dir: targetDirectory,
            url: repoURL,
            singleBranch: true,
            depth: 1, // Limit the history to the latest commit
        });
        console.log('Repository cloned successfully.');
        // Now you can access the files in the cloned directory.
    }
    catch (error) {
        console.error('Error cloning repository:', error);
    }
})();
