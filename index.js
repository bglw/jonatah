#! /usr/bin/env node

var ratings = {
  chicken: 0,
  pork: 5
};

export const rate = function (item) {
  return ratings[item] ?? 2.5
};

if (process.argv[2]) {
  console.log(ratings[process.argv[2]] ?? `No rating for ${process.argv[2]}`);
}
