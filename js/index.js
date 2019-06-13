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
var navbd=my$("nav-d").getElementsByTagName("div");

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
var box=bd.getElementsByTagName("div");
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



