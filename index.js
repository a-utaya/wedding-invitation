// $(window).on('load', function () {
//   $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
//   $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
// });

let images = document.querySelectorAll(`.top_image`);

for (const [key, value] of Object.entries(images)) {

  value.animate(
    [
      {
        offset: 0.0,
        opacity: '0'
      },
      {
        offset: 0.1,
        opacity: '1'
      },
      {
        offset: 0.9,
        opacity: '1'
      },
      {
        offset: 1.0,
        opacity: '0'
      }
    ],
    {
      duration: 15000,
      delay: key * 5000,
      iterations: Infinity
    }
  );

}

let countdown = setInterval(function () {
  const now = new Date()  //今の日時
  const target = new Date("2023/3/11 10:00:00")
  const remainTime = target - now  //差分を取る（ミリ秒で返ってくる

  //指定の日時を過ぎていたら処理をしない
  if (remainTime < 0) return false

  //差分の日・時・分・秒を取得
  const difDay = Math.floor(remainTime / 1000 / 60 / 60 / 24)
  const difHour = Math.floor(remainTime / 1000 / 60 / 60) % 24
  const difMin = Math.floor(remainTime / 1000 / 60) % 60
  const difSec = Math.floor(remainTime / 1000) % 60

  //残りの日時を上書き
  document.getElementById("day").textContent = difDay
  document.getElementById("hour").textContent = difHour
  document.getElementById("min").textContent = difMin
  document.getElementById("sec").textContent = difSec

  //指定の日時になればカウントを止める
  if (remainTime < 0) clearInterval(countdown)

}, 1000)    //1秒間に1度処理
