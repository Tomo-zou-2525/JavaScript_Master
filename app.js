// オブジェクトの基本;
// カスタムコンストラクタ関数で作られたオブジェクト名は、最初は大文字にすべし

/* new演算子とコンストラクタ関数でのインスタンス化・及びネイティブコンストラクタでのオブジェクト化 */
let myNumber = new Number(29);
let myString = new String("Tomoya");
let myBoolean = new Boolean(true);
let myObject = new Object();
let myArray = new Array("unko", "tinko");
let myFunction = new Function("x", "y", "return x*y");
let myDate = new Date();
let myRegExp = new RegExp("\bt[a-z]+\b");
let myError = new Error("Error!");

console.log(myNumber.constructor);

// 通常はリテラルを使用してオブジェクトを設定する
let myFunction = function(x, y) {
  return x * y;
};

/*
ただ、数値・文字列・真偽値をリテラルとしてオブジェクトを作ると、返される値はプリミティブ値として生成される
このnum str bolの値がオブジェクトとして使用されようとするとき、初めてオブジェクトの機能が生成される
が、そのメソッドが実行された後はラッパーオブジェクトを破棄し、プリミティブ型に戻る
*/
