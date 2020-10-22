/*  1 通过浏览器卷曲的高度来决定左侧飘窗的显示和隐藏 */
$(window).scroll(function() {
        if ($(window).scrollTop() >= 600) {
            $('.left-nav').fadeIn()
        } else {
            $('.left-nav').fadeOut()
        }
    })
    /* 2右侧飘窗小框滑动显示*/
$('.rn-center li:nth-child(3)').mouseenter(function() {
    $('.money ').animate({

        right: 44,
        opacity: 1,
    }, 200, 'linear')
})
$('.rn-center li:nth-child(3)').mouseleave(function() {
    $('.money ').animate({

        right: 98,
        opacity: 0,
    }, 200, 'linear')
})
$('.rn-center li:nth-child(4)').mouseenter(function() {
    $('.list').animate({
        right: 44,
        opacity: 1,
    }, 200, 'linear')
})
$('.rn-center li:nth-child(4)').mouseleave(function() {
    $('.list ').animate({
        right: 98,
        opacity: 0,
    }, 200, 'linear')
})
$('.rn-center li:nth-child(5)').mouseenter(function() {
    $('.history').animate({
        right: 44,
        opacity: 1,
    }, 200, 'linear')
})
$('.rn-center li:nth-child(5)').mouseleave(function() {
    $('.history ').animate({
        right: 98,
        opacity: 0,
    }, 200, 'linear')
})
$('.rn-bottom li:nth-child(2)').mouseenter(function() {
    $('.service').animate({
        right: 44,
        opacity: 1,
    }, 200, 'linear')
})
$('.rn-bottom li:nth-child(2)').mouseleave(function() {
    $('.service').animate({

        right: 98,
        opacity: 0,
    }, 200, 'linear')
})
$('.rn-bottom li:nth-child(3)').mouseenter(function() {
    $('.top').animate({
        right: 44,
        opacity: 1,
    }, 200, 'linear')
})
$('.rn-bottom li:nth-child(3)').mouseleave(function() {
        $('.top').animate({

            right: 98,
            opacity: 0,
        }, 200, 'linear')
    })
    /*3点击top返回顶部并且当浏览器卷曲高度>600pxtop显示*/
$('.top').click(function() {
    $('html').animate({
            scrollTop: 0,
        },
        1000)

    $('#topBox').css('display', 'none');
})

$(window).scroll(function() {
    if ($(window).scrollTop() >= 600) {
        // $('#top').show()
        $('#top').css({
            opacity: 1
        })
    } else {
        // $('#top').hide()
        $('#top').css({
            opacity: 0
        })
    }
})

/*4.鼠标划入.down 下拉菜单显示*/
$('.down').mousemove(function() {
    $('.menu ').slideDown(500, 'linear')
})
$('.menu').mouseleave(function() {
    $('.menu ').slideUp(500, 'linear')
})

/*5.bottom-link中鼠标移入a标签时，li向右移动20px，字体变#ed145b色*/
$('.bottom-link ul li a').mouseenter(function() {
    $(this).stop().animate({
        marginLeft: 20,

    }, 200, 'linear')
})
$('.bottom-link ul li a').mouseleave(function() {
        $(this).stop().animate({
            marginLeft: 0,

        }, 200, 'linear')
    })
    /*6.点击XX使rn-Box消失*/
$(".close").click(function() {
    $('#rn-Box').hide()
})
$('#rc-01').hover(function() {

    $('#rn-Box').css({
        display: "block"
    })
}, function() {

    $('#rn-Box').css({
        display: "none"
    })
})

/*7.seach关键字显示*/
var flag = false; //英文输入
//中文输入法开始
$('input').on('compositionstart', function() {
        flag = true;
    })
    //中文输入法结束
$('input').on('compositionend', function() {
    // 直接请求数据并渲染到ul里面
    getData($('input').val());
    flag = false;
})
$('input').on('input', function() {
    if (!flag) {
        //非中文输入法，直接渲染
        getData($('input').val());
    }
})

//商品信息，鼠标划上显示加入购物车；

$('.li01').mouseenter(function() {
    $('.li01').children('.commet_new').show();
    $('.li01').children('.add-cart').show();

})

$('.li01').mouseleave(function() {
    $('.li01').children('.commet_new').hide();
    $('.li01').children('.add-cart').hide();

})
$('.li02').mouseenter(function() {
    $('.li02').children('.commet_new').show();
    $('.li02').children('.add-cart').show();

})

$('.li02').mouseleave(function() {
    $('.li02').children('.commet_new').hide();
    $('.li02').children('.add-cart').hide();

})
$('.li03').mouseenter(function() {
    $('.li03').children('.commet_new').show();
    $('.li03').children('.add-cart').show();

})

$('.li03').mouseleave(function() {
    $('.li03').children('.commet_new').hide();
    $('.li03').children('.add-cart').hide();

})
$('.li04').mouseenter(function() {
    $('.li04').children('.commet_new').show();
    $('.li04').children('.add-cart').show();

})

$('.li04').mouseleave(function() {
    $('.li04').children('.commet_new').hide();
    $('.li04').children('.add-cart').hide();

})

$('.li05').mouseenter(function() {
    $('.li05').children('.commet_new').show();
    $('.li05').children('.add-cart').show();

})

$('.li05').mouseleave(function() {
    $('.li05').children('.commet_new').hide();
    $('.li05').children('.add-cart').hide();

})
$('.li06').mouseenter(function() {
    $('.li06').children('.commet_new').show();
    $('.li06').children('.add-cart').show();

})

$('.li06').mouseleave(function() {
    $('.li06').children('.commet_new').hide();
    $('.li06').children('.add-cart').hide();

})
$('.li07').mouseenter(function() {
    $('.li07').children('.commet_new').show();
    $('.li07').children('.add-cart').show();

})

$('.li07').mouseleave(function() {
    $('.li07').children('.commet_new').hide();
    $('.li07').children('.add-cart').hide();

})
$('.li08').mouseenter(function() {
    $('.li08').children('.commet_new').show();
    $('.li08').children('.add-cart').show();

})

$('.li08').mouseleave(function() {
    $('.li08').children('.commet_new').hide();
    $('.li08').children('.add-cart').hide();

})
$('.li09').mouseenter(function() {
    $('.li09').children('.commet_new').show();
    $('.li09').children('.add-cart').show();

})

$('.li09').mouseleave(function() {
    $('.li09').children('.commet_new').hide();
    $('.li09').children('.add-cart').hide();

})
$('.li10').mouseenter(function() {
    $('.li10').children('.commet_new').show();
    $('.li10').children('.add-cart').show();

})

$('.li10').mouseleave(function() {
    $('.li10').children('.commet_new').hide();
    $('.li10').children('.add-cart').hide();

})
$('.li11').mouseenter(function() {
    $('.li11').children('.commet_new').show();
    $('.li11').children('.add-cart').show();

})

$('.li01').mouseleave(function() {
    $('.li01').children('.commet_new').hide();
    $('.li01').children('.add-cart').hide();

})
$('.li12').mouseenter(function() {
    $('.li12').children('.commet_new').show();
    $('.li12').children('.add-cart').show();

})

$('.li12').mouseleave(function() {
        $('.li12').children('.commet_new').hide();
        $('.li12').children('.add-cart').hide();

    })
    //封装查询的方法
function getData(text) {
    $.ajax({
        url: 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=7513,32617,1451,7544,31660,32723,32231,7516,32116,26350&req=2&csor=1',
        jsonp: 'cb',
        data: {
            wd: text
        },
        dataType: 'jsonp',
        success: function(res) {

            $('.seachBox ul').empty()
            if (res.g) {
                $.each(res.g, function(i, v) {
                    $('.seachBox ul').append('<li>' + v.q + '</li>')
                })
            }
        }

    })
}
$('.text').click(function() {
    $('.seachBox').toggle()
})
$('.seachBox>ul').click(function(e) {
    var e = window.event || e
    var target = e.target
    $('.text').val(target.innerText)
    $('.seachBox').hide()
})

/*加入购物车 */
var n = 0;
$('#cart-btn01').click(function() {
    n++
    $.ajax({
        url: 'http://localhost/Project/interface/addwq.php',
        data: {
            id: "01",
            name: "[3盒装] 迪迦婷药丸(蓝色补水镇静+绿色晒后修护+黑色清洁)",
            price: 96,
            img: "../image/cart/02.jpg",
            num: 1
        },
        success: function(res) {
            if (res.code) {
                $('.num').html(n)
            }
        },
        dataType: 'json'
    })
})
$('#cart-btn02').click(function() {
    n++
    $.ajax({
        url: 'http://localhost/Project/interface/addwq.php',
        data: {
            id: "02",
            name: "韩国爱敬气垫BB霜粉底液",
            price: 109,
            img: "../image/cart/01.jpg",
            num: 1
        },
        success: function(res) {
            if (res.code) {
                $('.num').html(n)
            }
        },
        dataType: 'json'
    })
})
$('#cart-btn03').click(function() {
    n++
    $.ajax({
        url: 'http://localhost/Project/interface/addwq.php',
        data: {
            id: "03",
            name: "梦幻泪液体防水笔眼线笔0.4ml",
            price: 59,
            img: "../image/cart/03.jpg",
            num: 1
        },
        success: function(res) {
            if (res.code) {
                $('.num').html(n)
            }
        },
        dataType: 'json'
    })
})
$('#myCart').click(function() {
    location.href = "../pages/cart.html"
})

/*显示抢购*/
//1,显示距离11.11.00：00：00d的时间

function delayTime() {
    var now = new Date();
    var target = new Date('2020-11-11 00:00:00');
    now = now.getTime(); //当前时间距离格林威治时间的时间差;
    target = target.getTime(); //目标时间距离格林威治时间的时间差;
    var differTime = target - now;
    differTime = parseInt(differTime / 1000);

    var day = Math.floor(differTime / (24 * 60 * 60));
    var afterHours = differTime - day * 24 * 60 * 60;
    var hours = Math.floor(afterHours / 3600);
    var afterMinutes = afterHours - hours * 3600;
    var minutes = Math.floor(afterMinutes / 60);
    var seconds = afterMinutes - minutes * 60;
    var arr = [day, hours, minutes, seconds];
    // console.log('相差' + day + '天' + hours + '小时' + minutes + '分' + seconds + '秒')
    var spanArr = document.getElementsByClassName('time');
    // console.log(spanArr);
    for (var i = 0; i < spanArr.length; i++) {
        spanArr[i].innerHTML = arr[i];
    }

}
delayTime()
timer = setInterval(function() {
        delayTime()
    }, 1000)
    // setTimeout(function() {
    //     $('#02').text("￥150");
    //     $('#limitPrice').empty();
    // }, 1753440)