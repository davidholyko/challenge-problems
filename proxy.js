// create a handler for the proxy that will return the number multiplied by 100

const obj = {
  10: 10,
  11: 11,
  12: 12,
};

const handler = {};

const p = new Proxy(obj, handler);

console.log(p[10]); // logs 100
console.log(p[11]); // logs 110
console.log(p[11]); // logs 110
