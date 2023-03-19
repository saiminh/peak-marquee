/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
function initMarquee() {
  if (document.querySelector('.peak-marquee')) {
    let marquees = document.querySelectorAll('.peak-marquee');
    let marqueeTotalWidth = 0;
    marquees.forEach(marquee => {
      marquee.querySelectorAll('.peak-marquee-headline').forEach(marqueeItem => {
        marqueeTotalWidth += marqueeItem.getBoundingClientRect().width;
        let clone = marqueeItem.cloneNode(true);
        marquee.querySelector('.peak-marquee-inner').appendChild(clone);
      });
      marquee.style.setProperty('--marqueeTotalWidth', marqueeTotalWidth + 'px');
    });
    document.querySelectorAll('.peak-marquee-headline').forEach(marqueeItem => {
      marqueeItem.style.animation = "marquee " + document.querySelectorAll('.peak-marquee-headline').length * 2 + "s linear infinite both";
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
});
/******/ })()
;
//# sourceMappingURL=view.js.map