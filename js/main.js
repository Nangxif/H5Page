window.onload=function(){
	var bili=document.documentElement.clientWidth/750;
    // var pnum=document.getElementsByClassName('text').length;
    // for(var i=0;i<pnum;i++){
    // 	document.getElementsByClassName('text')[i].style.fontSize=(34*(document.documentElement.clientWidth/750))+"px";
    // }
    // for(var j=0; j<2;j++){
    //     document.getElementsByClassName('results')[j].style.fontSize=(25*(document.documentElement.clientWidth/750))+"px";
    // }

    //柱子移动的动画函数
    function Move(target,height,delay){
        target.delay(delay).animate({"height":height},1000);
    }
    //文字移动的动画函数
    function textMove(target,bottom,delay){
        target.delay(delay).animate({"bottom":bottom,"opacity":1},1000);
    }
    $(window).scroll(function(){
        if($(document).scrollTop()<1/2*($(".page_3").offset().top)||$(document).scrollTop()>4/5*($(".page_4").offset().top)){
            $(".pic_1").eq(0).stop();
            $(".pic_1").eq(1).stop();
            $(".pic_1").eq(2).stop();
            $(".pic_1").eq(3).stop();
            $(".pic_2").eq(0).stop();
            $(".pic_2").eq(1).stop();
            $(".pic_2").eq(2).stop();
            $(".pic_2").eq(3).stop();
            $(".pic_1").eq(0).css("height","0rem");
            $(".pic_1").eq(1).css("height","0rem");
            $(".pic_1").eq(2).css("height","0rem");
            $(".pic_1").eq(3).css("height","0rem");
            $(".pic_2").eq(0).css("height","0rem");
            $(".pic_2").eq(1).css("height","0rem");
            $(".pic_2").eq(2).css("height","0rem");
            $(".pic_2").eq(3).css("height","0rem");
            $(".average_num").eq(0).stop();
            $(".average_num").eq(1).stop();
            $(".average_num").eq(2).stop();
            $(".average_num").eq(3).stop();
            $(".self_num").eq(0).stop();
            $(".self_num").eq(1).stop();
            $(".self_num").eq(2).stop();
            $(".self_num").eq(3).stop();
            $(".average_num").eq(0).css({"bottom":"1.3rem","opacity":0});
            $(".average_num").eq(1).css({"bottom":"1.5rem","opacity":0});
            $(".average_num").eq(2).css({"bottom":"1.0rem","opacity":0});
            $(".average_num").eq(3).css({"bottom":"0.8rem","opacity":0});
            $(".self_num").eq(0).css({"bottom":"1.6rem","opacity":0});
            $(".self_num").eq(1).css({"bottom":"1.1rem","opacity":0});
            $(".self_num").eq(2).css({"bottom":"1.6rem","opacity":0});
            $(".self_num").eq(3).css({"bottom":"1.7rem","opacity":0});
        }else{
            $(".pic_1").eq(0).stop();
            $(".pic_1").eq(1).stop();
            $(".pic_1").eq(2).stop();
            $(".pic_1").eq(3).stop();
            $(".pic_2").eq(0).stop();
            $(".pic_2").eq(1).stop();
            $(".pic_2").eq(2).stop();
            $(".pic_2").eq(3).stop();
            Move($(".pic_1").eq(0),"1rem",0);
            Move($(".pic_1").eq(1),"1.2rem",0);
            Move($(".pic_1").eq(2),"0.7rem",0);
            Move($(".pic_1").eq(3),"0.5rem",0);
            Move($(".pic_2").eq(0),"1.3rem",0);
            Move($(".pic_2").eq(1),"0.8rem",0);
            Move($(".pic_2").eq(2),"1.3rem",0);
            Move($(".pic_2").eq(3),"1.4rem",0);
            $(".average_num").eq(0).stop();
            $(".average_num").eq(1).stop();
            $(".average_num").eq(2).stop();
            $(".average_num").eq(3).stop();
            $(".self_num").eq(0).stop();
            $(".self_num").eq(1).stop();
            $(".self_num").eq(2).stop();
            $(".self_num").eq(3).stop();
            textMove($(".average_num").eq(0),"1.6rem",1100);
            textMove($(".average_num").eq(1),"1.8rem",1100);
            textMove($(".average_num").eq(2),"1.3rem",1100);
            textMove($(".average_num").eq(3),"1.1rem",1100);
            textMove($(".self_num").eq(0),"1.9rem",1100);
            textMove($(".self_num").eq(1),"1.4rem",1100);
            textMove($(".self_num").eq(2),"1.9rem",1100);
            textMove($(".self_num").eq(3),"2rem",1100);
        }
    })  
}