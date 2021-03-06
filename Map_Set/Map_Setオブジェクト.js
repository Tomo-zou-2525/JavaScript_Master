/* Map Set オブジェクト */

//Mapはオブジェクトと似ている・キーと値の対応関係

//Setは配列とよく似ているが、重複を許さない

/*  Mapを使う理由
・オブジェクトにはプロトタイプがあるので、意図しないマッピング（キーと値の対応）が生じる危険性がある
・オブジェクトでは、キーと値の数が把握しづらい
・キーは文字列、あるいはシンボルに限られるので、オブジェクトをキーとして値に対応しづらい

Mapには、上記の問題がおこらない
*/

// Mapオブジェクトの使い方

const user1 = {
  name: "太郎"
};

const user2 = {
  name: "花子"
};

const user3 = {
  name: "次郎"
};

const user4 = {
  name: "光宙"
};

//Mapオブジェクトの生成
const userRoles = new Map();

//setメソッドを使い、ユーザーとの役割の対応付けを行う
userRoles.set(user1, "ユーザー");
userRoles.set(user2, "ユーザー");
userRoles.set(user3, "管理者");

//メソッドsetはこのようにチェインする事が出来る
userRoles
  .set(user1, "ユーザー")
  .set(user2, "ユーザー")
  .set(user3, "管理者");

//配列の配列を渡して初期化もできる
const userRoles = new Map([
  [user1, "ユーザー"],
  [user2, "ユーザー"],
  [user3, "管理者"]
]);

//参照はgetメソッドを使い
userRoles.get(user1);

/* マップを使うと
オブジェクトの値を参照したい場合、例えばpropというプロパティを追加すると
元のオブジェクトも変わってしまう（obj→obj.prop）
Mapを使うと、
①propというMapオブジェクトを作る
②prop.set(obj)で記憶する
③prop.get(obj)で情報を引き出す

こうする事で、元のオブジェクトを汚さずにすむ
*/

/* WeakMap
  オブジェクトのインスタンスに対し、外から操作不可能なプライベートキーを保管するのに利用される。
*/

//ガーベッジコレクション
//CPUが動的に確保していたメモリを開放する機能のこと

/* Set
セットはデータの集合
重複を許さないので、例えば管理者、という重要な要素をもつデータ構造などに用いられる
const roles = new Set()
*/
/* WeekSet
オブジェクトだけを含める事ができる
*/
