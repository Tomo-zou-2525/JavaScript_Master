//論理値の変換

/*
演算子（！）を2回使えば、どの値も希望する論理値が入手できる、という点を理解しておく
1回使っただけでは値が論理値に変換されるだけで、求めた値の反対の値になる。もう１回使う事で、期待する値となる
*/

const n = 0;
console.log(n);

const a = !n;
console.log(a);

const b = !!n;
console.log(b);

const c = Boolean(n);
console.log(c);

const now = new Date().getDay();
console.log(now);
