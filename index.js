const express = require('express') // expressをインポート
const path = require('path');
const app = express() // 初期化

app.use(express.urlencoded({
  extended: false
})); // req.bodyを使用可能にするおまじない。
app.use(express.static(path.join(__dirname, 'public'))); // public内のファイルを読み込む。

// app.get('/', function (req, res) { // Event driven（イベントドリブン）
//   console.log(req);
//   res.send('<h1>トップページ</h1>') // httpリクエストがあった際は、コールバック関数の中身だけが実行される。
// })

app.get('/about', function (req, res) { // Event driven（イベントドリブン）
  res.send('aboutページ') // httpリクエストがあった際は、コールバック関数の中身だけが実行される。
})

app.post('/api/v1/quiz', function (req, res) { // formのデータを受け取る（req.bodyに格納）　。 nameはinputのvalues属性の値。（取得するデータを紐付け）
  const answer = req.body.answer;
  if (answer === '2') {
    // res.send('<h1>正解</h1>');
    res.redirect('/correct.html');
  } else {
    // res.send('<h1>不正解だよ、ばか</h1>');
    res.redirect('/wrong.html');
  }
});

app.listen(3000, () => {
  console.log('I am running!');
})