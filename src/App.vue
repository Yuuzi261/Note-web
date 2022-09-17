<template>
    <BG />
    <Headline />
    <Category v-for="_ in Content" :title="_.title" :noteList="_.noteList" :imgsrc="_.imgsrc" :textTitle="_.textTitle" :text="_.text" :link="_.link" :key="_" />
</template>

<script>
    import BG from './components/index/BG.vue';
    import Headline from './components/index/Headline.vue';
    import Category from './components/index/Category.vue';
    import NoteBlockData from '../static/NoteBlockData.json';

    export default {
        setup(){
            const Content = NoteBlockData.data
            console.log(Content)

            return {
                Content
            }
        },
        data(){
            return{
                NoteBlockData
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
