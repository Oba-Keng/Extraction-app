import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dataDirectory = path.join(process.cwd(), "data");

export function getData() {
  const fileNames = fs.readdirSync(dataDirectory);

  const allData = fileNames.map(fileName => {
    // Remove ".txt" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read text file as string
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });

  return allData;
}
