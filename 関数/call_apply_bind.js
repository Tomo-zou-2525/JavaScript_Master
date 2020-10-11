/*  thisのタイミング
call(オブジェクトと関係のないスコープにいたとしても、callプロパティを使うことでthisが該当の命名変数・定数を探して出力してくれる)
_18行目を参考に

apply(配列に対して使用する引数の形が[..., ..., ...]みたいになる)
既に配列が用意されていて、引数としてそのまま使いたい場合なんかに便利
_32行目を参考に

bind(thisの値をある関数と永続的に結びつける)
バグの原因にもなりやすいが、特定の場面で非常に便利
例） 引数の値は変えたくないが、関数としての機能を新しくしたい場合などに使われる
_46行目を参考に
*/

//call

const bruce = { name: "Bruce" };
const monica = { name: "Monica" };

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.job = occupation;
}

console.log(bruce);
update.call(bruce, 1949, "singer");
console.log(bruce);

console.log(monica);
update.call(monica, 1942, "actress");
console.log(monica);

//apply

const matt = { name: "Matt" };
const nancy = { name: "Nancy" };

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.job = occupation;
}

console.log(matt);
update.apply(matt, [1949, "singer"]);
console.log(matt);

console.log(nancy);
update.apply(nancy, [1942, "actress"]);
console.log(nancy);

//bind

const bob = { name: "Bob" };
const kei = { name: "Kei" };

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.job = occupation;
}

const updateBob = update.bind(bob);

console.log(bob);
updateBob(bob, 1949, "singer");
console.log(bob);

console.log(kei);
updateBob.call(kei, 1942, "actress");
console.log(kei);
console.log(bruce);
