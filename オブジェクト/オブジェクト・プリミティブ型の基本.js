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

/* 総評
リテラルを用いたオブジェクト生成では、数値、文字列、booleanではプリミティブな値を返してしまう
ただ、その返された値を、後にメソッドなどに組み込むとラッパーオブジェクト成る物が生成されるが、それも役目を終えれば破棄される

数値、文字列、booleanでもnew演算子「new オブジェクト名（頭文字は大文字）」を使えばオブジェクトとして扱われる

・以上から、全ての値がオブジェクトのような振る舞いをする、という特徴がある

どのように生成したとしても、プリミティブ値は単一の要素としてあつかわれる
例えば、インスタンス X を別の変数 Y に代入したとしても、それは元の値と切り離され、コピーとして扱われる

・元のインスタンス X の値を変更しても、代入した値 Y は変更が同期しないのである

この２点の違いを理解しておこう
*/
