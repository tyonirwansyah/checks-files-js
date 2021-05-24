import { successBoxSettings } from "./boxSettings";
import { successFileOutput } from "./successFileOutput";
import child from "child_process";
import boxen from "boxen";

export const executeCommand = (fileDir: string, fileName: string): void => {
  child.exec(`node ${fileDir}`, (error: child.ExecException | null) => {
    if (error !== null) {
      return console.log(error.message);
    }
    console.log(boxen(successFileOutput(fileName), successBoxSettings));
  });
};
