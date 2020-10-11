//空のオブジェクトを生成
const obj = {};

const SIZE = Symbol();

obj[SIZE] = 8;

console.log(obj[SIZE]);
console.log(obj);

obj.SIZE = 12;
console.log(obj.SIZE);
console.log(obj["SIZE"]);
console.log(obj[SIZE]);
console.log(obj);

//ここで大事なのは、シンボルのリテラルとプロパティの値は別である。という点
