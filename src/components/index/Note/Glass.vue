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
.glass-block {
    width: auto;
}

.glass-block:hover {
    cursor: pointer;
    animation: hoverGlass 0.05s ease-in-out;
    animation-fill-mode: forwards;
}
.glass-container {
    width: 700px;
    height: 375px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(0,191,255, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}

.notes {
    display: flex;
    flex-direction: column;
    justify-content: left;
}

.notes li{
    text-align: left;
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
  