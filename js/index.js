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
var navbd=my$("nav-d").getElementsByTagName("div");

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
var box=bd.getElementsByTagName("div");
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



