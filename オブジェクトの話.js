//オブジェクトの考え方

const s = "unko";
const s2 = s.toUpperCase();
console.log(s2);

// この『s』は文字列型のデータにも関わらず、関数的な動きをしている
// これは、関数toUpperCaseをプロパティとして持っているStringオブジェクトを一時的に生成し、使用されるとすぐに破棄されるから
// なので、５行目のcondole.logで呼び出されても空なのである

const s = "tinko";
s.rating = 3;
console.log(s.rating);

//一時的にJavaScript側が何を生成しているか、は知っておこうという話
