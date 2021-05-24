import { fileListBoxSettings } from "./boxSettings";
import boxen from "boxen";

let filesList = "";

export function showAllFiles(files: string[]): void {
  for (let i = 0; i < files.length; i++) {
    if (i === files.length - 1) {
      filesList += `-${files[i]}`;
    } else {
      filesList += `-${files[i]}\n`;
    }
  }
  return console.log(boxen(filesList, fileListBoxSettings));
}
