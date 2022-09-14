<template>
    <BG />
    <Headline :titleText="selfName" />
    <NoteBlock v-for="_ in noteContent" :textTitle="_.title" :link="_.link" :icon="_.icon" :key="_" />
</template>
  
<script setup>
    import BG from '../../components/index/BG.vue';
    import Headline from './shared/NoteListHeadline.vue';
    import NoteBlock from './shared/NoteBlock.vue';

    const selfName = '個人化'

    const noteContent = [
        {
            title: '美化 Windows Terminal',
            link: 'https://hackmd.io/@Yuuzi/wt',
            icon: '../src/assets/notes/spiceup/wt.png'
        }
    ]
</script>
  
<style scoped>
</style>