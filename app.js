/* 関数の基本・おさらい
関数の定義・４種類
・関数コンストラクタ
・関数宣言
・関数式（無名）
・関数式（名前つき）
*/

//関数コンストラクタ＿実際にこの方式が使われることはない
let addConstructor = new Function("x", "y", "return x + y");

//関数宣言_function文
function addStatement(x, y) {
  return x + y;
}

//関数式（無名）
let addExpression = function(x, y) {
  return x + y;
};

//関数式（名前付き）＿関数内で関数自身を指定する場合に使用
let addNameExpression = function addNameExpression(x, y) {
  return x + y;
};

//関数式のパターン（無名）
let add = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "pass in numbers";
  }
  return x + y;
};
console.log(add(3, 2));
console.log(add("3", "2"));
