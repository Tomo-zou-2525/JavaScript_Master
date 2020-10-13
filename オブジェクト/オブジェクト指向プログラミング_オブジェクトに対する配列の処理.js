//  オブジェクト指向プログラミング

/*  オブジェクトと配列の違い
・配列＿配列には値があり、インデックス番号で要素にアクセスする
        順序がある
        要素を順番に表示したい場合はこちら

・オブジェクト＿プロパティがあり、文字列・シンボルを使いアクセスする
        順序がない
        こちらも一覧として列挙できるが、必ずとも意図した表示ができるわけではない・ということを覚えておこう
        キー: 値  といったセットでプロパティが成る

・では、オブジェクトとして配列を列挙する方法を見てみよう
 */

//  ①for...in

const SYM1 = Symbol(); //Symbolを設定
const o1 = {
  a: 1,
  b: 2,
  c: 3,
  [SYM1]: 4
}; //定数oを設定 配列の中にSymbol要素でユニークなプロパティを設定
for (let prop in o1) {
  //for...inでオブジェクトの中身を処理  for文の中身もhasOwnPropertyの構文である
  if (!o1.hasOwnProperty(prop)) continue;
  //定数oの中に、prop(プロパティの値はあるか？)...continueで続行
  console.log(`${prop}: ${o1[prop]}`);
  // オブジェクトの中身と、プロパティをループで表示
  //a: 1 b: 2 c: 3
}

console.log("for_in ---------------------------------");

//  ②Object.keys
const SYM2 = Symbol(); //Symbolを設定
const o2 = {
  d: 5,
  e: 6,
  f: 6,
  [SYM2]: 8
};
const propArray = Object.keys(o2);
console.log(propArray);
propArray.forEach(prop => console.log(`${prop}: ${o2[prop]}`));
console.log("Object.keys--------------------------------------");
/*
  hasOwnProperty...プロパティがあるかどうかを調べる
  使用例...APIのレスポンスに特定のデータが入っているかを調べる場合
           オブジェクトの指定の値が存在しない時は処理をキャンセルするとき
  構文）      オブジェクト.hasOwnProperty(キー名) ２６行目
  メソッド）  キー名 in オブジェクト              ２５行目

*/
let user = {
  name: "Tomo",
  age: 29,
  move: function() {
    console.log("できるかな？");
  }
};

const greet = function(person) {
  console.log(`こんにちは、${person.name}`);
};

const myAge = person => {
  console.log(`私は${person.age}歳です`);
};

const doIt = person => {
  return person.move();
};

greet(user);
myAge(user);
doIt(user);

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("age"));
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("adress"));

console.log(user.name != null);

console.log("name" in user);
