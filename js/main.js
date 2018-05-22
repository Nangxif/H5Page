window.onload=function(){
	//生成随机数
    function Rand(start,end){
        var total=end-start+1;
        return Math.floor(Math.random()*total+start);
    }
    //加载样式表
    function createElemen(href){
        var link=$("<link rel='stylesheet' type='text/css'>");
        link.attr("href",href);
        $("head").append(link);
    }
    var num=Rand(1,7);
    switch(num){
        case 1:
            $(".spinner").delay(2000).fadeOut(200,function(){
                $("#p_1").fadeIn(1000);
            });
            $("title").text("程树森双师直播课学习报告");
            createElemen("./css/main1.css");
            break;
        case 2:
            $(".spinner").delay(2000).fadeOut(200,function(){
                $("#p_2").fadeIn(1000);
            });
            $("title").text("周羽杨双师直播课学习报告");
            createElemen("./css/main2.css");
            break;
        case 3:
            $(".spinner").delay(2000).fadeOut(200,function(){
                $("#p_3").fadeIn(1000);
            });
            $("title").text("熊宝欣双师直播课学习报告");
            createElemen("./css/main3.css");
            break;
        case 4:
            $(".spinner").delay(2000).fadeOut(200,function(){
                $("#p_4").fadeIn(1000);
            });
            $("title").text("吴永彦双师直播课学习报告");
            createElemen("./css/main4.css");
            break;
        case 5:
            $(".spinner").delay(2000).fadeOut(200,function(){
                $("#p_5").fadeIn(1000);
            });
            $("title").text("王俊宇双师直播课学习报告");
            createElemen("./css/main5.css");
            break;
        case 6:
            $(".spinner").delay(2000).fadeOut(200,function(){
                $("#p_6").fadeIn(1000);
            });
            $("title").text("杨茜双师直播课学习报告");
            createElemen("./css/main6.css");
            break;
        case 7:
            $(".spinner").delay(2000).fadeOut(200,function(){
                $("#p_7").fadeIn(1000);
            });
            $("title").text("张其健双师直播课学习报告");
            createElemen("./css/main7.css");
            break;
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
        if($(document).scrollTop()<1/2*($("#p_1>.page_3").offset().top)||$(document).scrollTop()>4/5*($("#p_1>.page_4").offset().top)){
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


        if($(document).scrollTop()<1/2*($("#p_2>.page_3").offset().top)||$(document).scrollTop()>4/5*($("#p_2>.page_4").offset().top)){
            $("#p_2 .pic_1").eq(0).stop();
            $("#p_2 .pic_1").eq(1).stop();
            $("#p_2 .pic_1").eq(2).stop();
            $("#p_2 .pic_1").eq(3).stop();
            $("#p_2 .pic_2").eq(0).stop();
            $("#p_2 .pic_2").eq(1).stop();
            $("#p_2 .pic_2").eq(2).stop();
            $("#p_2 .pic_2").eq(3).stop();
            $("#p_2 .pic_1").eq(0).css("height","0rem");
            $("#p_2 .pic_1").eq(1).css("height","0rem");
            $("#p_2 .pic_1").eq(2).css("height","0rem");
            $("#p_2 .pic_1").eq(3).css("height","0rem");
            $("#p_2 .pic_2").eq(0).css("height","0rem");
            $("#p_2 .pic_2").eq(1).css("height","0rem");
            $("#p_2 .pic_2").eq(2).css("height","0rem");
            $("#p_2 .pic_2").eq(3).css("height","0rem");
            $("#p_2 .average_num").eq(0).stop();
            $("#p_2 .average_num").eq(1).stop();
            $("#p_2 .average_num").eq(2).stop();
            $("#p_2 .average_num").eq(3).stop();
            $("#p_2 .self_num").eq(0).stop();
            $("#p_2 .self_num").eq(1).stop();
            $("#p_2 .self_num").eq(2).stop();
            $("#p_2 .self_num").eq(3).stop();
            $("#p_2 .average_num").eq(0).css({"bottom":"1.0rem","opacity":0});
            $("#p_2 .average_num").eq(1).css({"bottom":"1.1rem","opacity":0});
            $("#p_2 .average_num").eq(2).css({"bottom":"1.0rem","opacity":0});
            $("#p_2 .average_num").eq(3).css({"bottom":"0.8rem","opacity":0});
            $("#p_2 .self_num").eq(0).css({"bottom":"1.6rem","opacity":0});
            $("#p_2 .self_num").eq(1).css({"bottom":"1.5rem","opacity":0});
            $("#p_2 .self_num").eq(2).css({"bottom":"1.6rem","opacity":0});
            $("#p_2 .self_num").eq(3).css({"bottom":"1.7rem","opacity":0});
        }else{
            $("#p_2 .pic_1").eq(0).stop();
            $("#p_2 .pic_1").eq(1).stop();
            $("#p_2 .pic_1").eq(2).stop();
            $("#p_2 .pic_1").eq(3).stop();
            $("#p_2 .pic_2").eq(0).stop();
            $("#p_2 .pic_2").eq(1).stop();
            $("#p_2 .pic_2").eq(2).stop();
            $("#p_2 .pic_2").eq(3).stop();
            Move($("#p_2 .pic_1").eq(0),"0.7rem",0);
            Move($("#p_2 .pic_1").eq(1),"0.8rem",0);
            Move($("#p_2 .pic_1").eq(2),"0.7rem",0);
            Move($("#p_2 .pic_1").eq(3),"0.5rem",0);
            Move($("#p_2 .pic_2").eq(0),"1.3rem",0);
            Move($("#p_2 .pic_2").eq(1),"1.2rem",0);
            Move($("#p_2 .pic_2").eq(2),"1.3rem",0);
            Move($("#p_2 .pic_2").eq(3),"1.4rem",0);
            $("#p_2 .average_num").eq(0).stop();
            $("#p_2 .average_num").eq(1).stop();
            $("#p_2 .average_num").eq(2).stop();
            $("#p_2 .average_num").eq(3).stop();
            $("#p_2 .self_num").eq(0).stop();
            $("#p_2 .self_num").eq(1).stop();
            $("#p_2 .self_num").eq(2).stop();
            $("#p_2 .self_num").eq(3).stop();
            textMove($("#p_2 .average_num").eq(0),"1.3rem",1100);
            textMove($("#p_2 .average_num").eq(1),"1.4rem",1100);
            textMove($("#p_2 .average_num").eq(2),"1.3rem",1100);
            textMove($("#p_2 .average_num").eq(3),"1.1rem",1100);
            textMove($("#p_2 .self_num").eq(0),"1.9rem",1100);
            textMove($("#p_2 .self_num").eq(1),"1.8rem",1100);
            textMove($("#p_2 .self_num").eq(2),"1.9rem",1100);
            textMove($("#p_2 .self_num").eq(3),"2rem",1100);
        }





        if($(document).scrollTop()<1/2*($("#p_3>.page_3").offset().top)||$(document).scrollTop()>4/5*($("#p_3>.page_4").offset().top)){
            $("#p_3 .pic_1").eq(0).stop();
            $("#p_3 .pic_1").eq(1).stop();
            $("#p_3 .pic_1").eq(2).stop();
            $("#p_3 .pic_1").eq(3).stop();
            $("#p_3 .pic_2").eq(0).stop();
            $("#p_3 .pic_2").eq(1).stop();
            $("#p_3 .pic_2").eq(2).stop();
            $("#p_3 .pic_2").eq(3).stop();
            $("#p_3 .pic_1").eq(0).css("height","0rem");
            $("#p_3 .pic_1").eq(1).css("height","0rem");
            $("#p_3 .pic_1").eq(2).css("height","0rem");
            $("#p_3 .pic_1").eq(3).css("height","0rem");
            $("#p_3 .pic_2").eq(0).css("height","0rem");
            $("#p_3 .pic_2").eq(1).css("height","0rem");
            $("#p_3 .pic_2").eq(2).css("height","0rem");
            $("#p_3 .pic_2").eq(3).css("height","0rem");
            $("#p_3 .average_num").eq(0).stop();
            $("#p_3 .average_num").eq(1).stop();
            $("#p_3 .average_num").eq(2).stop();
            $("#p_3 .average_num").eq(3).stop();
            $("#p_3 .self_num").eq(0).stop();
            $("#p_3 .self_num").eq(1).stop();
            $("#p_3 .self_num").eq(2).stop();
            $("#p_3 .self_num").eq(3).stop();
            $("#p_3 .average_num").eq(0).css({"bottom":"1rem","opacity":0});
            $("#p_3 .average_num").eq(1).css({"bottom":"1.1rem","opacity":0});
            $("#p_3 .average_num").eq(2).css({"bottom":"1.0rem","opacity":0});
            $("#p_3 .average_num").eq(3).css({"bottom":"0.8rem","opacity":0});
            $("#p_3 .self_num").eq(0).css({"bottom":"1.6rem","opacity":0});
            $("#p_3 .self_num").eq(1).css({"bottom":"1.5rem","opacity":0});
            $("#p_3 .self_num").eq(2).css({"bottom":"1.6rem","opacity":0});
            $("#p_3 .self_num").eq(3).css({"bottom":"1.7rem","opacity":0});
        }else{
            $("#p_3 .pic_1").eq(0).stop();
            $("#p_3 .pic_1").eq(1).stop();
            $("#p_3 .pic_1").eq(2).stop();
            $("#p_3 .pic_1").eq(3).stop();
            $("#p_3 .pic_2").eq(0).stop();
            $("#p_3 .pic_2").eq(1).stop();
            $("#p_3 .pic_2").eq(2).stop();
            $("#p_3 .pic_2").eq(3).stop();
            Move($("#p_3 .pic_1").eq(0),"0.7rem",0);
            Move($("#p_3 .pic_1").eq(1),"0.8rem",0);
            Move($("#p_3 .pic_1").eq(2),"0.7rem",0);
            Move($("#p_3 .pic_1").eq(3),"0.5rem",0);
            Move($("#p_3 .pic_2").eq(0),"1.3rem",0);
            Move($("#p_3 .pic_2").eq(1),"1.2rem",0);
            Move($("#p_3 .pic_2").eq(2),"1.3rem",0);
            Move($("#p_3 .pic_2").eq(3),"1.4rem",0);
            $("#p_3 .average_num").eq(0).stop();
            $("#p_3 .average_num").eq(1).stop();
            $("#p_3 .average_num").eq(2).stop();
            $("#p_3 .average_num").eq(3).stop();
            $("#p_3 .self_num").eq(0).stop();
            $("#p_3 .self_num").eq(1).stop();
            $("#p_3 .self_num").eq(2).stop();
            $("#p_3 .self_num").eq(3).stop();
            textMove($("#p_3 .average_num").eq(0),"1.3rem",1100);
            textMove($("#p_3 .average_num").eq(1),"1.4rem",1100);
            textMove($("#p_3 .average_num").eq(2),"1.3rem",1100);
            textMove($("#p_3 .average_num").eq(3),"1.1rem",1100);
            textMove($("#p_3 .self_num").eq(0),"1.9rem",1100);
            textMove($("#p_3 .self_num").eq(1),"1.8rem",1100);
            textMove($("#p_3 .self_num").eq(2),"1.9rem",1100);
            textMove($("#p_3 .self_num").eq(3),"2rem",1100);
        }



        if($(document).scrollTop()<1/2*($("#p_4>.page_3").offset().top)||$(document).scrollTop()>4/5*($("#p_4>.page_4").offset().top)){
            $("#p_4 .pic_1").eq(0).stop();
            $("#p_4 .pic_1").eq(1).stop();
            $("#p_4 .pic_1").eq(2).stop();
            $("#p_4 .pic_1").eq(3).stop();
            $("#p_4 .pic_2").eq(0).stop();
            $("#p_4 .pic_2").eq(1).stop();
            $("#p_4 .pic_2").eq(2).stop();
            $("#p_4 .pic_2").eq(3).stop();
            $("#p_4 .pic_1").eq(0).css("height","0rem");
            $("#p_4 .pic_1").eq(1).css("height","0rem");
            $("#p_4 .pic_1").eq(2).css("height","0rem");
            $("#p_4 .pic_1").eq(3).css("height","0rem");
            $("#p_4 .pic_2").eq(0).css("height","0rem");
            $("#p_4 .pic_2").eq(1).css("height","0rem");
            $("#p_4 .pic_2").eq(2).css("height","0rem");
            $("#p_4 .pic_2").eq(3).css("height","0rem");
            $("#p_4 .average_num").eq(0).stop();
            $("#p_4 .average_num").eq(1).stop();
            $("#p_4 .average_num").eq(2).stop();
            $("#p_4 .average_num").eq(3).stop();
            $("#p_4 .self_num").eq(0).stop();
            $("#p_4 .self_num").eq(1).stop();
            $("#p_4 .self_num").eq(2).stop();
            $("#p_4 .self_num").eq(3).stop();
            $("#p_4 .average_num").eq(0).css({"bottom":"1.3rem","opacity":0});
            $("#p_4 .average_num").eq(1).css({"bottom":"1.5rem","opacity":0});
            $("#p_4 .average_num").eq(2).css({"bottom":"1.0rem","opacity":0});
            $("#p_4 .average_num").eq(3).css({"bottom":"0.8rem","opacity":0});
            $("#p_4 .self_num").eq(0).css({"bottom":"1.6rem","opacity":0});
            $("#p_4 .self_num").eq(1).css({"bottom":"1.1rem","opacity":0});
            $("#p_4 .self_num").eq(2).css({"bottom":"1.6rem","opacity":0});
            $("#p_4 .self_num").eq(3).css({"bottom":"1.7rem","opacity":0});
        }else{
            $("#p_4 .pic_1").eq(0).stop();
            $("#p_4 .pic_1").eq(1).stop();
            $("#p_4 .pic_1").eq(2).stop();
            $("#p_4 .pic_1").eq(3).stop();
            $("#p_4 .pic_2").eq(0).stop();
            $("#p_4 .pic_2").eq(1).stop();
            $("#p_4 .pic_2").eq(2).stop();
            $("#p_4 .pic_2").eq(3).stop();
            Move($("#p_4 .pic_1").eq(0),"1rem",0);
            Move($("#p_4 .pic_1").eq(1),"1.2rem",0);
            Move($("#p_4 .pic_1").eq(2),"0.7rem",0);
            Move($("#p_4 .pic_1").eq(3),"0.5rem",0);
            Move($("#p_4 .pic_2").eq(0),"1.3rem",0);
            Move($("#p_4 .pic_2").eq(1),"0.8rem",0);
            Move($("#p_4 .pic_2").eq(2),"1.3rem",0);
            Move($("#p_4 .pic_2").eq(3),"1.4rem",0);
            $("#p_4 .average_num").eq(0).stop();
            $("#p_4 .average_num").eq(1).stop();
            $("#p_4 .average_num").eq(2).stop();
            $("#p_4 .average_num").eq(3).stop();
            $("#p_4 .self_num").eq(0).stop();
            $("#p_4 .self_num").eq(1).stop();
            $("#p_4 .self_num").eq(2).stop();
            $("#p_4 .self_num").eq(3).stop();
            textMove($("#p_4 .average_num").eq(0),"1.6rem",1100);
            textMove($("#p_4 .average_num").eq(1),"1.8rem",1100);
            textMove($("#p_4 .average_num").eq(2),"1.3rem",1100);
            textMove($("#p_4 .average_num").eq(3),"1.1rem",1100);
            textMove($("#p_4 .self_num").eq(0),"1.9rem",1100);
            textMove($("#p_4 .self_num").eq(1),"1.4rem",1100);
            textMove($("#p_4 .self_num").eq(2),"1.9rem",1100);
            textMove($("#p_4 .self_num").eq(3),"2rem",1100);
        }




        if($(document).scrollTop()<1/2*($("#p_5>.page_3").offset().top)||$(document).scrollTop()>4/5*($("#p_5>.page_4").offset().top)){
            $("#p_5 .pic_1").eq(0).stop();
            $("#p_5 .pic_1").eq(1).stop();
            $("#p_5 .pic_1").eq(2).stop();
            $("#p_5 .pic_1").eq(3).stop();
            $("#p_5 .pic_2").eq(0).stop();
            $("#p_5 .pic_2").eq(1).stop();
            $("#p_5 .pic_2").eq(2).stop();
            $("#p_5 .pic_2").eq(3).stop();
            $("#p_5 .pic_1").eq(0).css("height","0rem");
            $("#p_5 .pic_1").eq(1).css("height","0rem");
            $("#p_5 .pic_1").eq(2).css("height","0rem");
            $("#p_5 .pic_1").eq(3).css("height","0rem");
            $("#p_5 .pic_2").eq(0).css("height","0rem");
            $("#p_5 .pic_2").eq(1).css("height","0rem");
            $("#p_5 .pic_2").eq(2).css("height","0rem");
            $("#p_5 .pic_2").eq(3).css("height","0rem");
            $("#p_5 .average_num").eq(0).stop();
            $("#p_5 .average_num").eq(1).stop();
            $("#p_5 .average_num").eq(2).stop();
            $("#p_5 .average_num").eq(3).stop();
            $("#p_5 .self_num").eq(0).stop();
            $("#p_5 .self_num").eq(1).stop();
            $("#p_5 .self_num").eq(2).stop();
            $("#p_5 .self_num").eq(3).stop();
            $("#p_5 .average_num").eq(0).css({"bottom":"1.3rem","opacity":0});
            $("#p_5 .average_num").eq(1).css({"bottom":"1.3rem","opacity":0});
            $("#p_5 .average_num").eq(2).css({"bottom":"1.0rem","opacity":0});
            $("#p_5 .average_num").eq(3).css({"bottom":"0.8rem","opacity":0});
            $("#p_5 .self_num").eq(0).css({"bottom":"1.6rem","opacity":0});
            $("#p_5 .self_num").eq(1).css({"bottom":"1.4rem","opacity":0});
            $("#p_5 .self_num").eq(2).css({"bottom":"1.6rem","opacity":0});
            $("#p_5 .self_num").eq(3).css({"bottom":"1.7rem","opacity":0});
        }else{
            $("#p_5 .pic_1").eq(0).stop();
            $("#p_5 .pic_1").eq(1).stop();
            $("#p_5 .pic_1").eq(2).stop();
            $("#p_5 .pic_1").eq(3).stop();
            $("#p_5 .pic_2").eq(0).stop();
            $("#p_5 .pic_2").eq(1).stop();
            $("#p_5 .pic_2").eq(2).stop();
            $("#p_5 .pic_2").eq(3).stop();
            Move($("#p_5 .pic_1").eq(0),"1rem",0);
            Move($("#p_5 .pic_1").eq(1),"1rem",0);
            Move($("#p_5 .pic_1").eq(2),"0.7rem",0);
            Move($("#p_5 .pic_1").eq(3),"0.5rem",0);
            Move($("#p_5 .pic_2").eq(0),"1.3rem",0);
            Move($("#p_5 .pic_2").eq(1),"1.1rem",0);
            Move($("#p_5 .pic_2").eq(2),"1.3rem",0);
            Move($("#p_5 .pic_2").eq(3),"1.4rem",0);
            $("#p_5 .average_num").eq(0).stop();
            $("#p_5 .average_num").eq(1).stop();
            $("#p_5 .average_num").eq(2).stop();
            $("#p_5 .average_num").eq(3).stop();
            $("#p_5 .self_num").eq(0).stop();
            $("#p_5 .self_num").eq(1).stop();
            $("#p_5 .self_num").eq(2).stop();
            $("#p_5 .self_num").eq(3).stop();
            textMove($("#p_5 .average_num").eq(0),"1.6rem",1100);
            textMove($("#p_5 .average_num").eq(1),"1.6rem",1100);
            textMove($("#p_5 .average_num").eq(2),"1.3rem",1100);
            textMove($("#p_5 .average_num").eq(3),"1.1rem",1100);
            textMove($("#p_5 .self_num").eq(0),"1.9rem",1100);
            textMove($("#p_5 .self_num").eq(1),"1.7rem",1100);
            textMove($("#p_5 .self_num").eq(2),"1.9rem",1100);
            textMove($("#p_5 .self_num").eq(3),"2rem",1100);
        }





        if($(document).scrollTop()<1/2*($("#p_6>.page_3").offset().top)||$(document).scrollTop()>4/5*($("#p_6>.page_4").offset().top)){
            $("#p_6 .pic_1").eq(0).stop();
            $("#p_6 .pic_1").eq(1).stop();
            $("#p_6 .pic_1").eq(2).stop();
            $("#p_6 .pic_1").eq(3).stop();
            $("#p_6 .pic_2").eq(0).stop();
            $("#p_6 .pic_2").eq(1).stop();
            $("#p_6 .pic_2").eq(2).stop();
            $("#p_6 .pic_2").eq(3).stop();
            $("#p_6 .pic_1").eq(0).css("height","0rem");
            $("#p_6 .pic_1").eq(1).css("height","0rem");
            $("#p_6 .pic_1").eq(2).css("height","0rem");
            $("#p_6 .pic_1").eq(3).css("height","0rem");
            $("#p_6 .pic_2").eq(0).css("height","0rem");
            $("#p_6 .pic_2").eq(1).css("height","0rem");
            $("#p_6 .pic_2").eq(2).css("height","0rem");
            $("#p_6 .pic_2").eq(3).css("height","0rem");
            $("#p_6 .average_num").eq(0).stop();
            $("#p_6 .average_num").eq(1).stop();
            $("#p_6 .average_num").eq(2).stop();
            $("#p_6 .average_num").eq(3).stop();
            $("#p_6 .self_num").eq(0).stop();
            $("#p_6 .self_num").eq(1).stop();
            $("#p_6 .self_num").eq(2).stop();
            $("#p_6 .self_num").eq(3).stop();
            $("#p_6 .average_num").eq(0).css({"bottom":"1.3rem","opacity":0});
            $("#p_6 .average_num").eq(1).css({"bottom":"1.4rem","opacity":0});
            $("#p_6 .average_num").eq(2).css({"bottom":"1.0rem","opacity":0});
            $("#p_6 .average_num").eq(3).css({"bottom":"0.8rem","opacity":0});
            $("#p_6 .self_num").eq(0).css({"bottom":"1.6rem","opacity":0});
            $("#p_6 .self_num").eq(1).css({"bottom":"1.5rem","opacity":0});
            $("#p_6 .self_num").eq(2).css({"bottom":"1.6rem","opacity":0});
            $("#p_6 .self_num").eq(3).css({"bottom":"1.7rem","opacity":0});
        }else{
            $("#p_6 .pic_1").eq(0).stop();
            $("#p_6 .pic_1").eq(1).stop();
            $("#p_6 .pic_1").eq(2).stop();
            $("#p_6 .pic_1").eq(3).stop();
            $("#p_6 .pic_2").eq(0).stop();
            $("#p_6 .pic_2").eq(1).stop();
            $("#p_6 .pic_2").eq(2).stop();
            $("#p_6 .pic_2").eq(3).stop();
            Move($("#p_6 .pic_1").eq(0),"1rem",0);
            Move($("#p_6 .pic_1").eq(1),"1.1rem",0);
            Move($("#p_6 .pic_1").eq(2),"0.7rem",0);
            Move($("#p_6 .pic_1").eq(3),"0.5rem",0);
            Move($("#p_6 .pic_2").eq(0),"1.3rem",0);
            Move($("#p_6 .pic_2").eq(1),"1.2rem",0);
            Move($("#p_6 .pic_2").eq(2),"1.3rem",0);
            Move($("#p_6 .pic_2").eq(3),"1.4rem",0);
            $("#p_6 .average_num").eq(0).stop();
            $("#p_6 .average_num").eq(1).stop();
            $("#p_6 .average_num").eq(2).stop();
            $("#p_6 .average_num").eq(3).stop();
            $("#p_6 .self_num").eq(0).stop();
            $("#p_6 .self_num").eq(1).stop();
            $("#p_6 .self_num").eq(2).stop();
            $("#p_6 .self_num").eq(3).stop();
            textMove($("#p_6 .average_num").eq(0),"1.6rem",1100);
            textMove($("#p_6 .average_num").eq(1),"1.7rem",1100);
            textMove($("#p_6 .average_num").eq(2),"1.3rem",1100);
            textMove($("#p_6 .average_num").eq(3),"1.1rem",1100);
            textMove($("#p_6 .self_num").eq(0),"1.9rem",1100);
            textMove($("#p_6 .self_num").eq(1),"1.8rem",1100);
            textMove($("#p_6 .self_num").eq(2),"1.9rem",1100);
            textMove($("#p_6 .self_num").eq(3),"2rem",1100);
        }



        if($(document).scrollTop()<1/2*($("#p_7>.page_3").offset().top)||$(document).scrollTop()>4/5*($("#p_7>.page_4").offset().top)){
            $("#p_7 .pic_1").eq(0).stop();
            $("#p_7 .pic_1").eq(1).stop();
            $("#p_7 .pic_1").eq(2).stop();
            $("#p_7 .pic_1").eq(3).stop();
            $("#p_7 .pic_2").eq(0).stop();
            $("#p_7 .pic_2").eq(1).stop();
            $("#p_7 .pic_2").eq(2).stop();
            $("#p_7 .pic_2").eq(3).stop();
            $("#p_7 .pic_1").eq(0).css("height","0rem");
            $("#p_7 .pic_1").eq(1).css("height","0rem");
            $("#p_7 .pic_1").eq(2).css("height","0rem");
            $("#p_7 .pic_1").eq(3).css("height","0rem");
            $("#p_7 .pic_2").eq(0).css("height","0rem");
            $("#p_7 .pic_2").eq(1).css("height","0rem");
            $("#p_7 .pic_2").eq(2).css("height","0rem");
            $("#p_7 .pic_2").eq(3).css("height","0rem");
            $("#p_7 .average_num").eq(0).stop();
            $("#p_7 .average_num").eq(1).stop();
            $("#p_7 .average_num").eq(2).stop();
            $("#p_7 .average_num").eq(3).stop();
            $("#p_7 .self_num").eq(0).stop();
            $("#p_7 .self_num").eq(1).stop();
            $("#p_7 .self_num").eq(2).stop();
            $("#p_7 .self_num").eq(3).stop();
            $("#p_7 .average_num").eq(0).css({"bottom":"1.3rem","opacity":0});
            $("#p_7 .average_num").eq(1).css({"bottom":"1.5rem","opacity":0});
            $("#p_7 .average_num").eq(2).css({"bottom":"1.0rem","opacity":0});
            $("#p_7 .average_num").eq(3).css({"bottom":"0.8rem","opacity":0});
            $("#p_7 .self_num").eq(0).css({"bottom":"1.6rem","opacity":0});
            $("#p_7 .self_num").eq(1).css({"bottom":"1.1rem","opacity":0});
            $("#p_7 .self_num").eq(2).css({"bottom":"1.6rem","opacity":0});
            $("#p_7 .self_num").eq(3).css({"bottom":"1.7rem","opacity":0});
        }else{
            $("#p_7 .pic_1").eq(0).stop();
            $("#p_7 .pic_1").eq(1).stop();
            $("#p_7 .pic_1").eq(2).stop();
            $("#p_7 .pic_1").eq(3).stop();
            $("#p_7 .pic_2").eq(0).stop();
            $("#p_7 .pic_2").eq(1).stop();
            $("#p_7 .pic_2").eq(2).stop();
            $("#p_7 .pic_2").eq(3).stop();
            Move($("#p_7 .pic_1").eq(0),"1rem",0);
            Move($("#p_7 .pic_1").eq(1),"1.2rem",0);
            Move($("#p_7 .pic_1").eq(2),"0.7rem",0);
            Move($("#p_7 .pic_1").eq(3),"0.5rem",0);
            Move($("#p_7 .pic_2").eq(0),"1.3rem",0);
            Move($("#p_7 .pic_2").eq(1),"0.8rem",0);
            Move($("#p_7 .pic_2").eq(2),"1.3rem",0);
            Move($("#p_7 .pic_2").eq(3),"1.4rem",0);
            $("#p_7 .average_num").eq(0).stop();
            $("#p_7 .average_num").eq(1).stop();
            $("#p_7 .average_num").eq(2).stop();
            $("#p_7 .average_num").eq(3).stop();
            $("#p_7 .self_num").eq(0).stop();
            $("#p_7 .self_num").eq(1).stop();
            $("#p_7 .self_num").eq(2).stop();
            $("#p_7 .self_num").eq(3).stop();
            textMove($("#p_7 .average_num").eq(0),"1.6rem",1100);
            textMove($("#p_7 .average_num").eq(1),"1.8rem",1100);
            textMove($("#p_7 .average_num").eq(2),"1.3rem",1100);
            textMove($("#p_7 .average_num").eq(3),"1.1rem",1100);
            textMove($("#p_7 .self_num").eq(0),"1.9rem",1100);
            textMove($("#p_7 .self_num").eq(1),"1.4rem",1100);
            textMove($("#p_7 .self_num").eq(2),"1.9rem",1100);
            textMove($("#p_7 .self_num").eq(3),"2rem",1100);
        }

    })  
}