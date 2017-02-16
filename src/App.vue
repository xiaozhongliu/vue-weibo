<template>
    <div class="app">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" rel="stylesheet/scss">
    @import './asset/reset.scss';
    @import './asset/vars.scss';

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 90%;
        color: #2c3e50
    }

    .slide-fade-enter-active {
        transition: all 1s cubic-bezier(1, 0, 1, 1);;
    }

    .slide-fade-leave-active {
        transition: all .3s ease;
    }

    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>