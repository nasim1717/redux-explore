const array = [1, 2, 3, 4, 5];

const result = array.reduce((previousResult, currentValue) => {
  return previousResult + currentValue;
}, 1);

console.log(result);
