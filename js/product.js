$('.cen01-input').click(function() {
        if ($('#detail').css('display') == 'none') {
            $('#detail').show();
        } else {
            $('#detail').hide();
        }


    })
    //鼠标点击，商品分类信息显示在上面
$('#detail').click(function(e) {
    var e = e || window.event;
    var target = e.target;
    $('.cen01-input').html(target.text)
});
//鼠标划入我的聚美,下拉菜单显示
$('.my').mousemove(function() {
    $('.hr-list').slideDown()

});
$('.hr-list').mouseleave(function() {
    $('.hr-list').slideUp()

});
$('.more').mousemove(function() {
    $('.hr-more').slideDown()

});
$('.more').mouseleave(function() {
    $('.hr-more').slideUp()

});
$('#cart').click(function() {

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
            alert("购物车添加成功");
        },
        dataType: 'json'
    })
})