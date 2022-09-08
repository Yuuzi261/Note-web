<template>
    <BG />
    <Title />
    <Glass v-for="_ in GlassContent" v-bind:title="_.title" v-bind:noteList="_.noteList" v-bind:imgsrc="_.imgsrc" :key="_"/>
</template>

<script setup>
    import BG from './components/BG.vue';
    import Title from './components/Title.vue';
    import Glass from './components/Glass.vue';

    const GlassContent = [
        {
            title: 'install',
            noteList: ['安裝 Python', '安裝 Visual Studio Code', '安裝 Git'],
            imgsrc: 'https://i.imgur.com/Lj0mZGO.png'
        },
        {
            title: 'courses',
            noteList: ['MACHINE LEARNING 2022 SPRING'],
            imgsrc: 'https://i.imgur.com/Lj0mZGO.png'
        },
        {
            title: 'spice up',
            noteList: ['美化 Windows Terminal'],
            imgsrc: 'https://i.imgur.com/Lj0mZGO.png'
        }
    ]
</script>

<style scoped>
</style>
