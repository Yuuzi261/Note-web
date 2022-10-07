<template>
    <div class="glass-block">
        <div class="glass-container" :style="{'width':setClientWidth}">
            <div>
                <h2>{{title}}</h2>
                <div class="notes"><li v-for="note in noteList" :key="note">{{note}}</li></div>
            </div>    
            <img :src="imgsrc" :style="{'width':setImgSize}"/>
        </div>
    </div> 
</template>

<script>
import global_ from '../../Global';

export default {
    props:{
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
    },
    computed:{
        setClientWidth: () => {
            let clientWidth = document.documentElement.clientWidth;
            window.onresize = () => {
                clientWidth = document.documentElement.clientWidth;
                return clientWidth;
            }
            if(clientWidth > global_.WIDE_SCREEN) return '675px';
            else if(clientWidth > global_.MIDDLE_SCREEN) return clientWidth * 0.48 + 'px';
            else return clientWidth * 0.8 + 'px';
        },
        setImgSize: () => {
            if(document.documentElement.clientWidth <= global_.MIDDLE_SCREEN) return '35%';
            else if(document.documentElement.clientWidth <= global_.SMALL_SCREEN) return '45%';
        }
    }
}
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
    /* width: 700px; */
    height: 375px;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-style: solid;
    border-radius: 10px;
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
  