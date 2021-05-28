export function ignoreFiles(
  ignoredFiles: string[],
  fileDirs: string[],
  fileNames: string[]
): void {
  while (fileNames.some((v) => ignoredFiles.includes(v))) {
    for (let i = 0; i < fileNames.length + 1; i++) {
      if (includesIgnoreFile(ignoredFiles, fileNames[i])) {
        fileDirs.splice(i, 1);
        fileNames.splice(i, 1);
      }
    }
  }
}

const includesIgnoreFile = (ignoredFiles: string[], fileName: string) => {
  for (let i = 0; i < ignoredFiles.length; i++) {
    if (ignoredFiles[i].includes(fileName)) {
      return true;
    }
  }
};
