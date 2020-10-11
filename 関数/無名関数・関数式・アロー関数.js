/*  関数式と無名関数
    通常の関数の記述は、関数を呼び出す際の名前と、そのメソッドを指定する
    無名関数＿関数名は付けずに、メソッドのみ指定
    では、その無名関数の呼び出しは？
    その際に用いられるのが、＿関数式＿である
*/

//ほぼ同じ
const f = function() {
  console.log("関数式");
};
// この関数を呼び出す際は_f()_となる

//また、定数に代入した際はそちらが優先される
const g = function f() {
  console.log("関数式の応用");
};
console.log(g());

//上記の状況から、_f_の関数を使いたい場合もあろう
//そんなときは、再起呼び出しを使う

/*  アロー関数 （無名関数ですわ）
・functionを省略できる
・引数が１つならば()を省略できる
・関数の式が1つならば、{}, return を省略できる
*/

const o = {
  //定数oを定義
  name: "Julia", //nameオブジェクト・プロパティ（"Julia"）
  greetBackwards: function() {
    //関数名greetBackwards を定義
    const getReverseName = () => {
      //ここアロー関数ね
      console.log(this); //thisを確認
      let nameBackwards = ""; //変数nameBackwardsにnull文字を代入
      for (let i = this.name.length - 1; i >= 0; i--) {
        //for文で 変数 i に現在の文字列の長さ-1を代入; それが０になるまでループ;  都度 i を -1する
        nameBackwards += this.name[i]; //nameBackwardsに現在のnameのインデックス番号の値を加えて代入
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  }
};

console.log(o.greetBackwards());
