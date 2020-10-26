/* ワークフロー
・HTML要素を配置
・各要素に識別子Idを付与
・JSファイルに定数を設定、中身は各識別子を付与させたもの
・button要素にaddEventListenerで動作＋動きをつける
・関数を定義、clickイベントで動作＋引数として関数を作成し、inputに入力されたものが(input.value)、displayの描画要素(display.innerHTML)に表示されるようにする。
*/
const input_field = document.getElementById("input_area");
const display = document.getElementById("display");
const button = document.getElementById("button");

button.addEventListener("click", function() {
  display.innerHTML = input_field.value;
});
