const x = 5
const y = 6
var i = 'Firetruck'
z = true

function testNum(y) {
  let result;
  if (y == x) {
    result = 'they match';
  } else {
    result = 'no luck';
  }
  return result;
}

console.log(testNum(y));

const array1 = [x, y, i, z];

for (const element of array1) {
  console.log(element);
}