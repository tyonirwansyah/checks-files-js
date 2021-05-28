import { showAllFiles } from "./utils/showAllFiles";
import { filterFiles } from "./utils/filterFiles";
import { executeCommand } from "./utils/executeCommand";
import { traverseFiles } from "./utils/traverseFiles";
import { ignoreFiles } from "./utils/filterIgnoreFiles";

export async function executeBuildTest(
  folderPath: string,
  _ignoreFile: string[] | null = null
): Promise<void> {
  const filesArray: string[] = [];
  const fileNamesArray: string[] = [];

  traverseFiles(folderPath, filesArray, fileNamesArray);
  const filteredFiles = filterFiles(fileNamesArray);
  const filteredDirFiles = filterFiles(filesArray);

  if (_ignoreFile) {
    ignoreFiles(_ignoreFile, filteredDirFiles, filteredFiles);
  }

  showAllFiles(filteredFiles);

  for (let i = 0; i < filteredDirFiles.length; i++) {
    const a = async (): Promise<"success" | null> => {
      try {
        const result = await executeCommand(
          filteredDirFiles[i],
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
