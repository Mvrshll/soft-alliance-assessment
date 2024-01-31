function createArray(N) {
  let newArr = [];
  for (let i = 1; i <= N; i++) {
    newArr.push(i);
  }
  return newArr;
}

let N = 10;
let arr = createArray(N);

const odd = [];
const axx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of axx) {
  if (num % 2 != 0) {
    odd.push(num);
  }
}
console.log(odd);

return odd;
