/* thisについて
関数が生成された際、このキーワードの値が設定される
このthisの値は、関数を呼びだすオブジェクトのリンクである

適用範囲としてはラップされたオブジェクトを指す
このthisの値は、関数が呼ばれたコンテクストによって決定する
例外として、ネストした際のthisの参照先は、グローバルオブジェクトを指す
が、この挙動は期待した動作ではない
ので、この場合はスコープチェーンを使用する

call()やapply()を使ってthisの値をオーバライド（上書き）できる

*/

//以下のコードは、スコープチェーンを端的に表したコードである
//zの値はそのままローカルスコープ、yはzのスコープチェーン、xはローカルスコープ
var x = 10;
var foo = function() {
  var y = 20;
  var bar = (function() {
    var z = 30;
    console.log(z + y + x); // zはローカルスコープ、yとzはスコープチェーンで発見
  })();
};

foo(); // 出力：60
