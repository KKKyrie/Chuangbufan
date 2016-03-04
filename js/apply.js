$(document).ready(function(){
    var is_ready = false;
    var is_username_ready = false;
    var is_school_ready = false;
    var is_tel_ready = false;
    var is_mail_ready = false;
    var is_team_name_ready = false;
    var is_project_name_ready = false;
    var is_area_ready = false;
    var is_intro_ready = false;
    
    
    //姓名非空检测
    $("input#username").focusout(function(){
        var username = $("input#username").val();
        if (username == ""){
            $("label#username_error").show(500).text("*请填写你的真实姓名！").css({
                color: "red"
            });
        }else if (username != ""){
            is_username_ready = true;
            $("label#username_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#username_error").hide(500);
    });
    
    //学校非空检测
    $("input#school").focusout(function(){
        var school = $("input#school").val();
        if (school == ""){
            $("label#school_error").show(500).text("*请填写你就读的学校！").css({
                color: "red"
            });
        }else if(school != ""){
            is_school_ready = true;
            $("label#school_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#school_error").hide(500);
    });
    
    //电话非空检测
    $("input#tel").focusout(function(){
        var tel = $("input#tel").val();
        if (tel == ""){
            $("label#tel_error").show(500).text("*请输入你的联系电话！").css({
                color: "red"
            });
        }else if(tel != ""){
            is_tel_ready = true;
            $("label#tel_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#tel_error").hide(500);
    });
    
    //邮箱检测
    $("input#mail").focusout(function(){
        var mail = $("input#mail").val();
        if (mail == ""){
            $("label#mail_error").show(500).text("*请填写你的邮箱！");
        }else if ((!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(mail))){
            $("label#mail_error").text("*请输入正确的邮箱！").show(500).css({
                color: "red"
            });
        }else{
            is_mail_ready = true;
            $("label#mail_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#mail_error").hide(500);
    });
    
    //团队名称非空检验
    $("input#team_name").focusout(function(){
        var team = $("input#team_name").val();
        if (team == ""){
            $("label#team_error").show(500).text("*团队名称不能为空！").css({
                color: "red"
            });
        }else if(team != ""){
            is_team_name_ready = true;
            $("label#team_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#team_error").hide(500);
    });
    
    //项目名称非空检验
    $("input#project_name").focusout(function(){
        var project = $("input#project_name").val();
        if (project == ""){
            $("label#project_error").show(500).text("*项目名称不能为空！").css({
                color: "red"
            });
        }else if(project != ""){
            is_project_name_ready = true;
            $("label#project_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#project_error").hide(500);
    });
    
    //领域非空检验
    $("input#area").focusout(function(){
        var area = $("input#area").val();
        if (area == ""){
            $("label#area_error").show(500).text("*涉及的行业领域不能为空！").css({
                color: "red"
            });
        }else if(area != ""){
            is_area_ready = true;
            $("label#area_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#area_error").hide(500);
    });
    
    //项目介绍非空检验
    $("#intro").focusout(function(){
        var intro = $("#intro").val();
        if (intro == ""){
            $("label#intro_error").show(500).text("*项目介绍不能为空！").css({
                color: "red"
            });
        }else if(intro != ""){
            is_intro_ready = true;
            $("label#intro_error").text("√").show(500).css({
                color: "green"
            });
        }
    }).focusin(function(){
        $("label#intro_error").hide(500);
    });
    
    //单击提交按钮时触发页面检验
    $("button#submit").click(function(){
        if ((is_username_ready == true)&&(is_school_ready == true)&&(is_tel_ready == true)&&(is_mail_ready == true)&&(is_team_name_ready == true)&&(is_project_name_ready == true)&&(is_area_ready == true)&&(is_intro_ready == true)){
            is_ready = true;
        }
        
        if (is_ready == true){
            return true;
        }else{
            alert("请检查你的页面信息是否完整！");
            return false;
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
});//document