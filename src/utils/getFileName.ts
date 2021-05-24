import path from "path";

export function getFileName(filename: string): string {
  const extension = path.extname(filename);
  const file = path.basename(filename, extension);
  return file + extension;
}
