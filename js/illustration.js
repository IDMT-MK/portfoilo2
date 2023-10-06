// When the browser is ready...
$(function() {
  // validate
  $("#contact").validate({
      // Set the validation rules
      rules: {
          name: "required",
          email: {
              required: true,
              email: true
          },
          message: "required",
      },
      // Specify the validation error messages
      messages: {
          name: "Please enter your name",
          email: "Please enter a valid email address",
          message: "Please enter a message",
      },
      // submit handler
      submitHandler: function(form) {
        //form.submit();
         $(".message").show();
         $(".message").fadeOut(4500);
      }
  });
});

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
duration: 1000,//時間指定(1000＝1秒)
strokeWidth: 0.2,//進捗ゲージの太さ
color: '#555',//進捗ゲージのカラー
trailWidth: 0.2,//ゲージベースの線の太さ
trailColor: '#bbb',//ゲージベースの線のカラー
text: {//テキストの形状を直接指定				
  style: {//天地中央に配置
    position: 'absolute',
    left: '50%',
    top: '50%',
    padding: '0',
    margin: '-30px 0 0 0',//バーより上に配置
    transform:'translate(-50%,-50%)',
    'font-size':'1rem',
    color: '#fff',
  },
  autoStyleContainer: false //自動付与のスタイルを切る
},
step: function(state, bar) {
  bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
$("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
$(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
$(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
$("#splash").fadeOut();//#splashエリアをフェードアウト
});

lightbox.option({
  'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
  'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})

//ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用

function fadeAnime(){
  // flipLeft
  $('.gallery li').each(function(){ 
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
          $(this).addClass('flipLeft');
      }else{
          $(this).removeClass('flipLeft');
      }
  });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  
   