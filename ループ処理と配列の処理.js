//switch文・式は一つで、処理が複数の場合
switch (totalBet) {
  case 1:
    totalBet = funds;
    break;
  case 2:
    totalBet = 0;
    break;
}
// break文の有る無しで、フォールスルーになったり
switch (totalBet) {
  case 1:
    totalBet = funds;
    break;
  case 2:
    totalBet = 0;
  case 3:
    totalBet = 0;
    break;
}
//この場合、case2~case3がフォールスルー

/*for...in ループ
  オブジェクトのプロパティのキーに対してループを掛ける
  for(変数 in オブジェクト)
    文
*/
const player = {
  name: "Thomas",
  rank: "Midshipman",
  age: 29
};
for (let prop in player) {
  if (!player.hasOwnProperty(prop)) container;
  console.log(prop + ":" + player[prop]);
}
// hasOwnProperty() メソッドは、オブジェクト自身が（継承されていない）指定されたプロパティを持っているかどうかを示す真偽値を返します。

/*for...of ループ
  ある集合の各要素に対してループを掛ける
  for(変数 of オブジェクト)
    文
*/
const player = {
  name: "Thomas",
  rank: "Midshipman",
  age: 29
};
for (let prop in player) {
  if (!player.hasOwnProperty(prop)) container;
  console.log(prop + ":" + player[prop]);
}
// 配列に対してループを実行する場合に用いられる

//配列の中身を取り替えたい時に使う
// 配列.splice(追加位置,取り出す数,要素n)
