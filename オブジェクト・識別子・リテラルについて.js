//空のオブジェクトを生成
const obj = {};

//colorプロパティ・文字列リテラルを指定
obj.color = "黄色";

/*[]ブランケット表記・プロパティ名を文字列で指定する際に使われる
  計算値によるメンバーアクセスと呼ぶ
*/
obj["not an identifier"] = 3;

//オブジェクトのメンバーアクセスによる表記のため、『.』は使わない
console.log(obj["not an identifier"]);

//通常のプロパティの呼び出し
console.log(obj.color);

//プロパティの呼び出しの特殊な方法
console.log(obj["color"]);

//設定値にない値はundefined
console.log(obj.size);

// []表記の識別子が判断できないためエラー
console.log(obj[color]);
