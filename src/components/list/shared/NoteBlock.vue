<template>
    <div class="NB-block">
        <div @click="toNote(link)" class="NB">
            <List v-bind="$attrs" />
            <div class="blank"></div>
            <Logo v-bind="$attrs" />
        </div>
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
        window.open(link)
    }
</script>
  
<style scoped>
.NB-block {
    display: flex;
    align-items: center;
    justify-content: center;
}

.NB {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1000px;
    padding: 20px;
    border-style: solid;
    border-radius: 10px;
}

.NB:hover {
    border-style: solid;
    cursor: pointer;
    animation: hoverNB 0.05s ease-in;
    animation-fill-mode: forwards;
}

@media (prefers-color-scheme: light) {
    .NB {
        border-color: #afb8c1;
    }
    .NB:hover {
        border-color: #526e87;
    }
}

@media (prefers-color-scheme: dark) {
    .NB {
        border-color: #d0d7de;
    }
    .NB:hover {
        border-color: #b7e0f3;
    }
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