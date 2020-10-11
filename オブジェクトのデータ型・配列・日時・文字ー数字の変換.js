//配列...０で始まる・様々な関数を持つ
const q = [1, 2, "a", 4, 5];
console.log(q);

q[2] = 3;
console.log(q);

//現在の日時を取得
const now = new Date();
console.log(now);

//指定した日時でも代入できる
const birthday = new Date(1990, 10, 05, 08, 00);
console.log(birthday);

//正規表現

//Map Set
//ケースバイケースで便利だぞ

/*文字列から数値への変換
１・Numberオブジェクトのコンストラクタ関数を使う
*/
const numStr = "33.3";
const num = Number(numStr);

/*
２・parseInt parseFloat
  数値を解析する際の基数を指定（１６進数とか）できるので、必ず指定しよう
  また、数値意外の情報は無視するため、複雑な計算に向く
*/
const a = parseInt("16 volts", 10);
console.log(a);

const b = parseInt("3a", 16);
console.log(b);

const c = parseFloat("15.5 kph");
console.log(c);

//↑ここまで文字列を数字に変換させる表現
