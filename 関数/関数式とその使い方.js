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

/* 関数の実行方法
・関数として
・メソッドとして
・コンストラクタとして
・apply()もしくはcall()を使って
*/

// 関数
var myFunction = function() {
  return "foo";
};
console.log(myFunction()); // 出力：'foo'

// メソッド
var myObject = {
  myFunction: function() {
    return "bar";
  }
};
console.log(myObject.myFunction()); // 出力：'bar'

// コンストラクタ
var Cody = function() {
  this.living = true;
  this.age = 33;
  this.gender = "male";
  this.getGender = function() {
    return this.gender;
  };
};
var cody = new Cody(); // newとともにCodyコンストラクタを実行することによりインスタンスが生成される
console.log(cody); // codyオブジェクトとそのプロパティを出力

// apply()とcall()
var greet = {
  runGreet: function() {
    console.log(this.name, arguments[0], arguments[1]);
  }
};

var cody = { name: "cody" };
var lisa = { name: "lisa" };

// greetオブジェクトのrunGreetメソッドをcodyオブジェクトから呼び出しているように実行
greet.runGreet.call(cody, "foo", "bar"); // 出力：cody foo bar

// lisaオブジェクトの中から呼び出しているように実行
greet.runGreet.apply(lisa, ["foo", "bar"]); // 出力：lisa foo bar

/* call()とapply()実行時のパラメータの渡し方の違いに注目 */
