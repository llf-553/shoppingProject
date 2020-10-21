    // 一打开购物车页面,展示购物车里面的商品
    showProduct()

    function showProduct() {
        $.ajax({
            url: 'http://localhost/Project/interface/showlist.php',
            success: function(res) {
                console.log(res)
                var arr = res.data;
                if (res.data) {
                    //如果有商品,table显示,h2隐藏
                    $('table').show();
                    $('h2').hide();
                    //在table里面展示商品信息
                    $('tbody').empty();
                    $.each(arr, function(index, item) {
                        $('tbody').append(`<tr id="${item.product_id}">
                        <td>
                        <img src="${item.product_img}" alt="">
                    </td>
                    <td>${item.product_name}</td>
                        <td>${item.product_price}</td>
                        <td>
                        <div class="dnum">
                            <span class='add'>+</span>
                            <i>${item.product_num}</i>
                            <span class="reduce">-</span>
                            </div>
                        </td>
                        <td class="del"><div class="delBox"></div></td>
                    </tr>`)
                    })
                } else {
                    //如果没有商品,table隐藏,div显示
                    $('table').hide();
                    $('h2').show();
                }
            },
            dataType: 'json',
            cache: false
        })
    }
    // 点击+增加一个商品数量,点击-减少一个商品数量
    $('tbody').click(function(e) {
        var target = e.target;
        // console.log(target.className);
        // console.log($(target).parents('tr').attr('id'));
        // console.log(111);
        if ((target.className == "add") || (target.className == 'reduce')) {
            // 点击+增加一个商品数量,点击-减少一个商品数量
            $.ajax({
                url: 'http://localhost/Project/interface/updatewq.php',
                data: {
                    type: target.className,
                    id: $(target).parents('tr').attr('id')
                },
                success: function(res) {
                    if (res.code) {
                        showProduct()
                    }
                },
                dataType: 'json'
            })
        } else if (target.className == 'delBox') {
            $.ajax({
                url: 'http://localhost/Project/interface/delwq.php',
                data: {
                    id: $(target).parents('tr').attr('id')
                },
                success: function(res) {
                    console.log(res)
                    if (res.code) {
                        showProduct()
                    }
                },
                dataType: 'json'
            })
        }
    })