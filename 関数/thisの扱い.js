/* thisの扱い
thisはオブジェクト内の変数を拘束:bindする
しかし、オブジェクトがネストするような関数にはthisのバインドが期待しない動きをする時がある
その場合、thisを該当のスコープ内で一旦変数に代入してやり、必要な時に使用するようにする
*/

// これでは動かない＿thisの拘束がexではないから

const ex = {
  name: "Julia",
  greetBackwards: function() {
    function getReverseName() {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    } //getReverseNameの定義終わり

    return `${getReverseName()} si eman ym ,olleH`;
  }
};
console.log(ex.greetBackwards());

//これで動く
const exe = {
  name: "Julia",
  greetBackwards: function() {
    const self = this; //thisを覚えておく

    function getReverseName() {
      let nameBackwards = "";
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    } //getReverseNameの定義終わり

    return `${getReverseName()} si eman ym ,olleH`;
  }
};
console.log(exe.greetBackwards());
