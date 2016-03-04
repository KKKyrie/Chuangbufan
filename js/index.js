//主要用于阻止用户在未登录或注册之前访问二级页面
//$("a.loginFirst").click(function(){
//    alert("请先登录!");
//});

$("button#start").click(function(){
    window.location.href="pages/login.html";
});

$("img#slide").click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: 530}, 1500);
});