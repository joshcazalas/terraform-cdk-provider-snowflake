"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneRepository = void 0;
const isomorphic_git_1 = require("isomorphic-git");
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const node_1 = __importDefault(require("isomorphic-git/http/node"));
function deleteDirectoryRecursive(dirPath) {
    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file) => {
            const filePath = path_1.default.join(dirPath, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                deleteDirectoryRecursive(filePath);
            }
            else {
                fs.unlinkSync(filePath);
            }
        });
        fs.rmdirSync(dirPath);
    }
}
function recreateDirectory(dirPath) {
    console.log('Removing any existing files from the repository...');
    console.log('Recreating directory for the repository to clone into...');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}
async function cloneRepository() {
    const repoURL = 'https://github.com/Snowflake-Labs/terraform-provider-snowflake';
    const targetDirectory = '../terraform-provider-snowflake'; // Replace with the directory where you want to clone the repository.
    deleteDirectoryRecursive(targetDirectory);
    recreateDirectory(targetDirectory);
    try {
        // Clone the repository
        await (0, isomorphic_git_1.clone)({
            fs,
            http: node_1.default,
            dir: targetDirectory,
            url: repoURL,
            singleBranch: true,
            depth: 1, // Limit the history to the latest commit
        });
        console.log('Repository cloned successfully.');
        await (0, isomorphic_git_1.pull)({
            fs,
            http: node_1.default,
            dir: targetDirectory,
            url: repoURL,
            singleBranch: true,
            author: { name: "placeholder" },
            fastForwardOnly: true
        });
        // Now you can access the files in the cloned directory.
    }
    catch (error) {
        console.error('Error cloning repository:', error);
    }
}
exports.cloneRepository = cloneRepository;
