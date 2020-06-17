<template>
    <div>
        home
        <navi-header></navi-header>
        <router-view></router-view>
        <navi-footer></navi-footer>
    </div>
</template>
<script>
import NaviHeader from './../components/NaviHeader'
import NaviFooter from './../components/NaviFooter'
export default {
    name:'home',
    components: {
        NaviHeader,
        NaviFooter
    }
}
</script>