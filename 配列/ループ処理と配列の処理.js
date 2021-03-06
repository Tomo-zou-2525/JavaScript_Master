// 配列の基本

/*
・0から始まる
・異なるデータ型が混在できる
・[]で入力し、取り出すときも[]
・lengthプロパティで、要素の数を取り出すことができる
・存在しないインデックス番号を追加すると、要素が増える。中身は指定しないとundefinedとなる
*/

//破壊的なメソッド・新しい配列を返すメソッド＿やりながら覚えるしかない
//面食らったが、メソッドは分割したもの、されたもの、両方出るから注意
/*
・pop     最後削除              ・concat    複数の配列をバラバラにして末尾に追加
・push    最後追加              ・slice     元の配列から更に配列を作る＿(引数１: start 引数２: end)間の配列を作る
・shift   頭追加                ・splice    突っ込んで増やす、または消す。＿(引数１:変更開始点  引数２: 削除する数  引数３:追加する要素)
・unshift 頭削除                ・copyWithin  指定した場所をコピーして突っ込んで上書き_(引数１:どこコピー？  引数２: どこからコピー？  引数３:どこまでコピー？)
・fill    複数の要素を指定＿Arrayと同時に使えば初期値も決めることができる
・reverse  配列の要素を全て逆順に       ・sort   配列の並び替え
*/

let a = a.slice[2.3];

let arr = new Array(5).fill(1); //lengthが５の配列を生成、初期値は全て１

//配列の検索
//☑︎指定した関数が呼び出される時、その関数には
//要素そのもの  インデックス番号  配列そのも  が付与される
/*
・indexOf     指定した値が合致する( === )要素を持つ最初のインデックスを返す__lastIndexOfもあるよ
・findIndex   オブジェクトやら検索条件が細かく指定できる
・find        findIndexと同じだが、返す結果が配列の中身

ー配列内に特定の要素があるかどうか、それだけ知りたい場合
.some     指定の条件があればtrue  なければfalse
.every    動きはsomeと同じだが、everyは配列全体を検索する・１つでも条件にそぐわない要素があればfalseを返すので要素の前チェックには使えない

・map     いろんな事ができる＿配列内の要素を変換＿探したり、計算した結果を返したり
・filter  mapと同じ動きをするが、こちらは削除

・reduce  マジでいろんなことができる＿配列を単一の形に纏める

・join    配列の各要素をまとめて1つの文字列を作る
*/
