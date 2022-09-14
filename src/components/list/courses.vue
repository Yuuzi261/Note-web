<template>
    <BG />
    <Headline :titleText="selfName" />
    <NoteBlock v-for="_ in noteContent" :textTitle="_.title" :link="_.link" :icon="_.icon" :key="_" />
</template>
  
<script setup>
    import BG from '../../components/index/BG.vue';
    import Headline from './shared/NoteListHeadline.vue';
    import NoteBlock from './shared/NoteBlock.vue';


    const selfName = '課程筆記'

    const noteContent = [
        {
            title: 'MACHINE LEARNING 2022 SPRING',
            link: 'https://hackmd.io/@Yuuzi/ML2022SPRING',
            icon: '../src/assets/notes/courses/note.png'
        }
    ]
</script>
  
<style scoped>
</style>