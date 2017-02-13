<template>
    <div>
        <LeftMenu></LeftMenu>
        <div class="content">
            <router-view></router-view>
        </div>
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