<template>
    <BG />
    <Title />
    <Category v-for="_ in GlassContent" v-bind:title="_.title" v-bind:noteList="_.noteList" v-bind:imgsrc="_.imgsrc" :key="_" />
</template>

<script setup>
    import BG from './components/BG.vue';
    import Title from './components/Title.vue';
    import Category from './components/Category.vue'

    const GlassContent = [
        {
            title: 'install',
            noteList: ['安裝 Python', '安裝 Visual Studio Code', '安裝 Git'],
            imgsrc: 'https://i.imgur.com/Lj0mZGO.png'
        },
        {
            title: 'courses',
            noteList: ['MACHINE LEARNING 2022 SPRING'],
            imgsrc: 'https://i.imgur.com/a9UH7GR.png'
        },
        {
            title: 'spice up',
            noteList: ['美化 Windows Terminal'],
            imgsrc: 'https://i.imgur.com/4STX0PV.png'
        }
    ]
</script>

<style scoped>
</style>
