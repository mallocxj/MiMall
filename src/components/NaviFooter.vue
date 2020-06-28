<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="logo">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">dagoua主页</a><span>|</span>
            <a href="javascript:;">全部课程</a><span>|</span>
            <a href="javascript:;">MIUI</a><span>|</span>
            <a href="javascript:;">小米公司儿童信息保护规则</a>
        </div>
        <div class="footer-copyright">
            <p>Copyright © 2004 - 2020  <span class="email">京东JD.com</span> 版权所有</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'navi-footer'
}
</script>
<style lang="scss" scoped>
    @import './../assets/scss/config.scss';
    .footer{
        text-align: center;
        background-color: #333333;
        height: 234px;
        border-top: 4px solid $colorA;
        .footer-logo{
            margin: 46px 0 31px 0;
            img{
                width: 53px;
                height: 36px;
            }
            p{
                color: $colorD;
                font-size: $fontI;
                margin-top: 13px;
            }
        }
        .footer-link{
            a{
                color: $colorD;
                font-size: $fontI;
            }
            span{
                color: $colorD;
                font-size: $fontI;
                margin: 0 10px;
            }
        }
        .footer-copyright{
            color: $colorD;
            font-size: $fontI;
            .email{
                color: $colorA;
            }
        }
    }
</style>