export function filterFiles(filesList: string[]): string[] {
  const filterFilesList: string[] = [];
  for (let i = 0; i < filesList.length; i++) {
    if (filesList[i].split(".").pop() === "js") {
      filterFilesList.push(filesList[i]);
    }
  }
  return filterFilesList;
}
