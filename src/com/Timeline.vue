<template>
    <div class="timelines">
        <mt-button type="primary" size="small" @click="getTimelines">Refresh Timelines</mt-button>
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
        data () {
            return {}
        },
        methods: {
            ...mapActions([
                'getTimelines'
            ])
        },
        computed: {
            timelines() {
                return this.$store.getters.timelines
            }
        },
        mounted() {
            this.getTimelines();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    .timelines {
        padding: 0 8px 8px;
    }

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