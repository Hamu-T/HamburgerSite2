/* inputタグに記入した文字をresultクラス全てに反映させる */
function showInputValue() {
    let input = document.querySelector(".inputValue");
    let results = document.querySelectorAll(".result");
  
    results.forEach(function(result) {
      result.innerHTML = input.value;
    });
  }