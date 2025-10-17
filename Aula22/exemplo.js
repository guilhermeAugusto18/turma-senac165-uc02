let array = [1, "tres", false, {chave:"valor"}];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array.length);

array.unshift();
array.push();
array.shift();
array.pop();

const array02 = [3, 5, 6, 90];

const map01 = array02.map((x)=> x * 2);
console.log(map01);