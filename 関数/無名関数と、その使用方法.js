/* 無名関数
関数の呼び出しを引数で行いたい場合（他の関数に引数として渡したい場合）
*/

// function(){ console.log('hi'); }; // 無名関数式

// 無名関数を実行するための関数
var sayHi = function(f) {
  f(); // 引数として渡された関数を実行 - 引数は関数である必要がある
};

// 関数に別の無名関数を引数として渡して実行
sayHi(function() {
  console.log("hi");
}); // 出力：'hi'

// 関数宣言を使って、定義される前に関数を実行する（関数の巻き上げ）

// 例1

var speak = (function() {
  sayYo(); // sayYo()はまだ定義されていないが、呼び出すことができる
  function sayYo() {
    console.log("Yo");
  }
})(); // 即時実行

// 例2

console.log(sum(2, 2)); // まだ定義されていないsum()を呼び出すことができる
function sum(x, y) {
  return x + y;
}

//これは関数式で定義された関数は巻き上げられない、関数宣言のみ
