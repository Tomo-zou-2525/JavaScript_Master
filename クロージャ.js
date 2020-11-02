"use strict";

function hello() {
  function child() {
    console.log("ワイはhelloの子供やで");
  }
  return child;
}

function receive(v) {
  console.log("引数に代入されたxを表示するぞ");
  v(); //結局、これはchildの関数を有したhello関数を代入されたxである
}

//hello関数を変数xに代入
const x = hello();
// x();

//receive関数の引数にxを代入、呼び出してみる
receive(x);
