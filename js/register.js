//0.获取相关元素：
var pnum = $id('pnum');
var code = $id('code');
var yzBtn = $id('yzBtn');
var yz = $id('yz')
var password = $id('password');
var repassword = $id('repassword');
var btn = $id("btn");
var pArr = document.getElementsByTagName('p')
var result = false;
//1.验证用户名
pnum.oninput = function() {
    pArr[0].style.display = 'block'
    result = checkName(this.value, pArr[0])
        // console.log(result)
    if (result) {
        //4-2.验证验证码
        code.oninput = function() {
            pArr[1].style.display = 'block'
            var v = this.value

            if (v == strCode) {
                pArr[1].innerHTML = "验证码输入正确"
                pArr[1].style.color = "green";
                result = true;
            } else {
                pArr[1].innerHTML = "验证码输入不正确"
                pArr[1].style.color = "red";
                result = false;
            }
            // console.log(result)
        }
        if (result) {
            //2.验证密码
            password.oninput = function() {
                pArr[2].style.display = 'block'
                result = checkPw(this.value, pArr[2])
                console.log(result);
                if (result) {
                    //3.重复密码
                    repassword.oninput = function() {
                        pArr[3].style.display = 'block'
                        if (password.value === this.value) {
                            pArr[3].innerHTML = "两次密码输入一致"
                            pArr[3].style.color = "green";
                            result = true;
                            /*只有所有的框框都填完，到两次密码输入一直以后才可以提交数据 */
                            //jQury发送$.ajax方法
                            $('#btn').click(function() {
                                console.log($("#pnum").val())
                                console.log($("#password").val())
                                $.ajax({
                                    url: '../interface/register.php',
                                    type: 'post',
                                    data: { username: $("#pnum").val(), password: $("#password").val() },
                                    success: function(res) {
                                        console.log(res);
                                        var i = JSON.parse(res);
                                        console.log(i.code);
                                        console.log("成功的回调")
                                        if (i.code == 1) {
                                            location.href = '../pages/login.html'
                                        } else {
                                            alert("注册失败")
                                        }
                                    },
                                    error: function(res) {
                                        console.log(res);
                                        console.log('失败的回调')
                                    }
                                })
                            })

                        } else {
                            pArr[3].innerHTML = "两次密码输入不一致，请重新输入"
                            pArr[3].style.color = "red";
                            result = false;
                        }

                    }
                }
            }
        }
    }
    // console.log(result);
}




window.onload = function() {
    //4-1.显示验证码
    yz.innerHTML = yzm();
    yzBtn.onclick = function() {
        yz.innerHTML = yzm();
    }

}



//封装一个方法用于验证用户名是否符合正则,并显示结果
function checkName(str, dom) {
    //书写用户名检测的正则:用户名必须是3-6位的字母数字或者下划线
    var reg = /^\w{3,8}$/;
    if (reg.test(str)) {
        dom.innerHTML = "用户名可以注册";
        dom.style.color = "green";
        return true;
    } else {
        dom.innerHTML = "用户名必须是3-6位的字母数字或者下划线";
        dom.style.color = "red";
        return false;
    }
}
//封装一个方法用于验证密码是否符合正则,并显示结果
function checkPw(str, dom) {
    //书写密码检测的正则:密码必须是8-12的字母,数字或者特殊符号
    var reg = /^[\w\d\~\!\@\#\$\%\^\&\*]{8,12}$/;
    if (reg.test(str)) {
        dom.innerHTML = "密码可以使用"
        dom.style.color = "green";
        return true;
    } else {
        //不符合正则
        dom.innerHTML = "密码必须是8-12的字母,数字或者特殊符号"
        dom.style.color = "red";
        return false;
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