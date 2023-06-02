<template>
    <Toggle />
    <Welcome />
    <section id="ready">
        <div class="blank"></div>
        <Category v-for="_ in Content" :title="_.title" :noteList="_.noteList" :imgsrc="_.imgsrc" :imgalt="_.imgalt" :textTitle="_.textTitle" :text="_.text" :link="_.link" :key="_" />
    </section>
</template>

<script setup>
    import Welcome from './components/index/Welcome.vue';
    import BG from './components/index/BG.vue';
    import Headline from './components/index/Headline.vue';
    import Category from './components/index/Category.vue';
    import Toggle from './components/Toggle.vue';
    import CategoryData from '../static/CategoryData.json';
    import NoteData from '../static/NoteData.json';

    const Content = CategoryData.data;
    const Notes = NoteData;

    for(let key in Content) {
        Content[key]["noteList"] = []
        for(let i = 0;i < NoteData[key].length;i++) {
            Content[key]["noteList"].push(Notes[key][i]["title"]);
        }
    }
</script>

<style scoped>
.blank {
    height: 10rem;
}

@media only screen and (max-width: 1250px) {
    .blank {
        height: 10vh;
    }
}
</style>
