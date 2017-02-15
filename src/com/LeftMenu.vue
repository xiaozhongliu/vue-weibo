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
                    <router-link to="/timeline/public">公共微博</router-link>
                </li>
                <li @click="toggleMenu">
                    <router-link to="/timeline/friends">朋友微博</router-link>
                </li>
            </ul>
        </aside>
        <main>
            <header>
                <img @click="toggleMenu(isMenuShow)" src="../asset/img/menu.png" alt="">
                <div class="title">
                    <span>{{timelineType}}</span>
                </div>
            </header>
            <div class="shade" @click="toggleMenu(true)"></div>
        </main>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                menuElement: null
            }
        },
        computed: {
            ...mapGetters([
                'isMenuShow',
                'timelineType'
            ])
        },
        methods: {
            toggleMenu(isHide) {

                if (!this.menuElement) {
                    this.menuElement = document.querySelector('.menu')
                }
                this.menuElement.style.height = '100%';

                isHide && setTimeout(() => {
                    this.menuElement.style.height = '48px';
                }, 300);

                this.$store.commit('TOGGLE_MENU', isHide)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../asset/vars.scss';

    .menu {
        z-index: 100;
        display: flex;
        position: absolute;
        top: 0;
        left: -70%;
        width: 170%;
        height: 100%;
        transition: left .2s linear, width .2s linear;

        aside {
            width: 70%;
            height: 100%;
            background: #fff;

            .head {
                text-align: center;
                padding: 15px 0;

                img {
                    width: 70px;
                    border-radius: 35px
                }
            }

            li {
                display: block;
                padding: 5px 20px;
                border-bottom: #ddd 1px solid
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
                    margin: 10px 5px 5px 10px
                }

                .title {
                    display: inline-block;
                    position: relative;
                    top: -7px;
                    width: calc(100% - 80px);
                    text-align: center
                }
            }

            .shade {
                width: 100%;
                height: calc(100% - #{$header-height});
                opacity: .5;
                transition: background .2s linear
            }
        }
    }

    .menu_show {
        left: 0;
        width: 100%;

        .shade {
            background: #aaa
        }
    }

    .menu_show + .content {
        height: calc(100vh - #{$header-height});
        overflow: hidden
    }
</style>