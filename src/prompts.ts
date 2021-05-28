// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { prompt } from "enquirer";
import { executeBuildTest } from "./main";

// Asks the user directory

const promptMessage = [
  "Whats the directory folder you want to check?",
  "Do you have a file you want to ignore?",
  "Type the filename you want to ignore",
];

interface responseObject {
  folderDirectory: string;
  wantIgnore: boolean;
}

interface responseIgnoreObject {
  ignoreFileList: string[];
}

export async function initiatePrompt(): Promise<void> {
  const response: responseObject = await prompt([
    {
      type: "input",
      name: "folderDirectory",
      message: promptMessage[0],
    },
    {
      type: "Confirm",
      name: "wantIgnore",
      message: promptMessage[1],
    },
  ]);
  const folderDirectory = response.folderDirectory;
  if (response.wantIgnore === true) {
    const askIgnoreFiles: responseIgnoreObject = await prompt([
      {
        type: "List",
        name: "ignoreFileList",
        message: promptMessage[2],
      },
    ]);
    // Initate build test by ignoring files.
    const ignoredFiles = askIgnoreFiles.ignoreFileList;
    await executeBuildTest(folderDirectory, ignoredFiles);
  } else {
    executeBuildTest(folderDirectory);
  }
}
