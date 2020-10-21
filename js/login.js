//0.获取相关元素：
var pnum = $id('pnum');
var code = $id('code');
var yzBtn = $id('yzBtn');
var yz = $id('yz')
var password = $id('password');
var btn = $id("btn");
var pArr = document.getElementsByTagName('p');
//1.输入用户名，P显示
pnum.oninput = function() {
        pArr[0].style.display = 'block'
    }
    //2. 输入密码，P显示
password.oninput = function() {
    pArr[1].style.display = 'block'

}
window.onload = function() {
    //3-1.显示验证码
    yz.innerHTML = yzm();
    yzBtn.onclick = function() {
            yz.innerHTML = yzm();
        }
        //3-2.验证验证码
    code.oninput = function() {
        pArr[2].style.display = 'block'
        var v = this.value

        if (v == strCode) {
            pArr[2].innerHTML = "验证码输入正确"
            pArr[2].style.color = "green";
            /*验证码输入正确后才可以点击登录 */
            //jQury发送$.ajax方法
            $('#btn').click(function() {
                console.log($("#pnum").val())
                console.log($("#password").val())
                $.ajax({
                    url: '../interface/login.php',
                    type: 'post',
                    data: { username: $("#pnum").val(), password: $("#password").val() },
                    success: function(res) {
                        console.log(res);
                        var i = JSON.parse(res);
                        console.log(i.code);
                        console.log('成功的回调');
                        if (i.code == 1) {
                            location.href = '../pages/index.html'
                        } else {
                            alert("登录失败")
                        }
                    },
                    error: function(res) {
                        console.log(res);
                        console.log('失败的回调')
                    }
                })
            })

        } else {
            pArr[2].innerHTML = "验证码输入不正确"
            pArr[2].style.color = "red";
            return false;
        }
    }
}


//封装一个生成6位验证码的方法
var strCode = ""

function yzm() {
    var str = 0;
    for (var i = 0; i < 5; i++) {
        var code = rand(49, 57);

        str += String.fromCharCode(code);

    }
    strCode = str;
    return str;
}