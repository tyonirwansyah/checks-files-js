import { showAllFiles } from "./utils/showAllFiles";
import { filterFiles } from "./utils/filterFiles";
import { executeCommand } from "./utils/executeCommand";
import path from "path";
import fs from "fs";

export async function executeBuildTest(folderPath: string): Promise<void> {
  const files = fs.readdirSync(folderPath);
  const filteredFiles = filterFiles(files);

  showAllFiles(filteredFiles);

  for (let i = 0; i < filteredFiles.length; i++) {
    const a = async (): Promise<"success" | null> => {
      try {
        const result = await executeCommand(
          path.join(folderPath, filteredFiles[i]),
          filteredFiles[i]
        );
        console.log(result);
        return "success";
      } catch (e) {
        console.error(e.message);
        return null;
      }
    };
    if ((await a()) !== "success") {
      return;
    }
  }
}
