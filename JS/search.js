/* inputタグに記入した文字をresultクラス全てに反映させる */
function showInputValue() {
    let input = document.querySelector(".inputValue");
    let results = document.querySelectorAll(".result");
  
    results.forEach(function(result) {
      result.innerHTML = input.value;
    });
  }

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
  