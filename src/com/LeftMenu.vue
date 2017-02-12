<template>
    <div class="menu" :class="{'menu_show':isMenuShow}">
        <aside>
            <div class="head">
                <img src="http://tva3.sinaimg.cn/crop.0.0.180.180.180/7896a011jw1e8qgp5bmzyj2050050aa8.jpg">
                <div class="username">DreamsAchieved</div>
            </div>
            {{textValue}}
            <ul>
                <li @click="toggleMenu">
                    <router-link to="/public_timeline">公共微博</router-link>
                </li>
                <li @click="toggleMenu">
                    <router-link to="/friends_timeline">朋友微博</router-link>
                </li>
            </ul>
        </aside>
        <main>
            <header>
                <img @click="toggleMenu" src="../asset/img/menu.png" alt="">
                <div class="title">
                    <span>公共微博</span>
                </div>
            </header>
            <div class="shade"></div>
        </main>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'LeftMenu',
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'isMenuShow'
            ])
        },
        methods: {
            toggleMenu() {
                this.$store.commit('TOGGLE_MENU')
                console.log(this.isMenuShow)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .menu {
        display: flex;
        position: absolute;
        top: 0;
        left: -40%;
        width: 140%;
        height: 100%;
        transition: left .2s linear;

        aside {
            z-index: 100;
            width: 40%;
            height: 100%;
            background: #fff;

            .head {
                text-align: center;
                padding: 15px 0;

                img {
                    width: 70px;
                    border-radius: 35px;
                }
            }

            li {
                display: block;
                padding: 5px 20px;
                border-bottom: #ddd 1px solid;
            }

            li:first-child {
                border-top: #ddd 1px solid
            }
        }

        main {
            display: block;
            width: 100%;

            header {
                padding: 5px;

                img {
                    width: 25px;
                    margin: 10px 5px 5px 10px;
                }

                .title {
                    display: inline-block;
                    position: relative;
                    top: -7px;
                    width: calc(100% - 80px);
                    text-align: center;
                }

            }

            .shade {
                z-index: -1;
                width: 100%;
                height: 100%;
                opacity: .5;
                transition: background .2s linear
            }

        }
    }

    .menu_show {
        left: 0;

        .shade {
            z-index: 1;
            background: #aaa;
        }

    }
</style>