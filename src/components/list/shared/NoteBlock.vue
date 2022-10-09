<template>
    <div class="NB-block">
        <div @click="toNote(link)" class="NB" >
            <List v-bind="$attrs" />
            <div class="flex-blank"></div>
            <Logo v-bind="$attrs" />
        </div>
    </div>
    <div class="blank" ></div>
</template>

<script>
    import List from './NoteBlockElements/List.vue';
    import Logo from './NoteBlockElements/NoteTextBox.vue';

    export default{
        props:{
            link: {
                type: String,
                default: ''
            }
        },
        methods: {
            toNote: (link) => {
                window.open(link)
            }
        },
        components:{
            List, Logo
        }
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 1000px;
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

.flex-blank {
    width: 20%;
}

.blank {
    height: 4.5rem;
}

@media only screen and (max-width: 1250px) {
    .NB {
        flex-direction: column;
    }
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

@keyframes hoverNB {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
}
</style>