<template>
    <BG />
    <Headline :titleText="selfName" />
    <NoteBlock v-for="_ in noteContent" :textTitle="_.title" :link="_.link" :icon="_.icon" :key="_" />
</template>
  
<script>
    import BG from '../../components/index/BG.vue';
    import Headline from './shared/NoteListHeadline.vue';
    import NoteBlock from './shared/NoteBlock.vue';
    import CategoryTitle from '../../../static/CategoryTitle.json';
    import NoteData from '../../../static/NoteData.json';
    
    export default {
        setup(){
            const selfName = CategoryTitle.courses;
            const noteContent = NoteData.courses;

            return{
                selfName, noteContent
            }
        },
        data(){
            return{
                CategoryTitle, NoteData
            }
        },
        components:{
            BG,
            Headline,
            NoteBlock
        }
    }
</script>
  
<style scoped>
</style>