const getCelcius = (f) => (f - 32) * 0.56;
console.log(`The temperature is ${getCelcius(95)} \xB0C`);

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

(function (a, b) {
  const length = a;
  const breath = b;
  const area = length * breath;

  console.log(
    `The area of a rectangle with a length of ${length} and a breath of ${breath} is ${area}`,
  );
})(35, 10);
