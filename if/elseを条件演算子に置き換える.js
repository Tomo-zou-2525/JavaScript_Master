/* if else を条件演算子を使った構文に変換 */

//if else文
if (isPrime(n)) {
  //素数かな？
  label = "素数やで";
} else {
  label = "素数とちゃうで";
}

//条件演算子の場合
label = isPrime ? "素数やで" : "素数とちゃうで";
