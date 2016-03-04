$(document).ready(function(){
    var is_ready = false;//注册信息是否通过验证；
    var is_username_ready = false;
    var is_password_ready = false;
    var is_password2_ready = false;
    var is_mailbox_ready = false;
    var is_major_ready = false;
    var is_school_ready = false;
    
    
    //验证用户名；
    $("input#username").focusout(function(){
        var username = document.getElementById("username").value;
        if (username == ""){
            $("label#username_error").show(500).text("*用户名不能为空！").css({
                color: "red"
            });
        }else if(username != ""){
            if (username != "Chuangbufan"){
                $("label#username_error").text("该用户名已被注册！").show(500).css({
                    color: "red"
                });
            }else if (username == "Chuangbufan"){
                is_username_ready = true;
                $("label#username_error").text("√").css({
                    color: "green"
                }).show(500);
            }
            
        }
    });
    
    //验证初始密码；
    $("input#password").focusout(function(){
        var password = document.getElementById("password").value;
        if (password == ""){
            $("label#password_error").text("*请输入密码！").css({
                color: "red"
            }).show(500);
        }else if(password != ""){
            is_password_ready = true;
            $("label#password_error").text("√").show(500).css({
                color: "green"
            });
        }
    });
    
    //对比两次密码是否一致；
    $("input#password2").focusout(function(){
        var password = document.getElementById("password").value;//获取第一次密码
        var password2 = document.getElementById("password2").value;//获取第二次密码；
        if (password != password2){
            $("label#password2_error").show(500).text("*两次输入的密码不一致！").css({
                color: "red"
            });
        }else if(password == password2){
            is_password2_ready = true;
            $("label#password2_error").text("√").show(500).css({
                color: "green"
            });
        }
    });
    
    //验证邮箱格式；
    $("input#mailbox").focusout(function(){
        var mailbox = document.getElementById("mailbox").value;
        if ((mailbox == "") || (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(mailbox))){
            $("label#mailbox_error").show(500).text("*请输入正确的邮箱！").css({
                color: "red"
            });
        }else{
            is_mailbox_ready = true;
            $("label#mailbox_error").text("√").show(500).css({
                color: "green"
            });
        }
    });
    
    //验证专业
    $("input#major").focusout(function(){
        var major = document.getElementById("major").value;
        if (major == ""){
            $("label#major_error").show(500).text("*请输入你的专业！").css({
                color: "red"
            });
        }else if(major != ""){
            is_major_ready = true;
            $("label#major_error").text("√").show(500).css({
                color: "green"
            });
            
        }
    });
    
    $("input#school").focusout(function(){
        var school = document.getElementById("school").value;
        if (school == ""){
            $("label#school_error").show(500).text("*请输入你的学校！").css({
                color: "red"
            });
        }else if(school != ""){
            is_school_ready = true;
            $("label#school_error").text("√").show(500).css({
                color: "green"
            });
        }
    });

    
    //每个输入框获取焦点以后，提示信息消失
    //用户名
    $("input#username").focusin(function(){
        $("label#username_error").hide(500);
    });
    
    //密码
    $("input#password").focusin(function(){
        $("label#password_error").hide(500);
    });
    
    //密码2
    $("input#password2").focusin(function(){
        $("label#password2_error").hide(500);
    });
    
    //邮箱
    $("input#mailbox").focusin(function(){
        $("label#mailbox_error").hide(500);
    });
    
    //学校
    $("input#school").focusin(function(){
        $("label#school_error").hide(500);
    });
    
    //专业
    $("input#major").focusin(function(){
        $("label#major_error").hide(500);
    });
    
    
    
    
    
    
    
    
    //按钮点击验证，若通过则跳转，否则显示警告
    $("button#submit").click(function(){
        if((is_username_ready == true) && (is_password_ready == true) && (is_password2_ready == true) && (is_mailbox_ready == true) && (is_major_ready == true) && (is_school_ready == true)){
            is_ready = true;
        }else{
            is_ready = false;
        }
        
        if (is_ready == true){
            document.getElementById("jump").click();
        }else{
            alert("请检查你的注册信息！");
        }
    });


    //主要用于阻止用户在未登录或注册之前访问二级页面
    $("a.loginFirst").click(function(){
        alert("请先登录!");
    });
});

