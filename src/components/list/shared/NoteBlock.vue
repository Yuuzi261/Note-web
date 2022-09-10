<template>
    <div @click="toNote(link)" class="NB">
        <List v-bind="$attrs" />
        <div class="blank"></div>
        <Logo v-bind="$attrs" />
    </div>
    <br v-for="_ in 3" :key="_" />
</template>
  
<script setup>
    import List from './NoteBlockElements/List.vue';
    import Logo from './NoteBlockElements/NoteTextBox.vue';

    defineProps({
        link: {
            type: String,
            default: ''
        }
    })

    const toNote = (link) => {
        self.location=link
    }
</script>
  
<style scoped>
.NB {
    display: flex;
    flex-direction: row;
    width: 1000px;
    padding: 20px;
    border-style: hidden;
    border-color: black;
}

.NB:hover {
    border-style: solid;
    cursor: pointer;
    animation: hoverNB 0.05s ease-in;
    animation-fill-mode: forwards;
}

.blank {
    width: 20%;
}

@keyframes hoverNB {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
}
</style>