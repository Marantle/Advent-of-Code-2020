import fs from "fs";
import path from "path";

const filePath = path.resolve(__dirname, `../day${7}`, "input.txt");
const text = fs.readFileSync(filePath, "utf-8");
const lines = text.split(/\r?\n/);
const groups = text.split(/\r?\n\r?\n/);

const tempr1 = /(\d+)-(\d+) (\D): ([a-z]+)/gm.exec("hello") as RegExpExecArray;
const tempr2 = /^\d{9}$/gm.test("hello");
const tempr3 = ("adasikadas".match(new RegExp("ada", "g")) || []).length;

let mut1;
let mutI1 = 0;
let mutS1 = "";
for (const line of lines) {
}

let mut2;
let mutI2 = 0;
let mutS2 = "";
for (const group of groups) {
  let mut3;
  let mutI3 = 0;
  let mutS3 = "";
  for (const value of group) {
  }
}

console.log(text);
console.log(lines);
console.log(groups);
