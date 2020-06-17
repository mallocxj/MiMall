<template>
    <div> 
        <order-header></order-header>
        cart
        <navi-footer></navi-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import NaviFooter from './../components/NaviFooter'
export default {
    name:'cart',
    components: {
        OrderHeader,
        NaviFooter
    }
}
</script>