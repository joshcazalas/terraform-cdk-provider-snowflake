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
const child_process_1 = require("child_process");
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
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
    const targetDirectory = ''; // Replace with the directory where you want to clone the repository.
    const deleteDirectory = 'terraform-provider-snowflake';
    deleteDirectoryRecursive(deleteDirectory);
    recreateDirectory(deleteDirectory);
    try {
        (0, child_process_1.execSync)(`git clone ${repoURL}`, {
            stdio: [0, 1, 2],
            cwd: path_1.default.resolve(targetDirectory, ''), // path to where you want to save the file
        });
        console.log('Repository cloned successfully.');
        // Now you can access the files in the cloned directory.
    }
    catch (error) {
        console.error('Error cloning repository:', error);
    }
}
exports.cloneRepository = cloneRepository;
