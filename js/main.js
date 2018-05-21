window.onload=function(){
	var bili=document.documentElement.clientWidth/750;
	var canvatext=document.getElementById('myCanvatext');
    var text=canvatext.getContext('2d');
    text.scale(bili,bili);
    text.beginPath();
    text.font = "45px 黑体";  
    text.fillStyle = "white";  
    text.fillText("结果分析",40,140);
    text.beginPath();
    text.font = "25px 黑体";  
    text.fillStyle = "white";  
    text.fillText("本次测验用时  8:25",40,180);
    text.beginPath();
    text.font = "25px 黑体";  
    text.fillStyle = "white";  
    text.fillText("答题正确率  70%",40,210);

	



    var canvassea=document.getElementById('myCanvaSea');
    var sea=canvassea.getContext('2d');


    canvassea.width = canvassea.parentNode.offsetWidth;  
    canvassea.height = canvassea.parentNode.offsetHeight;
    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout  
    window.requestAnimFrame = (function(){  
    return  window.requestAnimationFrame       ||  
            window.webkitRequestAnimationFrame ||  
            window.mozRequestAnimationFrame    ||  
            function( callback ){  
              window.setTimeout(callback, 1000 / 60);  
            };  
    })();  
    // 波浪大小
    var boHeight = canvassea.height / 10;
    var posHeight = canvassea.height / 1.2;
    //初始角度为0  
    var step = 0;  
    //定义三条不同波浪的颜色  
    var lines = ["rgba(104,213,255, 1)",  
                   "rgba(149,229,255, 1)"];  
    function loop(){  
        sea.clearRect(0,0,canvassea.width,canvassea.height);  
        step++;  
        //画3个不同颜色的矩形  
        for(var j = lines.length - 1; j >= 0; j--) {  
            sea.fillStyle = lines[j];  
            //每个矩形的角度都不同，每个之间相差45度  
            var angle = (step+j*50)*Math.PI/180;  
            var deltaHeight   = Math.sin(angle) * boHeight;
            var deltaHeightRight   = Math.cos(angle) * boHeight;  
            sea.beginPath();
            sea.moveTo(0, posHeight+deltaHeight);  
            sea.bezierCurveTo(canvassea.width/2, posHeight+deltaHeight-boHeight, canvassea.width / 2, posHeight+deltaHeightRight-boHeight, canvassea.width, posHeight+deltaHeightRight);  
            sea.lineTo(canvassea.width, canvassea.height);  
            sea.lineTo(0, canvassea.height);  
            sea.lineTo(0, posHeight+deltaHeight);  
            sea.closePath();  
            sea.fill();  
        }
        requestAnimFrame(loop);
    }  
    loop(); 

    var pnum=document.getElementsByClassName('text').length;
    for(var i=0;i<pnum;i++){
    	document.getElementsByClassName('text')[i].style.fontSize=(34*(document.documentElement.clientWidth/750))+"px";
    }




    

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
            textMove($(".average_num").eq(0),"1.6rem",1500);
            textMove($(".average_num").eq(1),"1.8rem",1500);
            textMove($(".average_num").eq(2),"1.3rem",1500);
            textMove($(".average_num").eq(3),"1.1rem",1500);
            textMove($(".self_num").eq(0),"1.9rem",1500);
            textMove($(".self_num").eq(1),"1.4rem",1500);
            textMove($(".self_num").eq(2),"1.9rem",1500);
            textMove($(".self_num").eq(3),"2rem",1500);


        }
    })
    
}