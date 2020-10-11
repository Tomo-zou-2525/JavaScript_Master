//分割代入＿＿オブジェクトや配列を複数の変数に簡単に分割できる

/*シンプルな方法*/
const obj1 = { b: 2, c: 3, d: 4 };
console.log(obj1.b, obj1.c, obj1.d); // 2 3 4

const { a, b, c } = obj1; // 分割代入
console.log(a, b, c); // undefined 2 3

console.log("----------------------------------------------------");

/*()で囲むパターン*/
const obj2 = { e: 4, f: 5, g: 6 };
console.log(obj2.e, obj2.f, obj2.g); // 4 5 6

let e, f, g;
//()で囲む必要がある
({ e, f, g } = obj2);
console.log(e); // 4
console.log(f); // 5
console.log(g); // 6

//これはエラーになる_左辺がブロック{}として認識されるため
// { e, f, g } = obj2;

console.log("----------------------------------------------------");

/* 分割して代入 */
const arr1 = [1, 2, 3];
//順番に代入されるので
let [x, y] = arr1;
console.log(x); // 1
console.log(y); // 2

console.log("----------------------------------------------------");

/* 代入した後、残りをまとめて新しい配列へ */
const arr2 = [10, 20, 30, 40, 50];

let [o, p, ...rest] = arr2;
console.log(o); // 10
console.log(p); // 20
console.log(rest); //[30, 40, 50]
