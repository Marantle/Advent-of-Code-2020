import { getText } from "../util/todaysInput";

export const passports = getText(4).split(/\r?\n\r?\n/);

type Validator = (arg: string) => boolean;

//
const between = (min: number, max: number): Validator => (input: string) => {
  return parseInt(input) <= max && parseInt(input) >= min;
};

const ecl: Validator = (input: string) => {
  const rules = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  return rules.includes(input);
};

const hgt: Validator = (input: string) => {
  const thenum = input.match(/\d+/)[0];
  if (input.startsWith("cm")) {
    return between(150, 193)(thenum);
  } else {
    return between(59, 76)(thenum);
  }
};

const hcl: Validator = (input: string) => {
  return /^#[\d,a-z]{6}$/gm.test(input);
};
const pid: Validator = (input: string) => {
  return /^\d{9}$/gm.test(input);
};

const rules: [string, Validator][] = [
  ["byr", between(1920, 2020)],
  ["iyr", between(2010, 2020)],
  ["eyr", between(2020, 2030)],
  ["hgt", hgt],
  ["hcl", hcl],
  ["ecl", ecl],
  ["pid", pid],
];

// logic
let okCount1 = 0;
let okCount2 = 0;

for (let line of passports) {
  const fields = line.split(/[\r?\n,\s]/);

  let ok1 = true;
  let ok2 = true;
  for (let rule of rules) {
    const field = fields.find((value) => value.startsWith(rule[0] as string));
    if (!field) {
      ok1 = false;
      ok2 = false;
    } else {
      const fieldValue = field.split(":")[1];
      if (!rule[1](fieldValue)) {
        ok2 = false;
      }
    }
  }
  if (ok1) okCount1 += 1;
  if (ok2) okCount2 += 1;
}
console.log({ part1: okCount1 });
console.log({ part2: okCount2 });
