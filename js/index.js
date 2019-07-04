/**
 * Created by dell on 2019/6/9.
 */

/**
 * 主页的js
 */

//公用获取id属性
function my$(id) {
    return document.getElementById(id);
}


//导航
//找到事件源
var navhd=my$("navgation").getElementsByTagName("li");
var navbd=my$("nav-d").getElementsByClassName("children");

//遍历事件源，并注册事件
for(var i=0;i<navhd.length;i++){
    //设置索引
    navhd[i].setAttribute("index",i);
    //设置触发事件
    navhd[i].onmouseover=function(){
        // my$("nav-d").style="height:300px";
        my$("nav-d").style="display:block";
        //获取索引
        var num=this.getAttribute("index");
        //隐藏所有children
        // for(var k=0;k<bd.length;k++){
        //     navbd[k].style="display:none";
        // }
        //显示对应的children
        navbd[num].style="display:block";
    };
    navhd[i].onmouseout=function() {
        //获取当前显示的
        var num=this.getAttribute("index");
        navbd[num].style="display:none";
        my$("nav-d").style="display:none";
    };
}



//tzlc
//获取外面的div
var warp=my$("warp");
//获取第一个div
var hd=warp.getElementsByTagName("ul")[0];
//获取第二个div
var bd=warp.getElementsByTagName("div")[0];
//获取所有的li
var list=hd.getElementsByTagName("li");
//获取bd里面所有的div
var box=bd.getElementsByClassName("tab-child");
//循环遍历添加事件
for(var i=0;i<list.length;i++){
    //在触发之前就把索引保存在spans标签中
    list[i].setAttribute("index",i);
    list[i].onmouseover=function(){
        //第一件事,所有的li的类样式全部移除
        for(var j=0;j<list.length;j++){
            list[j].removeAttribute("class");
        }
        //第二件事，鼠标滑过包含样式on
        this.className="on";
        //li被滑过的时候获取储存的索引值
        var num=this.getAttribute("index");
        //获取到所有的tzlc且都先隐藏
        for(var k=0;k<box.length;k++){
            box[k].style="display:none";
        }
        box[num].style="display: block";
    };
}




    //封装动画函数---匀速的
    //任意的一个元素移动到任意的目标位置
function animate(element, target) {
    //清理定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //当前位置
        var current = element.offsetLeft;
        //每次移动的步数
        var step = 10;
        //移动的是正数还是负数  既是左移还是右移
        step = current < target ? step : -step;
        //移动后的当前位置计算
        current += step;
        //判断是否移动
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //直接到达目标
            element.style.left = target + "px";
            //清理定时去
            clearInterval(element.timeId);
        }
    }, 1)
}

//轮播图
//获取最外面的div
var kvbox = document.getElementById("kvbox");
//获取图片框
var screen = kvbox.children[0];
//获取图片框的宽度
var imgWidth = screen.offsetWidth;
//获取ul
var ulObj = screen.children[0];
//获取ul中的li
var kvlist = ulObj.children;
//获取ol
var olObj = screen.children[1];

var pic = 0;//全局变量
//创建小点点
for (var i = 0; i < kvlist.length; i++) {
    //创建li标签，加入到ol中
    var liObj = document.createElement("li");
    olObj.appendChild(liObj);
    //在每个ol中的li标签上加入索引值
    liObj.setAttribute("index", i);
    //鼠标进入事件，圆点变化
    liObj.onmouseover = function () {
        //先清除原来有的样式
        for (var j = 0; j < olObj.children.length; j++) {
            olObj.children[j].removeAttribute("class");
        }
        //设置当前鼠标进入的颜色
        this.className = "current";
        //获取当前鼠标进入的li的索引值
        pic = this.getAttribute("index");
        //移动ul
        animate(ulObj, -pic * imgWidth);
    }
}

//设置ol中第一个li有颜色
olObj.children[0].className = "current";
//克隆ul中的第一个Li放入到最后
ulObj.appendChild(ulObj.children[0].cloneNode(true));

var timeId =setInterval(clickHandle,3000);
//鼠标进入废掉之前的定时器
kvbox.onmouseover=function(){
    //清理之前的定时器
    clearInterval(timeId);
}
kvbox.onmouseout=function(){
    //鼠标离开开启自动播放
    timeId=setInterval(clickHandle,3000);
}
//无缝接洽
function clickHandle() {
    if (pic == kvlist.length - 1) {
        //从第六章图跳转到第一张
        pic = 0;
        ulObj.style.left = 0 + "px"; //将ul还原到起始位置
    }
    pic++;
    animate(ulObj, -pic * imgWidth);//跳转为第二张图片
    if (pic == kvlist.length - 1) {
        //去除最后一个圆点的颜色
        olObj.children[olObj.children.length - 1].className = "";
        //加上第一个圆点颜色
        olObj.children[0].className = "current";
    } else {
        //去除所有的颜色
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "current";
    }
}



