/* スコープの話 */

//グローバルスコープ

//よくない例
let name = "tomo";
let age = 29;

function greet1() {
  console.log(`こんにちは, ${name}`);
}

function birthYear1() {
  return new Date().getFullYear() - age;
}

greet1();
console.log(birthYear1());

//オブジェクトにして、他から参照されにくくしましょう。という話
let user1 = {
  name: "Tomoya",
  age: 30,
  type: "falme"
};

function greet2() {
  console.log(`こんにちは, ${user1.name}`);
}

function birthYear2() {
  return new Date().getFullYear() - user1.age;
}

greet2();
console.log(birthYear2());

//さらに踏み込んで、関数に引数をとるといいよね
let user2 = {
  name: "Genya",
  age: 39,
  type: "falme"
};

function greet3(person) {
  console.log(`こんにちは, ${person.name}`);
}

function birthYear3(person) {
  return new Date().getFullYear() - person.age;
}

greet3(user2);
console.log(birthYear3(user2));
