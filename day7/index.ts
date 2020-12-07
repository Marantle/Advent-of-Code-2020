import { getLines } from '../util/todaysInput'
console.time("test");
const lines = getLines(7);

const bags = Object.fromEntries(lines.map(parse));

// part 1
let shinies = 0;
for (const bag in bags) {
  const shinyFound = magic(bag);
  if (shinyFound) {
    shinies++;
  }
}
console.log({ part1: shinies });

// part 2
const bagCount = magic2("shiny gold bag");

console.log({ part2: bagCount });

function magic(bagName: string) {
  const contents = bags[bagName];
  if (contents.some((child) => child.name.includes("shiny gold bag")))
    return true;
  else {
    for (const content of contents) {
      if (magic(content.name)) return true;
    }
  }
  return false;
}

function magic2(bagName: string) {
  const contents = bags[bagName];
  if (contents.length === 0) {
    return 0;
  }
  let bagCount = 0;
  for (const content of contents) {
    bagCount += content.count + content.count * magic2(content.name);
  }
  return bagCount;
}

type Contents = {
  name: string;
  count: number;
};

function parse(line: string): [string, Contents[]] {
  const match = /(^\w+ \w+ bag)?s contain (.*[^.])/gm.exec(line);
  const bagName = match[1];
  const rest = match[2];
  let contents = rest.split(", ");

  let parsedContents: Contents[] = [];

  if (!contents.includes("no other bags")) {
    parsedContents = contents.map((childBag) => {
      const reg = /^((\d) (\w+ \w+ bag))s?/gm.exec(childBag);
      return { name: reg[3], count: parseInt(reg[2]) };
    });
  }
  return [bagName, parsedContents];
}

console.timeEnd("test");
