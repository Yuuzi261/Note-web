<template>
    <BG />
    <Headline />
    <Category v-for="_ in Content" :title="_.title" :noteList="_.noteList" :imgsrc="_.imgsrc" :textTitle="_.textTitle" :text="_.text" :link="_.link" :key="_" />
</template>

<script>
    import BG from './components/index/BG.vue';
    import Headline from './components/index/Headline.vue';
    import Category from './components/index/Category.vue';

    export default {
        setup(){
            const Content = [
                {
                    title: 'install',
                    noteList: ['安裝 Python', '安裝 Visual Studio Code', '安裝 Git'],
                    imgsrc: 'https://i.imgur.com/Lj0mZGO.png',
                    textTitle: '安裝教學',
                    text: '入門級簡易安裝教學',
                    link: 'install'
                },
                {
                    title: 'spice up',
                    noteList: ['美化 Windows Terminal'],
                    imgsrc: 'https://i.imgur.com/4STX0PV.png',
                    textTitle: '個人化',
                    text: '想來點不一樣的? 試試這個',
                    link: 'spiceup'
                },
                {
                    title: 'courses',
                    noteList: ['MACHINE LEARNING 2022 SPRING'],
                    imgsrc: 'https://i.imgur.com/a9UH7GR.png',
                    textTitle: '課程筆記',
                    text: '存放我公開的上課筆記',
                    link: 'courses'
                }
            ]

            return {
                Content
            }
        },
        components:{
            BG,
            Headline,
            Category
        }
    }

    
</script>

<style scoped>
</style>
