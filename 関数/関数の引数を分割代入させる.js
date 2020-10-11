//引数の分割代入

function addPrefix(prefix, ...words) {
  //関数名:addPrefix 仮引数: 第１引数＿prefix 第２引数＿...words(展開演算子...)で第１引数以降の配列を纏める
  const prefixedWords = []; //展開演算子を入れるための空の配列を作成
  for (let i = 0; i < words.length; i++) {
    //for文で回す i = 引数の数と同じになるので、要素のlength===引数の数
    //
    prefixedWords[i] = prefix + words[i]; //第１引数＿prefix（”めっちゃ”） 第２引数＿...words("うんこ〜以降の要素を分割されて代入される")
  } //それらが 関数名addPrefixの中の変数 prefixWordsに代入される
  return prefixedWords; //戻り値として返され、関数外でも使用できる
}

console.log(addPrefix("con", "verse", "vex")); //["converse", "convex"]
console.log(
  addPrefix(
    "めっちゃ",
    "うんこ",
    "うんこぶり",
    "うんこぶりぶり",
    "うんこぶりぶりぶり"
  )
); //["うんこぶりぶり〜"]

//デフォルト引数
function f(a, b = "default", c = 3) {
  return `${a} - ${b} - ${c}`;
}

console.log(f(5, 6, 7)); //5 - 6 - 7
console.log(f(5, 6)); //5 - 6 - 3
console.log(f(5)); //5 - default - 3
console.log(f()); //undefined - default - 3

//引数に何も指定が無い場合はundefinedが返されるが、その場合に使われるデフォルト引数というものを設定できる
