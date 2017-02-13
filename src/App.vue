<template>
    <div class="app">
        <router-view></router-view>
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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: #efefef;
        margin-top: $header-height
    }
</style>