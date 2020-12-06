import fs from "fs";
import path from "path";

export const getText = (day: number): string => {
  const filePath = path.resolve(__dirname, `../day${day}`, "input.txt");
  if (fs.existsSync(filePath)) {
    console.log(`Day ${day}:`)
    return fs.readFileSync(filePath, "utf-8");
  } else {
    throw new Error("Could not find file: " + filePath);
  }
};

export const getLines = (day: number) => {
  return getText(day).split(/\r?\n/);
};
