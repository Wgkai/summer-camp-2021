// 轮播动画
function animate(obj, target) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    if (target - obj.offsetLeft > 0) {
      if (obj.offsetLeft >= target) {
        clearInterval(obj.timer);
      }
      if (target - obj.offsetLeft < 3) {
        obj.style.left = target + 'px';
      } else {
        obj.style.left = obj.offsetLeft + 3 + 'px';
      }

    } else if (target - obj.offsetLeft < 0) {
      if (obj.offsetLeft <= target) {
        clearInterval(obj.timer);
      }
      if (obj.offsetLeft - target < 3) {
        obj.style.left = target + 'px';
      } else {
        obj.style.left = obj.offsetLeft + -3 + 'px';
      }

    } else;

  }, 1);
}

var coll = document.querySelector('.col-l');
var colr = document.querySelector('.col-r');
var ul = coll.querySelector('ul');
var focus = ul.querySelectorAll('li');
var ol = coll.querySelector('ol');
var li = ol.querySelectorAll('li');
var imgWidth = 364;
var imgnum = 0;
var num = 0;
var flag = 0;
var passage = document.querySelector('.passage');
var topic = passage.querySelector('.topic');
var a = topic.querySelector('a');
var uls = colr.querySelectorAll('ul');
var first = focus[0].cloneNode(true);
ul.appendChild(first);

var timer = setInterval(lb, 5000);

function lb() {
  // 自动轮播
  if (imgnum == 4) {
    imgnum = 0;
    ul.style.left = 0;
  }
  imgnum++;
  num = imgnum;
  animate(ul, -imgnum * imgWidth);
  if (num == 4) num = 0;
  for (let i = 0; i < focus.length; i++) {
    li[i].className = '';
  }
  li[num].className = 'current';
}
li[0].className = 'current';

for (let i = 0; i < focus.length; i++) {
  li[i].addEventListener('click', function () {
    //点击按钮实现图片切换
    for (let j = 0; j < focus.length; j++) {
      li[j].className = '';
    }
    this.className = 'current';
    animate(ul, -i * imgWidth);
    imgnum = i;
  })

}

uls[0].style.display = 'block';
uls[1].style.display = 'block';
uls[2].style.display = 'none';
uls[3].style.display = 'none';
a.addEventListener('click', function () {
  //换一批
  if (!flag) {
    uls[0].style.display = 'none';
    uls[1].style.display = 'none';
    uls[2].style.display = 'block';
    uls[3].style.display = 'block';
    flag = 1;
  } else {
    uls[0].style.display = 'block';
    uls[1].style.display = 'block';
    uls[2].style.display = 'none';
    uls[3].style.display = 'none';
    flag = 0;
  }

})