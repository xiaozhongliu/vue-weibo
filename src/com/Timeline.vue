<template>
    <div class="timelines">
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
            this.getTimelines(this.$route.params.type)
        },
        beforeRouteUpdate(to, from, next) {
            this.getTimelines(to.params.type);
            next()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    .timelines {
        padding: 0 13px 10px;
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