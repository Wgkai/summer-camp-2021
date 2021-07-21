const todo = document.querySelector('.todo');
const todoul = todo.querySelector('ul');
const todolis = todoul.children;
const text = document.querySelector('.new');
const tab = document.querySelector('.tab');
const all = tab.querySelector('.all');
const act = tab.querySelector('.act');
const com = tab.querySelector('.com');
const allchoose = document.querySelector('.allchoose');
const clear = document.querySelector('.clear');
var chboxes = todoul.querySelectorAll('.chboxes');
var checks = todoul.querySelectorAll('.check');
var things = todoul.querySelectorAll('.things');
var flag = 1;//用来标识当前在All还是Active还是Completed
var count = document.querySelector('.count');

function update() {
  let cnt = 0;
  chboxes = todoul.querySelectorAll('.chboxes');//!!!
  checks = todoul.querySelectorAll('.check');
  things = todoul.querySelectorAll('.things');//时刻更新

  for (let i = 0; i < chboxes.length; i++) {
    //更新剩余的事项数
    if (chboxes[i].checked == false) {
      cnt++;
    }
  }
  if (cnt == 0 || cnt == 1) {
    count.innerHTML = cnt + ' item left';
  } else {
    count.innerHTML = cnt + ' items left';
  }

  if (cnt != todolis.length) {
    clear.style.display = 'inline';
  } else {
    clear.style.display = 'none';
  }

  if (todolis.length == 0) {
    tab.style.display = 'none';
  }
  else {
    tab.style.display = 'block';
  }
}

text.addEventListener('keyup', function (e) {
  if (text.value != '' && e.keyCode == 13) {
    //创建节点li
    let newli = document.createElement('li');
    todoul.appendChild(newli);
    newli.className = "lis";
    //给新的节点里面添加勾选框
    let newdiv = document.createElement('div');
    newdiv.className = "check";
    newli.appendChild(newdiv);
    let label = document.createElement('label');
    label.className = "label";
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = "chboxes";
    label.appendChild(checkbox);
    newdiv.appendChild(label);
    // 给新的节点里添加输入框
    let newinput = document.createElement('div');
    newinput.type = 'text';
    newinput.contenteditable = true;
    newinput.className = "things";
    newinput.innerHTML = this.value;
    text.value = '';
    newli.appendChild(newinput);
    //给新节点里添加“x”按钮
    let newbutton = document.createElement('button');
    newbutton.className = "delete";
    newbutton.innerHTML = "×";
    newli.appendChild(newbutton);
    update();
    //给新创建的事项绑定删除事件
    newbutton.addEventListener('click', function () {
      todoul.removeChild(newli);
      if (!todolis.length) {
        allchoose.style.color = "#e6e6e6";
      }
      update();
    })
    //给新创建的事项绑定勾选事件
    newdiv.addEventListener('click', function () {
      //勾选某一个事项
      update();
      if (checkbox.checked == true) {
        if (flag == 1) {
          newinput.className = "things change-input";
        }
        else if (flag == 2) {
          newli.style.display = 'none';
          newinput.className = "things change-input";
        }
        newdiv.className = "check change";
      } else {
        if (flag == 1) {
          newinput.className = "things";
        }
        else if (flag == 3) {
          newli.style.display = 'none';
          newinput.className = "things";
        }
        newdiv.className = "check";
      }
      update();
      //勾选全部事项，上方箭头变颜色的效果
      let chflag = true;
      for (let j = 0; j < todolis.length; j++) {
        if (!chboxes[j].checked) {
          chflag = false;
          break;
        }
      }
      if (chflag) {
        allchoose.style.color = "#737373";
      } else {
        allchoose.style.color = "#e6e6e6";
      }
      update();
    })

    newinput.addEventListener('dblclick', function () {
      //编辑内容
      let old = this.innerHTML;
      let edit = document.createElement('input');
      edit.type = 'text';
      edit.value = old;
      edit.className = "edit";
      if (old.indexOf('type="text"') > 0) {
        return;
      }
      edit.addEventListener('blur', function () {
        newinput.innerHTML = this.value == old ? old : this.value;
      })
      newinput.innerHTML = '';
      newinput.appendChild(edit);
      edit.focus();

    })
    if (flag == 3) {
      //若在Completed界面新建事项，则新建事项不可见
      newli.style.display = 'none';
    }
  }
})

all.className = "all current";
all.addEventListener('click', function () {
  //给All切换按钮添加侦听
  update();
  all.className = "all current";
  act.className = "act";
  com.className = "com";
  for (let i = 0; i < todolis.length; i++) {
    todolis[i].style.display = 'flex';
  }
  flag = 1;
})

act.addEventListener('click', function () {
  //给Active切换按钮添加侦听
  update();
  all.className = "all";
  act.className = "act current";
  com.className = "com";
  for (let i = 0; i < todolis.length; i++) {
    if (chboxes[i].checked == true) {
      todolis[i].style.display = 'none';
    }
    else {
      todolis[i].style.display = 'flex';
    }
  }
  flag = 2;
})

com.addEventListener('click', function () {
  //给Completed切换按钮添加侦听
  update();
  all.className = "all";
  act.className = "act";
  com.className = "com current";
  for (let i = 0; i < todolis.length; i++) {
    if (chboxes[i].checked == false) {
      todolis[i].style.display = 'none';
    } else {
      todolis[i].style.display = 'flex';
    }
  }
  flag = 3;
})

allchoose.addEventListener('click', function () {
  //点击上方箭头，选择全部事项的效果
  update();
  let fg = 0;
  for (let j = 0; j < todolis.length; j++) {
    if (chboxes[j].checked == false) {
      fg = 1;
      break;
    }
  }
  for (let i = 0; i < todolis.length; i++) {
    if (fg == 1) {
      //全选
      chboxes[i].checked = true;
      if (flag == 2) {
        todolis[i].style.display = 'none';
      } else if (flag == 3) {
        todolis[i].style.display = 'flex';
      }
      things[i].className = "things change-input";
      checks[i].className = "check change";
      allchoose.style.color = "#737373"
    } else {
      //取消全选
      chboxes[i].checked = false;
      if (flag == 2) {
        todolis[i].style.display = 'flex';
      }
      else if (flag == 3) {
        todolis[i].style.display = 'none';
      }
      things[i].className = "things";
      checks[i].className = "check";
      allchoose.style.color = "#e6e6e6"
    }
  }
  update();
})

clear.addEventListener('click', function () {
  //清除已完成的事项
  update();
  for (let i = todolis.length - 1; i >= 0; i--) {
    if (chboxes[i].checked == true) {
      todoul.removeChild(todoul.childNodes[i]);
      if (!todolis.length) {
        allchoose.style.color = "#e6e6e6";
      }
      console.log(todolis);
    }
  }
  update();
})