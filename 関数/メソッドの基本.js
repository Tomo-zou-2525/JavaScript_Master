/*
オブジェクトのプロパティとして指定される関数＝メソッド
*/

//例 マルクス
const mlks = {
  name: "malks",
  type: "racer",
  move: function() {
    //これ
    return "Year!!";
  }
};

const mah = {
  名前: "マッハ",
  職業: "レーサー",
  動き: function() {
    return "走るぜ";
  }
};

console.log(mlks);
console.log(mah);
console.log(mlks.move());
console.log(mah.動き());
