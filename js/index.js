/**
 * Created by dell on 2019/6/9.
 */

/**
 * ��ҳ��js
 */

//���û�ȡid����
function my$(id) {
    return document.getElementById(id);
}


//����
//�ҵ��¼�Դ
var navhd=my$("navgation").getElementsByTagName("li");
var navbd=my$("nav-d").getElementsByClassName("children");

//�����¼�Դ����ע���¼�
for(var i=0;i<navhd.length;i++){
    //��������
    navhd[i].setAttribute("index",i);
    //���ô����¼�
    navhd[i].onmouseover=function(){
        // my$("nav-d").style="height:300px";
        my$("nav-d").style="display:block";
        //��ȡ����
        var num=this.getAttribute("index");
        //��������children
        // for(var k=0;k<bd.length;k++){
        //     navbd[k].style="display:none";
        // }
        //��ʾ��Ӧ��children
        navbd[num].style="display:block";
    };
    navhd[i].onmouseout=function() {
        //��ȡ��ǰ��ʾ��
        var num=this.getAttribute("index");
        navbd[num].style="display:none";
        my$("nav-d").style="display:none";
    };
}



//tzlc
//��ȡ�����div
var warp=my$("warp");
//��ȡ��һ��div
var hd=warp.getElementsByTagName("ul")[0];
//��ȡ�ڶ���div
var bd=warp.getElementsByTagName("div")[0];
//��ȡ���е�li
var list=hd.getElementsByTagName("li");
//��ȡbd�������е�div
var box=bd.getElementsByClassName("tab-child");
//ѭ����������¼�
for(var i=0;i<list.length;i++){
    //�ڴ���֮ǰ�Ͱ�����������spans��ǩ��
    list[i].setAttribute("index",i);
    list[i].onmouseover=function(){
        //��һ����,���е�li������ʽȫ���Ƴ�
        for(var j=0;j<list.length;j++){
            list[j].removeAttribute("class");
        }
        //�ڶ����£���껬��������ʽon
        this.className="on";
        //li��������ʱ���ȡ���������ֵ
        var num=this.getAttribute("index");
        //��ȡ�����е�tzlc�Ҷ�������
        for(var k=0;k<box.length;k++){
            box[k].style="display:none";
        }
        box[num].style="display: block";
    };
}




    //��װ��������---���ٵ�
    //�����һ��Ԫ���ƶ��������Ŀ��λ��
function animate(element, target) {
    //����ʱ��
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //��ǰλ��
        var current = element.offsetLeft;
        //ÿ���ƶ��Ĳ���
        var step = 10;
        //�ƶ������������Ǹ���  �������ƻ�������
        step = current < target ? step : -step;
        //�ƶ���ĵ�ǰλ�ü���
        current += step;
        //�ж��Ƿ��ƶ�
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //ֱ�ӵ���Ŀ��
            element.style.left = target + "px";
            //����ʱȥ
            clearInterval(element.timeId);
        }
    }, 1)
}

//�ֲ�ͼ
//��ȡ�������div
var kvbox = document.getElementById("kvbox");
//��ȡͼƬ��
var screen = kvbox.children[0];
//��ȡͼƬ��Ŀ��
var imgWidth = screen.offsetWidth;
//��ȡul
var ulObj = screen.children[0];
//��ȡul�е�li
var kvlist = ulObj.children;
//��ȡol
var olObj = screen.children[1];

var pic = 0;//ȫ�ֱ���
//����С���
for (var i = 0; i < kvlist.length; i++) {
    //����li��ǩ�����뵽ol��
    var liObj = document.createElement("li");
    olObj.appendChild(liObj);
    //��ÿ��ol�е�li��ǩ�ϼ�������ֵ
    liObj.setAttribute("index", i);
    //�������¼���Բ��仯
    liObj.onmouseover = function () {
        //�����ԭ���е���ʽ
        for (var j = 0; j < olObj.children.length; j++) {
            olObj.children[j].removeAttribute("class");
        }
        //���õ�ǰ���������ɫ
        this.className = "current";
        //��ȡ��ǰ�������li������ֵ
        pic = this.getAttribute("index");
        //�ƶ�ul
        animate(ulObj, -pic * imgWidth);
    }
}

//����ol�е�һ��li����ɫ
olObj.children[0].className = "current";
//��¡ul�еĵ�һ��Li���뵽���
ulObj.appendChild(ulObj.children[0].cloneNode(true));

var timeId =setInterval(clickHandle,3000);
//������ϵ�֮ǰ�Ķ�ʱ��
kvbox.onmouseover=function(){
    //����֮ǰ�Ķ�ʱ��
    clearInterval(timeId);
}
kvbox.onmouseout=function(){
    //����뿪�����Զ�����
    timeId=setInterval(clickHandle,3000);
}
//�޷��Ǣ
function clickHandle() {
    if (pic == kvlist.length - 1) {
        //�ӵ�����ͼ��ת����һ��
        pic = 0;
        ulObj.style.left = 0 + "px"; //��ul��ԭ����ʼλ��
    }
    pic++;
    animate(ulObj, -pic * imgWidth);//��תΪ�ڶ���ͼƬ
    if (pic == kvlist.length - 1) {
        //ȥ�����һ��Բ�����ɫ
        olObj.children[olObj.children.length - 1].className = "";
        //���ϵ�һ��Բ����ɫ
        olObj.children[0].className = "current";
    } else {
        //ȥ�����е���ɫ
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "current";
    }
}



