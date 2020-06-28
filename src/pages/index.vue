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
                            <img :src="item.img" :alt="item.title">
                        </a>
                    </swiper-slide>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </Swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner-box"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'index',
    components: {
         Swiper,
         SwiperSlide,
        ServiceBar
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
            ]
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
                    z-index: 98;
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
        }
    }
</style>