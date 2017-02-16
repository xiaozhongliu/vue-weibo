<template>
    <div>
        <LeftMenu></LeftMenu>
        <div class="content">
            <transition name="slide-fade">
                <router-view :key="$route.params.type"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import LeftMenu from './LeftMenu.vue'

    export default {
        components: {LeftMenu},
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .content {
        padding-top: 40px
    }
</style>