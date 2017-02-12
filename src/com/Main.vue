<template>
    <div>
        <LeftMenu></LeftMenu>
        <router-view></router-view>
    </div>
</template>

<script>
    import LeftMenu from './LeftMenu.vue'

    export default {
        components: {LeftMenu},
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>