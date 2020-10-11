/* 関数の引数 */
function avg(a, b) {
  //仮引数
  return (a + b) / 2; //戻り値
}

//プリミティブは値をコピーする
//オブジェクトは値を参照する

function f(o) {
  console.log(` fの中(２つの代入の前) : o.message="${o.message}"`); //ここまでは'初期値'

  o.message = "fで最初にセットされた"; //この時点で、'fで〜'の値が入った、11行目のoとは違う、o.message =  'fで〜' のオブジェクトが生まれる
  console.log(` fの中(２つの代入の間) : o.message="${o.message}"`);

  //ここから
  o = {
    message: "新しいオブジェクト"
  };
  console.log(` fの中(２つの代入の後) : o.message="${o.message}"`);
  console.log(o.message);
  //ここまでが"新しいオブジェクト"となる
  console.log("-----------------------------------------------");
  return o;
}

let o = {
  message: "初期値"
};

console.log(` fの呼び出し前 : o.message="${o.message}"`); //o.message = 初期値
f(o); //関数fが実行
console.log(` fの呼び出し後 : o.message="${o.message}"`); //o.message = fで最初にセットされた
/*
オブジェクトは値を参照する
これは、コピーした時点で複製されるのか
参照された際に作成されるのか
値の保存の仕方が違うので注意
*/
