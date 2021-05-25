import fs from "fs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const absolutePath = process.cwd();
export const traverseFiles = function (
  absolutePath: string,
  filesDirectory: string[],
  fileName: string[]
): void {
  fs.readdirSync(absolutePath).forEach((file) => {
    const subpath = absolutePath + "/" + file;
    fileName.push(file);
    if (fs.lstatSync(subpath).isDirectory()) {
      traverseFiles(subpath, filesDirectory, fileName);
    } else {
      filesDirectory.push(absolutePath + "/" + file);
    }
  });
};
