/* inputタグに記入した文字をresultクラス全てに反映させる */
function showInputValue() {
    let input = document.querySelector(".inputValue");
    let results = document.querySelectorAll(".result");
  
    results.forEach(function(result) {
      result.innerHTML = input.value;
    });
  }
  
// window.onload = function() {
//     let input = document.querySelector(".inputValue");
//     let results = document.querySelectorAll(".result");
    
//     // クエリパラメータから値を取得し、inputタグのvalueに設定
//     const urlParams = new URLSearchParams(window.location.search);
//     const text = urlParams.get('text');
//     input.value = text;
    
//     // resultクラスに値を反映
//     results.forEach(function(result) {
//       result.innerHTML = text;
//     });
//   };

    /* クリックしたページネーションの色を維持 */
    document.addEventListener("DOMContentLoaded", function() {
      let pages = document.querySelectorAll(".c-page--number");
      
      for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener("click", function() {
          let currentPage = this;
          
          // すべてのページ要素からactiveクラスを削除
          for (let j = 0; j < pages.length; j++) {
            pages[j].classList.remove("onColor");
          }
          
          // クリックされたページ要素にactiveクラスを追加
          currentPage.classList.add("onColor");
        });
      }
    });
    