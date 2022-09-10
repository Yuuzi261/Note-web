<template>
    <BG />
    <Title :titleText="selfName" />
    <List v-for="_ in noteContent" :title="_.title" :link="_.link" :icon="_.icon" :key="_" />
</template>
  
<script setup>
    import BG from '../../components/index/BG.vue';
    import Title from './shared/title.vue';
    import List from './shared/List.vue';

    const selfName = '安裝教學'

    const noteContent = [
        {
            title: '安裝 Python',
            link: 'https://hackmd.io/@Yuuzi/install-python',
            icon: 'https://i.imgur.com/XWiX0NV.png'
        },
        {
            title: '安裝 Visual Studio Code',
            link: 'https://hackmd.io/@Yuuzi/install-vscode',
            icon: 'https://i.imgur.com/2K1vonI.png'
        },
        {
            title: '安裝 Git',
            link: '',
            icon: 'https://i.imgur.com/cFjsL3h.png'
        }
    ]
</script>
  
<style scoped>
</style>