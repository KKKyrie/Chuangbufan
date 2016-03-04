$(document).ready(function(){
    //登录按钮
    $("button#content_login_btn").click(function(){
        var username = $("input#input_username").val();
        var password = $("input#input_password").val();
        if (username == ""){
            alert("请输入您的用户名！");
            return false;
        }
        if (password == ""){
            alert("请输入您的密码！");
            return false;
        }
        
        //username: Chuangbufan
        //password: 123456
        if ((username == "Chuangbufan") && (password == "123456")){
            window.location.href = "index%E2%88%9A.html";
        }else{
            alert("密码不正确！");
            $("input#input_username").val("");
            $("input#input_password").val("");
            
        }
    });
    
    //注册按钮
    $("button#content_register_btn").click(function(){
        window.location.href = "register.html";
    });
    
    
    //主要用于阻止用户在未登录或注册之前访问二级页面
    $("a.loginFirst").click(function(){
        alert("请先登录!");
    });
});