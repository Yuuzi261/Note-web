<template>
    <div class="glass-block">
        <div class="glass-container">
            <div>
                <h2>{{title}}</h2>
                <div class="notes"><li v-for="note in noteList" :key="note">{{note}}</li></div>
            </div>    
            <img :src="imgsrc" />
        </div>
    </div> 
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'TITLE'
    },
    noteList: {
        type: Array,
        default: ['note1', 'note2', 'note3']
    },
    imgsrc: {
        type: String,
        default: ''
    }
})
</script>
  
<style scoped>
img {
    max-width: max-content;
}

.glass-block {
    width: auto;
}

.glass-block:hover {
    cursor: pointer;
    animation: hoverGlass 0.05s ease-in-out;
    animation-fill-mode: forwards;
}
.glass-container {
    width: 675px;
    height: 375px;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-style: solid;
    border-radius: 10px;
}

.notes {
    display: flex;
    flex-direction: column;
    justify-content: left;
}

.notes li{
    text-align: left;
}

@media only screen and (max-width: 1400px) {
    .glass-container {
        width: 48vw;
    }
}

@media only screen and (max-width: 1250px) {
    .glass-block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .glass-container {
        width: 80vw;
    }
    img {
        width: 45%;
    }
}

@media (prefers-color-scheme: light) {
    .glass-container {
        border-color: #afb8c1;
    }
    .glass-container:hover {
        color: #526e87;
        border-color: #526e87;
    }
}

@media (prefers-color-scheme: dark) {
    .glass-container {
        border-color: #d0d7de;
    }
    .glass-container:hover {
        color: #b7e0f3;
        border-color: #b7e0f3;
    }
}

@keyframes hoverGlass {
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(10px);
    }
}
</style>
  