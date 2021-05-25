import { failBoxSettings, successBoxSettings } from "./boxSettings";
import { successFileOutput } from "./successFileOutput";
import { failFileOutput } from "./failFileOutput";
import child from "child_process";
import boxen from "boxen";

export function executeCommand(
  fileDir: string,
  fileName: string
): Promise<string> {
  return new Promise(function (resolve, reject) {
    child.exec(`node ${fileDir}`, (error) => {
      if (error !== null) {
        console.log(boxen(failFileOutput(fileName), failBoxSettings));
        reject(error);
        return;
      } else {
        resolve(boxen(successFileOutput(fileName), successBoxSettings));
        return;
      }
    });
  });
}
