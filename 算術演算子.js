//演算子と評価式
// let x, y;
// y = x = 3 * 5;
// console.log(y, x);

// 前置インクリメント
// 後置インクリメント
// 式の値が変わる

// 文字列の場合
// const s = "5";
//これは数字として評価される
// console.log(3 + +s);
//これは文字列として評価される
// console.log(3 + s);

//インクリメント演算子チェック
let z = 5;
console.log(z++ + z++); // ５ ＋ ６
console.log(z); //7 両辺とも＋される
console.log("---");

let x = 5;
console.log(x + x++); // 5 + 5
console.log(x); //6 片方のみ
console.log("---");

let y = 5;
console.log(y++ + y); // ５ ＋ ６
console.log(y); //6 左辺のみ
console.log("---");
console.log(z++ + ++z); // 20行目のz=7 → 7 + 8 = 16
console.log(z); // 9
console.log("---");
console.log(++z + ++z); // 20
console.log(z); // 11
console.log("---");
console.log(++z + z++); //24
console.log(z); // 13
console.log("-----");

let q = 10;
console.log(q-- + q--); //
console.log(q-- + --q); //

console.log(--q + --q); //
console.log(--q + q--); //
console.log(q); //
console.log("-----");

// 演算子の優先順位は()が最優先される
// 他に関しては、四則演算と同じであるが、参考表は確認されたし
