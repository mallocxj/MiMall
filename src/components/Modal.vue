<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>标题</span>
                </div>
                <div class="modal-body">
                    <slot name="modalBody"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn btn-sure" v-if="btnType=='1'||btnType=='3'" @click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn btn-cancle" v-if="btnType=='2'||btnType=='3'" @click="$emit('cancle')">取消</a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'modal',
    props:{
        // 弹框类型
        modalType:{
            type:String,
            default:'form'
        },
        // 标题
        title:String,
        // 按钮类型： 1：确定 2：取消 3：确定取消
        btnType:String,
        sureText:{
            type:String,
            default:'确定'
        },
        showModal:Boolean
    }
}
</script>
<style lang='scss' scoped>
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .modal{
        @include position(fixed,100%,100%,0,0);
        z-index: 10;
        transition: all .5s;
        .mask{
            @include position(fixed,100%,100%,0,0);
            background-color: $colorI;
            opacity: 0.5;
        }
        &.slide-enter-active{
            top: 0;
        }
        &.slide-leave-active{
            top: -100%;
        }
        &.slide-enter{
            top: -100%;
        }
        .modal-dialog{
            @include position(absolute,660px,auto,20%,50%);
            z-index: 999;
            background-color: $colorG;
            margin-left: -330px;
            .modal-header{
                background-color: $colorJ;
                height: 60px;
                line-height: 60px;
                span{
                    color: $colorB;
                    font-size: $fontI;
                    padding-left: 26px;
                    font-weight: bold;
                }
            }
            .modal-body{
                padding: 42px 29px 54px 41px;
                font-size: 14px;
            }
            .modal-footer{
                height: 82px;
                background-color: $colorJ;
                box-sizing: border-box;
                padding: 21px 0;
                text-align: center;
                .btn{
                    &:nth-child(2){
                        margin-left: 20px;
                    }
                }
            }
        }
    }
</style>