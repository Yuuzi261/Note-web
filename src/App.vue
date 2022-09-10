<template>
    <BG />
    <Title />
    <Category v-for="_ in Content" v-bind:title="_.title" v-bind:noteList="_.noteList" v-bind:imgsrc="_.imgsrc" v-bind:textTitle="_.textTitle" v-bind:text="_.text" :key="_" />
</template>

<script setup>
    import BG from './components/BG.vue';
    import Title from './components/Title.vue';
    import Category from './components/Category.vue'

    const Content = [
        {
            title: 'install',
            noteList: ['安裝 Python', '安裝 Visual Studio Code', '安裝 Git'],
            imgsrc: 'https://i.imgur.com/Lj0mZGO.png',
            textTitle: '安裝教學',
            text: '入門級簡易安裝教學'
        },
        {
            title: 'spice up',
            noteList: ['美化 Windows Terminal'],
            imgsrc: 'https://i.imgur.com/4STX0PV.png',
            textTitle: '個人化',
            text: '想來點不一樣的? 試試這個'
        },
        {
            title: 'courses',
            noteList: ['MACHINE LEARNING 2022 SPRING'],
            imgsrc: 'https://i.imgur.com/a9UH7GR.png',
            textTitle: '課程筆記',
            text: '存放我公開的上課筆記'
        }
    ]
</script>

<style scoped>
</style>
