const arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log("push:", arr);

arr.pop();
console.log("pop:", arr);

arr.shift();
console.log("shift:", arr);

arr.unshift(1);
console.log("unshift:", arr);

const sliced = arr.slice(1, 3);
console.log("slice:", sliced);

const concatenated = arr.concat([6, 7]);
console.log("concat:", concatenated);

console.log("indexOf:", arr.indexOf(3));

console.log(
  "findLastIndex:",
  arr.findLastIndex((x) => x > 3)
);

console.log("lastIndexOf:", arr.lastIndexOf(2));

const reducedRight = arr.reduceRight((acc, val) => acc + val, 0);
console.log("reduceRight:", reducedRight);

arr.copyWithin(0, 2, 4);
console.log("copyWithin:", arr);

const reversed = arr.toReversed();
console.log("toReversed:", reversed);

const spliced = arr.toSpliced(1, 2, 7, 8);
console.log("toSpliced:", spliced);

console.log(
  "findIndex:",
  arr.findIndex((x) => x > 4)
);

const sorted = arr.toSorted();
console.log("toSorted:", sorted);

console.log("toString:", arr.toString());

console.log(
  "findLast:",
  arr.findLast((x) => x < 4)
);

console.log("includes:", arr.includes(4));

const reduced = arr.reduce((acc, val) => acc + val, 0);
console.log("reduce:", reduced);

const filtered = arr.filter((x) => x > 3);
console.log("filter:", filtered);

arr.splice(1, 2, 9);
console.log("splice:", arr);

arr.reverse();
console.log("reverse:", arr);

console.log(
  "every:",
  arr.every((x) => x > 0)
);

console.log("valueOf:", arr.valueOf());

for (const [index, value] of arr.entries()) {
  console.log(`entries: ${index} -> ${value}`);
}

arr.forEach((x) => console.log("forEach:", x));

console.log(
  "some:",
  arr.some((x) => x > 8)
);

console.log("isArray:", Array.isArray(arr));

delete arr[2];
console.log("delete:", arr);
