// 比較演算子
/*
・数値を比較する際の留意点
NaN＿自信を含め、どの値とも等しくはならない
isNaN(x)_変数が数値かを判断する数値がある
xが数値でない場合はtrueを それ以外はfalseを返す
*/

console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(isNaN(NaN));
console.log(isNaN(3));
console.log(isNaN(3.6));
console.log(isNaN("aaa"));

// 条件演算子
const doIt = true;
const result = doIt ? "Yes, do it!" : "No! Didn't!!";
console.log(result);
//1つ目の値を評価し、trueなら2つ目、falseなら３つ目を返す

//代入演算子
const nums = [3, 5, 15, 7, 5];
let n,
  i = 0;

while (i < nums.length && (n = nums[i++]) < 10) {
  console.log(`10より小さい数字を発見:${n}`);
}
console.log(`10より大きい数字を発見:${n}`);
console.log(`未チェックの数字の個数:${nums.length - i}`);
