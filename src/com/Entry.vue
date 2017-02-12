<template>
    <div class="entry">
        <img src="../asset/img/logo.png">
        <h1>{{msg}}</h1>
        <br/>
        <mt-button type="primary" size="small" @click="weiboAuth">Login Weibo</mt-button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {Button} from 'mint-ui'

    export default {
        data() {
            return {
                msg: 'Weibo Vue'
            }
        },
        methods: {
            ...mapActions([
                'weiboAuth'
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .entry {
        text-align: center;

        h1 {
            font-size: 1.6rem;
        }
    }
</style>