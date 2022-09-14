<template>
    <BG />
    <Headline :titleText="selfName" />
    <NoteBlock v-for="_ in noteContent" :textTitle="_.title" :link="_.link" :icon="_.icon" :key="_" />
</template>
  
<script setup>
    import BG from '../../components/index/BG.vue';
    import Headline from './shared/NoteListHeadline.vue';
    import NoteBlock from './shared/NoteBlock.vue';

    const selfName = '安裝教學'

    const noteContent = [
        {
            title: '安裝 Python',
            link: 'https://hackmd.io/@Yuuzi/install-python',
            icon: 'https://i.imgur.com/PnZSdto.png'
        },
        {
            title: '安裝 Visual Studio Code',
            link: 'https://hackmd.io/@Yuuzi/install-vscode',
            icon: 'https://i.imgur.com/TFsjewn.png'
        },
        {
            title: '安裝 Git',
            link: '',
            icon: 'https://i.imgur.com/PuXhba2.png'
        }
    ]
</script>
  
<style scoped>
</style>