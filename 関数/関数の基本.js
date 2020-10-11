/* 関数 */

// 呼び出し() と 参照 の違い
function getUnko() {
  return "三十路になって♩ クソ漏らす♫\nハイッ!\nハイッ!!\nハイハイハイッ!!!"; //戻り値を返す
}

console.log(getUnko()); //returnが表示
console.log(getUnko); //Function名が表示

console.log(
  "----------------------------------------------------------------------"
);

/* 関数を変数に代入することもできる */
const u = getUnko;
console.log(u());

const un = getUnko();
console.log(un);
//()はどっちでも可

console.log(
  "----------------------------------------------------------------------"
);

/* 関数を オブジェクトの プロパティとして呼べる */
const unko = {}; //空の配列を用意
unko.f = getUnko; //定数unkoのプロパティ f に、オブジェクトとしてgetUnko()を設定

console.log(unko.f());
console.log(
  "----------------------------------------------------------------------"
);
/* 配列の中に仕込むこともできる */
let unti = [1, 2, 3, 4, 5];
unti[2] = getUnko;
console.log(unti[2]());
console.log(unti);
//配列を指定してもよし
console.log(
  "----------------------------------------------------------------------"
);
const bigUnko = unti[2]();
console.log(bigUnko);
//それを変数に入れてもよい

//プリミティブは値をコピーする
//オブジェクトは値を参照する

function f(o) {
  console.log(` fの中(２つの代入の前) : o.message="${o.message}"`);
  o.message = "fで最初にセットされた";
  console.log(` fの中(２つの代入の間) : o.message="${o.message}"`);
  o.message = "新しいオブジェクト";
  console.log(` fの中(２つの代入の後) : o.message="${o.message}"`);
}

let o = {
  message: "初期値"
};

console.log(` fの呼び出し前 : o.message="${o.message}"`);
f(o);
console.log(` fの呼び出し後 : o.message="${o.message}"`);
