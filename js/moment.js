$(document).ready(function(){
    var isAble = true;//页面初始，可以发布动态
    var isLikedArray = [false,false,false];//是否赞过动态
    
    $("button#release").click(function(){
        var input_text = $("textarea#textarea_input").val();//获取文本域的输入文本
        $("textarea#textarea_input").val("");
        $("label#number").text(parseInt($("textarea#textarea_input").attr("maxlength"), 10));//清空文本域
        if(input_text == ""){
            //没有输入的反馈
            
        }else if(isAble == false){
            alert("您已经发布过动态！");
        }else if ((isAble == true) && (input_text != "")){
            //发布功能
//            var moments = $("div.moment_blocks");//获取所有class为moment_blocks的div对象，moments为这些对象组成的数组
        
            //创建一个新的class为moment_blocks的对象
            $("<div>",{
                class: "moment_blocks",
                id: "top"//为了添加元素而设置的临时选择器
            }).css({
                display: "none"
            }).fadeIn(1000,function (){
                isAble = false;//已发过动态则不能再发（全局）
            }).prependTo("div#released_moment");
        
            //为id为top的div创建内部元素
            //头像div
            $("<div>",{
                class: "user_photo"
            }).css({
                display: "none"
            }).fadeIn(3000).appendTo("div#top").attr("id","new_photo");
        
            //用户信息div
            $("<div>",{
                "class": "user_info",
                id: "new_info"
            }).css({
                display: "none"
            }).fadeIn(3000).appendTo("div#top");
            
            //添加用户名
            $("<p>",{
                class: "username"
            }).css({
                display: "none"
            }).fadeIn(2000).appendTo("div#new_info").text("Chuangbufan");
            
            //添加时间
            var time = new Date();
            var date = time.toLocaleDateString();
            var hour = time.getHours();
            var mins = time.getMinutes();
            var time_text = date + " " + hour + ":" + mins;
            $("<p>",{
                class: "time"
            }).text(time_text).fadeIn(2000).appendTo("div#new_info");
            
           
            //删除用户信息div的临时id选择器
            $("div#new_info").removeAttr("id");
        
            //文字内容div
            $("<div>",{
                class: "moment_content"
            }).css({
                display: "none"
            }).fadeIn(3000).appendTo("div#top").text(input_text);
        
            //分割线
            $("<hr>").css({
                display: "none"
            }).fadeIn(3000).appendTo("div#top");
        
            //删除按钮
            $("<a>").text("删除").css({
                cursor: "pointer",
                fontSize: "1.5em",
                display: "none",
                position: "absolute",
                bottom: "8px",
                left: "49%"
            }).attr("class","delete").fadeIn(3000).appendTo("div#top");
        
            //为删除按钮添加事件
            $("a.delete").click(function(){
                var parent = $("a.delete").parent();
                parent.hide(800);
                $("a.delete").removeAttr("class");
                isAble = true;//已删除动态，可以再次 发布
            });
        
            //添加完元素后，删除临时选择器
            $("div#top").removeAttr("id");
        }
    
    });
    
    
    //点赞*3
    $("a#like_1").click(function(){
        if (isLikedArray[0] == false){//没被赞过
            $("a#like_1").css({
                color: "red",
                fontWeight: "bold"
            });
            isLikedArray[0] = true;
        }else if (isLikedArray[0] == true){
            $("a#like_1").css({
                color: "black",
                fontWeight: "normal"
            });
            isLikedArray[0] = false;
        }
    });
    
    $("a#like_2").click(function(){
        if (isLikedArray[1] == false){//没被赞过
            $("a#like_2").css({
                color: "red",
                fontWeight: "bold"
            });
            isLikedArray[1] = true;
        }else if (isLikedArray[1] == true){
            $("a#like_2").css({
                color: "black",
                fontWeight: "normal"
            });
            isLikedArray[1] = false;
        }
    });
    
    $("a#like_3").click(function(){
        if (isLikedArray[2] == false){//没被赞过
            $("a#like_3").css({
                color: "red",
                fontWeight: "bold"
            });
            isLikedArray[2] = true;
        }else if (isLikedArray[2] == true){
            $("a#like_3").css({
                color: "black",
                fontWeight: "normal"
            });
            isLikedArray[2] = false;
        }
    });
  




    //已发布状态的展示动画
    //状态1
    $("a#contact_1").click(function(e){
        var x = 10;
        var y = 20;
        
        //用户名
        var name_text = "KKKyrie";
        var name = "<p id='name'>" + name_text + "<\/p>";
        
        //分割线
        var hr = "<hr>"
        
        //电话号码
        var tel_text = "电话: 15529609559";
        var tel = "<p id='tel'>" + tel_text + "<\/p>";
        
        //邮箱
        var mail_text = "邮箱: kyrieliu02@163.com";
        var mail = "<p id='mail'>" + mail_text + "<\/p>";
        
        //合并提示框
        var tooltip = "<div id='tooltip'>" + name + hr + tel + mail + "<\/div>";
        
        $("div#released_moment").append(tooltip);
        $("div#tooltip").css({
            "left": (e.pageX + x) + "px",
            "top": (e.pageY + y) + "px"
        }).show("800");
    });
    
    //状态2
    $("a#contact_2").click(function(e){
        var x = 10;
        var y = 20;
        
        //用户名
        var name_text = "Cris.An";
        var name = "<p id='name'>" + name_text + "<\/p>";
        
        //分割线
        var hr = "<hr>"
        
        //电话号码
        var tel_text = "电话: 18391854590";
        var tel = "<p id='tel'>" + tel_text + "<\/p>";
        
        //邮箱
        var mail_text = "邮箱: wsh12027@qq.com";
        var mail = "<p id='mail'>" + mail_text + "<\/p>";
        
        //合并提示框
        var tooltip = "<div id='tooltip'>" + name + hr + tel + mail + "<\/div>";
        
        $("div#released_moment").append(tooltip);
        $("div#tooltip").css({
            "left": (e.pageX + x) + "px",
            "top": (e.pageY + y) + "px"
        }).show("800");
    });
    
    
    $("a#contact_3").click(function(e){
        var x = 10;
        var y = 20;
        
        //用户名
        var name_text = "张宇宙要创业";
        var name = "<p id='name'>" + name_text + "<\/p>";
        
        //分割线
        var hr = "<hr>"
        
        //电话号码
        var tel_text = "电话: 13649275393";
        var tel = "<p id='tel'>" + tel_text + "<\/p>";
        
        //邮箱
        var mail_text = "邮箱: zhangyuzhou@sina.com";
        var mail = "<p id='mail'>" + mail_text + "<\/p>";
        
        //合并提示框
        var tooltip = "<div id='tooltip'>" + name + hr + tel + mail + "<\/div>";
        
        $("div#released_moment").append(tooltip);
        $("div#tooltip").css({
            "left": (e.pageX + x) + "px",
            "top": (e.pageY + y) + "px"
        }).show("800");
    });
    
    
    
    //tooltip框的移动和消失
    $("a.contact").mouseout(function(){
            $("div#tooltip").remove();
    }).mousemove(function(e){
        var x = 10;
        var y = 20;
        $("div#tooltip").css({
            "left": (e.pageX) + x,
            "top": (e.pageY) + y
        });
    });
    
    
    //提示“还能输入的字数”功能
    $("textarea#textarea_input").keyup(function(){
        var $textarea = $(this);
        var maxlength = parseInt($textarea.attr("maxlength"), 10);//获取文本框输入的最大值，并将它转化为十进制数；
        var already_input = $textarea.val().length;//获取已输入的字数;
        var left = maxlength - already_input;
        
        
        
        $("label#number").text(left);
        //颜色处理
        if (left > 10){
            $("label#number").css({
                color: "darkgreen"
            });
        }else if ((left <= 10) && (left > 0)){
            $("label#number").css({
                color: "orange"
            });
        }else if(left == 0){
            $("label#number").css({
                color: "red"
            });
        }
    });
    
    
    


});//document.ready