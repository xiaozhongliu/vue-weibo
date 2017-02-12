<template>
    <div>
        <h2>{{msg}}</h2>
        <mt-button type="primary" size="small" @click="weiboAuth">Login Weibo</mt-button>
        <mt-button type="primary" size="small" @click="getTimelines">Get Timelines</mt-button>
        <br/>
        <br/>
        <div v-for="item in timelines">
            <img class="head" :src="item.user.profile_image_url"/>
            <span class="name">{{item.user.name}}</span>:
            <span class="text">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {Button} from 'mint-ui'

    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Weibo Timelines'
            }
        },
        methods: {
            ...mapActions([
                'weiboAuth',
                'getTimelines'
            ])
        },
        computed: {
            timelines() {
                return this.$store.getters.timelines
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .head {
        position: relative;
        top: 4px;
        height: 20px;
        border-radius: 10px
    }

    .name {
        color: blue
    }
</style>