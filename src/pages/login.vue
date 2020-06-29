<template>
    <div class="login">
        <div class="container">
            <div class="logo">
                <a href="/#/idnex">
                    <img v-lazy="'/imgs/login-logo.png'" alt="商城logo">
                </a>
            </div>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-box">
                    <div class="info-box">
                        <div class="title-bar selected">
                            <span>账号登录</span>
                            <div class="children">
                                <div class="input">
                                    <input type="text" placeholder="请输入账号" v-model="username">
                                </div>
                                <div class="input">
                                    <input type="password" placeholder="请输入密码" v-model="password">
                                </div>
                                <div class="btn-box">
                                    <a href="javascript:;" class="btn" @click="login()">登录</a>
                                </div>
                                <div class="sub-function">
                                    <a href="javascript:;">手机短信登录/注册</a>
                                    <a href="javascript:;">立即注册 | 忘记密码?</a>
                                </div>
                            </div>
                        </div>
                        <div class="title-bar">
                            <span>扫码登录</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="login-footer">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            this.axios.post('/user/login',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                this.$cookie.set('userId',res.id,{expires:'1h'})
                this.$router.push('/index');
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
    .login{
        background-color: $colorG;
        .container{
            .logo{
                height: 112px;
                text-align: left;
                box-sizing: border-box;
                padding: 7px 0;
                a{
                    display: inline-block;
                    width: 200px;
                    height: 98px;
                }
            }
        }
        .wrapper{
            @include bgImg(100%,576px,'/imgs/login-bg.jpg',100% 576px);
            .container{
                position: relative;
                .login-box{
                    @include position(absolute,410px,510px,37px,auto);
                    right: 20px;
                    background-color: $colorG;
                    .info-box{
                        padding: 40px 31px 49px;
                        @include flex();
                        .title-bar{
                            flex: 1;
                            height: 23px;
                            line-height: 23px;
                            text-align: center;
                            &:first-child{
                                border-right: 2px solid $colorH;
                            }
                            &>span{
                               font-size: 24px;
                               font-weight: bold; 
                               color: $colorC;
                            }
                            .children{
                                @include position(absolute,348px,auto,112px,31px);
                                z-index: 1;
                                display: none;
                                .input{
                                    width: 348px;
                                    height: 50px;
                                    margin-bottom: 20px;
                                    input{
                                        font-size: 14px;
                                        padding-left:18px;
                                        line-height: 50px;
                                        border: 1px solid $colorH;
                                        color: $colorD;
                                    }
                                }
                                .btn-box{
                                    margin: 10px 0 14px;
                                    .btn{
                                        @include button (100%,50px,$colorA,$colorG,16px);
                                    }
                                }
                                .sub-function{
                                    @include flex();
                                    width: 100%;
                                    a{
                                        display: inline-block;
                                        text-align: right;
                                        flex: 1;
                                        font-size: 14px;
                                        color: $colorD;
                                        &:first-child{
                                            text-align: left;
                                            color: $colorA;
                                        }
                                    }
                                }
                            }
                            &.selected{
                                &>span{
                                    color: $colorA;
                                }
                                .children{
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>