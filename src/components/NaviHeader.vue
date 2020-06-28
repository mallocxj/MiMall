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
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login()">登录</a>
                    <a href="javascript:;">订单</a>
                    <a href="javascript:;" class="cart" @click="gotoCart()"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="header-logo">
                <a href="/#/index" target="_self"></a>
            </div>
            <div class="header-menu">
                <div class="item-menu">
                    <span>小米手机</span>
                    <div class="children">
                        <ul>
                            <li class="product" v-for="(item,index) in phoneList" :key="index">
                                <a :href="'/#/product/'+item.id" target="_blank">
                                    <div class="pro-img"><img :src="item.mainImage" :alt="item.subtitle"></div>
                                    <div class="pro-name"><span>{{item.name}}</span></div>
                                    <div class="pro-price"><span>{{item.price | currency}}</span></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>Redmi红米</span>
                    <!-- <div class="children"></div> -->
                </div>
                <div class="item-menu">
                    <span>电视</span>
                    <div class="children"></div>
                </div>
            </div>
            <div class="header-search">
                <div class="wrapper">
                    <input type="text">
                    <a href="javascript:;"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'navi-header',
    data(){
        return{
            username:'',
            phoneList:[]
        }
    },
    filters:{
        currency(val){
            if(!val)return '0.00';
            return val.toFixed(2) + '元'
        }
    },
    mounted(){
        this.getProductList();
    },
    methods:{
        login(){
            this.$router.push('/login');
        },
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012',
                    // pageSize:6
                }
            }).then((res)=>{
                if(res.list.length>=6){
                    this.phoneList = res.list.slice(0,6);
                }else{
                    this.phoneList = res.list;
                }
            })
        },
        gotoCart(){
            this.$router.push('/cart');
        }
    }
}
</script>
<style lang = 'scss'>
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.header{
    .nav-topbar{
        background-color: #333333;
        height: 39px;
        line-height: 39px;
        color: #B0B0B0;
        .container{
            @include flex();
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
                    @include bgImg(16px,12px,'/imgs/icon-cart.png');
                    margin-right: 4px;
                }
            }
        }
    }
    .container{
        position: relative;
       @include flex();
        .header-logo{
            width: 55px;
            height: 55px;
            overflow: hidden;
            background-color: $colorA;
            cursor: pointer;
            a{
                width: 110px;
                height: 55px;
                transition: margin .2s linear;
                &:before{
                    content: ' ';
                    @include bgImg(55px,55px,'/imgs/mi-logo.png');
                }
                &:after{
                    content: ' ';
                    @include bgImg(55px,55px,'/imgs/mi-home.png');
                }
            }
            &:hover{
                a{
                    margin-left: -55px;
                }
            }
        }
        .header-menu{
            margin-left: 264px;
            height: 112px;
            line-height: 112px;
            width: 585px;
            .item-menu{
                display: inline-block;
                font-size: 16px;
                font-weight: bold;
                &>span{
                    margin-right: 20px;
                    cursor: pointer;
                }
                .children{
                    position: absolute;
                    top: 111px;
                    left: 0;
                    width: $min-width;
                    height: 0;
                    opacity: 0;
                    overflow: hidden;
                    border-top: 1px solid $colorH;
                    box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                    transition: all .5s;
                    background-color: #ffffff;
                    .product{
                        position: relative;
                        display: inline-block;
                        width: 16.6%;
                        height: 220px;
                        font-weight: bold;
                        font-size: 12px;
                        line-height: 12px;
                        text-align: center;
                        a{
                            display: inline-block;
                            .pro-img{
                                height: 137px;
                                img{
                                    height: 111px;
                                    margin-top: 26px;
                                }
                            }
                            .pro-name{
                                color: $colorB;
                                margin: 19px 0 8px 0;
                            }
                            .pro-price{
                                color: $colorA;
                            }
                        }
                        &:before{
                            content: ' ';
                            position:absolute;
                            right: 0;
                            top: 28px;
                            height: 100px;
                            border-right:1px solid $colorF;
                        }
                    }
                }
                &:hover{
                    color: $colorA;
                    .children{
                        opacity: 1;
                        height: 220px;
                    }
                }
            }
        }
        .header-search{
            width: 319px;
            .wrapper{
                border: 1px solid #E0E0E0;
                height: 50px;
                display: flex;
                align-items: center;
                input{
                    border: none;
                    border-right: 1px solid #E0E0E0;
                    width: 250px;
                    height: 50px;
                    padding-left: 14px;
                }
                a{
                    @include bgImg(18px,18px,'/imgs/icon-search.png',18px 18px);
                    padding: 18px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>