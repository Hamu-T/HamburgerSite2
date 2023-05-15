/* sidebarの開閉と上下のスクロールができるコード */

const toggleSidebarButton_1 = document.querySelector('.drawer-open');
const toggleSidebarButton_2 = document.querySelector('.drawer-close');
const drawer_1 = document.querySelector('.l-sidebar');
const drawer_2 = document.querySelector('.l-sidebar');
const shadow_1 = document.querySelector('.c-shadow');
const shadow_2 = document.querySelector('.c-shadow');
const no_scroll = document.querySelector('.c-no_scroll');

/* toggleSidebarButton クリック時にサイドバーの幅を取得 */
const deviceWidth = window.innerWidth;/* window幅を取得 */
const tabletWidth = deviceWidth * 0.5;/* window幅の50%を取得 */
const phoneWidth = deviceWidth * 0.8;/* window幅80%を取得 */

/* cssで使える変数に代入 */
document.documentElement.style.setProperty('--tablet-width', `${tabletWidth}px`);
document.documentElement.style.setProperty('--phone-width', `${phoneWidth}px`);

toggleSidebarButton_1.addEventListener('click', function() {
    drawer_1.classList.toggle('active');
    shadow_1.classList.toggle('active');
    no_scroll.classList.toggle('active');
});
/* 上下同じアクションだが別にしたら安定したので採用 */
toggleSidebarButton_2.addEventListener('click', function() {
    drawer_2.classList.toggle('active');
    shadow_2.classList.toggle('active');
    no_scroll.classList.toggle('active');
});

/* toggleSidebarButton クリック時にサイドバーを非表示にする */
document.querySelectorAll('.toggleSidebarButton').forEach(function(button) {
  button.addEventListener('click', function() {
    drawer_1.classList.remove('active');
    drawer_2.classList.remove('active');
    shadow_1.classList.remove('active');
    shadow_2.classList.remove('active');
    no_scroll.classList.remove('active');
  });
});

/* ウィンドウの幅が変更された場合にサイドバーを非表示にする */
window.addEventListener('resize', function() {
  const deviceWidth = window.innerWidth;
  const tabletWidth = deviceWidth * 0.5;
  const phoneWidth = deviceWidth * 0.8;
  document.documentElement.style.setProperty('--tablet-width', `${tabletWidth}px`);
  document.documentElement.style.setProperty('--phone-width', `${phoneWidth}px`);

  drawer_1.classList.remove('active');
  drawer_2.classList.remove('active');
  shadow_1.classList.remove('active');
  shadow_2.classList.remove('active');
  no_scroll.classList.remove('active');
});
