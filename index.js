/* bgm video 音量の初期設定（デフォルトは1） */
const audio_volume = function () {

  const bgm = document.getElementById("bgm");
  bgm.volume = 0.1;

  const movie = document.getElementById("movie");
  movie.volume = 1;
}
window.addEventListener('DOMContentLoaded', function () {
  audio_volume();
}, false);

$(function () {
  $('#movie_modal_area').fadeIn();

  $('#movie_ok').click(function () {
    $('#movie_modal_area').fadeOut();
    $('body').css('overflow-y', 'auto');
    document.getElementById("movie").play()
    document.getElementById("bgm").play()
  });

  $('#movie_no').click(function () {
    $('#movie_modal_area').fadeOut();
    $('body').css('overflow-y', 'auto');
  });
});


// カウントダウン
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

}, 1000) //1秒間に1度処理

//scrollしたらフェードアップ
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up_title, .scroll_up, .scroll_up_text');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});