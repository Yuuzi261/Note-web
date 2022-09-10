<template>
    <div class="glass-block">
        <div class="glass-container">
            <!-- <div>
                <h2>{{title}}</h2>
            </div>     -->
            <img :src="icon" />
        </div>
    </div>
</template>
  
<script setup>
    defineProps({
        icon: {
            type: String,
            default: ''
        }
    })
</script>
  
<style scoped>
h2 {
    font-size: 2em;
    line-height: 1.1;
}

.glass-block {
    width: auto;
}
.glass-container {
    width: 300px;
    height: 300px;
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
</style>