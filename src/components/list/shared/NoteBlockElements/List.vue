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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-style: hidden;
    border-radius: 10px;
}

@media (prefers-color-scheme: light) {
    .glass-container {
        border-color: #afb8c1;
    }
}

@media (prefers-color-scheme: dark) {
    .glass-container {
        border-color: #d0d7de;
    }
}

.notes {
    display: flex;
    flex-direction: column;
    justify-content: left;   
}
</style>