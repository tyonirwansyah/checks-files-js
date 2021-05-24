import { showAllFiles } from "./utils/showAllFiles";
import { filterFiles } from "./utils/filterFiles";
import { executeCommand } from "./utils/executeCommand";
import path from "path";
import fs from "fs";

// const testFolder = "./dummy/"; // testing purposes
// const dir = path.join(__dirname, testFolder); // testing purposes

export function executeBuildTest(folderPath: string): void {
  const files = fs.readdirSync(folderPath);
  const filteredFiles = filterFiles(files);

  showAllFiles(filteredFiles);

  for (let i = 0; i < filteredFiles.length; i++) {
    executeCommand(path.join(folderPath, filteredFiles[i]), filteredFiles[i]);
  }
}
