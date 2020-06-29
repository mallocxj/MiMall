<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a :href="sub? '/#/product/'+sub.id:'javascript:;'">
                                            <img :src="sub? sub.img:'/imgs/item-box-1.png'">
                                            {{sub? sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">电视 盒子</a>
                        </li>
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">笔记本 平板</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a :href="sub? '/#/product/'+sub.id:'javascript:;'">
                                            <img :src="sub? sub.img:'/imgs/item-box-1.png'">
                                            {{sub? sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">家电 插线板</a>
                        </li>
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">出行 穿戴</a>
                        </li>
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">耳机 音响</a>
                        </li>
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">电源 配件</a>
                        </li>
                        <li class="menu-items">
                            <a href="javascript:;" target="_blank">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <Swiper :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id" target="_blank">
                            <img v-lazy="item.img" :alt="item.title">
                        </a>
                    </swiper-slide>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </Swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" target="_blank" v-for="(item,index) in adsList" :key="index">
                    <img v-lazy="item.img">
                </a>
            </div>
            <div class="banner-box">
                <a href="/#/product/30" target="_blank">
                    <img v-lazy="'/imgs/banner-1.png'" alt="banner">
                </a>
            </div>
        </div>
        <div class="gray">
            <div class="container">
                <div class="product-box">
                    <h2 class="title">手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="/#/product/35" target="_blank"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
                        </div>
                        <div class="list-box">
                            <div class="list" v-for="(arr,i) in phoneList" :key="i">
                                <div class="item" v-for="(item,j) in arr" :key="j">
                                    <span class="tag new-product">新品</span>
                                    <div class="item-img">
                                        <img v-lazy="item.mainImage" alt="">
                                    </div>
                                    <div class="item-info">
                                        <h3>{{item.name}}</h3>
                                        <p class="decription">{{item.subtitle}}</p>
                                        <p class="price" @click="addCart(item.id)">{{item.price | currency}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal 
            title="提示"
            sureText="查看购物车"
            btnType="3"
            :showModal="showModal"
            @submit="gotoCart()"
            @cancle="showModal=false">
            <template v-slot:modalBody>
                <p>商品加入购物车成功！</p>
            </template>
        </modal>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'index',
    components: {
        Swiper,
        SwiperSlide,
        ServiceBar,
        Modal
    },
    data(){
        return{
            swiperOptions:{
                autoplay:true,
                loop:true,
                effect:'cube',
                 cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            slideList:[
                {
                    id: '42',
                    img: "/imgs/slider/slide-1.jpg",
                    title:"swiperimg1"
                },
                {
                    id: '45',
                    img: "/imgs/slider/slide-2.jpg",
                    title:"swiperimg2"
                },
                {
                    id: '46',
                    img: "/imgs/slider/slide-3.jpg",
                    title:"swiperimg3"
                },
                {
                    id: '',
                    img: "/imgs/slider/slide-4.jpg",
                    title:"swiperimg4"
                },
                {
                    id: '',
                    img: "/imgs/slider/slide-5.jpg",
                    title:"swiperimg5"
                }
            ],
            menuList:[
                [
                    {
                        id:'30',
                        img:'/imgs/item-box-1.png',
                        name:"小米CC9"
                    },
                    {
                        id:'31',
                        img:'/imgs/item-box-2.png',
                        name:"小米8青春版"
                    },
                    {
                        id:'32',
                        img:'/imgs/item-box-3.jpg',
                        name:"Redmi K20 Pro"
                    },
                    {
                        id:'33',
                        img:'/imgs/item-box-4.jpg',
                        name:"移动4G专区"
                    },
                ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },
                {
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },
                {
                    id:45,
                    img:'/imgs/ads/ads-3.png'
                },
                {
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'
                }
            ],
            phoneList:[],
            showModal:false
        }
    },
    filters:{
        currency(val){
            if(!val)return '0.00';
            return val.toFixed(2) + '元'
        }
    },
    mounted(){
        this.init();        
    },
    methods:{
        init: function(){
            this.axios.get('/products',{
                params:{
                    categoryId:100012,
                    pageSize:14
                }
            }).then((res)=>{
                this.phoneList = [res.list.slice(6,10), res.list.slice(10,14)];
            })
        },
        addCart(){
            this.showModal = true;
            /*this.axios.post('/carts',{
                productId: id,
                selected: true
            }).then((res)=>{

            })*/
        },
        gotoCart(){
            this.$router.push('/cart');
        }
    }
}
</script>
<style lang="scss" scoped>
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .index{
        .container{
            .swiper-box{
                .nav-menu{
                    width: 264px;
                    height: 451px;
                    box-sizing: border-box;
                    position: absolute;
                    z-index: 5;
                    padding: 26px 0;
                    background-color: #55575970;
                    .menu-wrap{
                        .menu-items{
                            height: 50px;
                            line-height: 50px;
                            a{
                                position: relative;
                                display: block;
                                color: #ffffff;
                                font-size: 16px;
                                font-weight: bold;
                                padding-left: 30px;
                                &:after{
                                    content: ' ';
                                    @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                                    position: absolute;
                                    right: 30px;
                                    top: 18px;
                                }
                            }
                            &:hover{
                                background-color: $colorA;
                                .children{
                                    display: block;
                                }
                            }
                            .children{
                                display: none;
                                position: absolute;
                                z-index: 98;
                                width: 964px;
                                height: 451px;
                                top: 0;
                                left: 264px;
                                box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                                background-color: #ffffff;
                                border-top: 1px solid $colorH;
                                ul{
                                    display: flex;
                                    justify-content: space-between;
                                    li{
                                        flex: 1;
                                        height: 75px;
                                        line-height: 75px;
                                        img{
                                            width:35px;
                                            height: 42px;
                                            vertical-align: middle;
                                            margin-right: 14px;
                                        }
                                        a{
                                            color: $colorB;
                                            font-size: 14px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .swiper-container{
                    height: 451px;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
                .swiper-button-prev{
                    margin-left: 264px;
                }
            }
            .ads-box{
                @include flex();
                margin: 14px 0 31px 0;
                a{
                    width: 296px;
                    height: 167px;
                }
            }
            .banner-box{
                margin-bottom: 50px;
                width: 100%;
            }
        }
        .gray{
            background-color: $colorJ;
            .container{
                .product-box{
                    padding: 30px 0 50px;
                    .title{
                        color: $colorB;
                        font-size: $fontF;
                        font-weight: bold;
                        line-height: 22px;
                    }
                    .wrapper{
                        margin-top: 20px;
                        display: flex;
                        .banner-left{
                            margin-right: 16px;
                            a{
                                display: block;
                                width: 224px;
                                height: 619px;
                            }
                        }
                        .list-box{
                            .list{
                                width: 986px;
                                @include flex();
                                &:first-child{
                                    margin-bottom: 14px;
                                }
                                .item{
                                    width: 236px;
                                    height: 302px;
                                    text-align: center;
                                    background-color: #ffffff;
                                    .tag{
                                        display: inline-block;
                                        width: 67px;
                                        height: 24px;
                                        color: #ffffff;
                                        line-height: 24px;
                                        font-size: 14px;
                                        &.new-product{
                                            background-color: #7DCF67;
                                        }
                                        &.kill-product{
                                            background-color: #E82626;
                                        }
                                    }
                                    .item-img{
                                        img{
                                            max-width: 100%;
                                            height: 195px;
                                        }
                                    }
                                    .item-info{
                                        h3{
                                            color: $colorB;
                                            font-size: $fontJ;
                                            line-height: $fontJ;
                                            font-weight: bold;
                                        }
                                        .decription{
                                            color: $colorD;
                                            font-size: 12px;
                                            font-weight: bold;
                                            margin: 6px auto 13px;
                                        }
                                        .price{
                                            color: #F20A0A;
                                            font-size: $fontJ;
                                            font-weight: bold;
                                            cursor: pointer;
                                            &:after{
                                                @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                                content: ' ';
                                                margin-left: 5px;
                                                vertical-align: -5px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .btn{
        &:nth-child(2){
            margin-left: 20px;
        }
        &.btn-sure{
            @include button (160px,40px,$colorA,#ffffff,16px)
        }
        &.btn-cancle{
            @include button (120px,40px,#B0B0B0,#ffffff,16px)
        }
    }
</style>