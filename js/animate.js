var isAnim = false;
var timer;
var delay = 0; // 修改这个让效果减速
var start = 0;
var test = document.getElementById('test');
var end = parseInt(test.style.width);
function anim() {
  if (start > end) {
    clearTimeout(timer);
    start = 0;
    isAnim = false;
  } else {
    test.style.webkitMaskImage = "-webkit-gradient(radial, 17 17, " + start + ", 17 17, " + (start + 15) + ", from(rgba(0, 0, 0, 1)),color-stop(0.5, rgba(0, 0, 0, 0.2)),to(rgba(0, 0, 0, 1)))";
    timer = setTimeout(anim, delay);
    start++;
  }
}
test.onmouseover = function () {
  if (!isAnim) {
    isAnim = true;
    anim();
  }
}

var isAnim = false;
var timer;
var delay = 0; // 修改这个让效果减速
var start = 0;
var test = document.getElementById('test2');
var end = parseInt(test2.style.width);
function anim() {
  if (start > end) {
    clearTimeout(timer);
    start = 0;
    isAnim = false;
  } else {
    test.style.webkitMaskImage = "-webkit-gradient(radial, 17 17, " + start + ", 17 17, " + (start + 15) + ", from(rgba(0, 0, 0, 1)),color-stop(0.5, rgba(0, 0, 0, 0.2)),to(rgba(0, 0, 0, 1)))";
    timer = setTimeout(anim, delay);
    start++;
  }
}
test.onmouseover = function () {
  if (!isAnim) {
    isAnim = true;
    anim();
  }
}
