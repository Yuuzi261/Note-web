<template>
    <Headline :titleText="selfName" />
    <NoteBlock v-for="_ in noteContent" :textTitle="_.title" :link="_.link" :icon="_.icon" :alt="_.alt" :key="_" />
</template>
  
<script setup>
    import BG from '../../components/index/BG.vue';
    import Headline from './shared/NoteListHeadline.vue';
    import NoteBlock from './shared/NoteBlock.vue';
    import CategoryData from '../../../static/CategoryData.json';
    import NoteData from '../../../static/NoteData.json';
    
    const selfName = CategoryData.data.spiceup.textTitle;
    const noteContent = NoteData.spiceup;
</script>
  
<style scoped>
</style>