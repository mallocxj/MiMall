<template>
    <div>
        order
        <order-header></order-header>
        <router-view></router-view>
        <navi-footer></navi-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import NaviFooter from './../components/NaviFooter'
export default {
    name:'order',
    components: {
        OrderHeader,
        NaviFooter
    }
}
</script>