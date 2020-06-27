<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="JavaScript:;">小米商城</a>
                    <a href="JavaScript:;">MUI</a>
                    <a href="JavaScript:;">云服务</a>
                    <a href="JavaScript:;">协议规则而</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'navi-header'
}
</script>
<style lang = 'scss'>
.header{
    .nav-topbar{
        background-color: #333333;
        height: 39px;
        line-height: 39px;
        color: #B0B0B0;
        .container{
            width: 1226px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                display: inline-block;
                margin-right: 17px;;
                color: #B0B0B0;
                font-size: 12px;
            }
            .cart{
                width: 110px;
                background-color: #666666;
                text-align: center;
                .icon-cart{
                    background: url('/imgs/icon-cart.png') no-repeat center;
                    background-size: contain;
                    display: inline-block;
                    width: 16px;
                    height: 12px;
                    margin-right: 4px;
                }
            }
        }
    }
}
</style>