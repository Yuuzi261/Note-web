<template>
    <div>
        <h2>{{textTitle}}</h2>
        <!-- <p>{{text}}</p> -->
    </div>
</template>
  
<script setup>
    defineProps({
        textTitle: {
            type: String,
            default: 'TITLE'
        }
    })
</script>
  
<style scoped>
h2 {
    font-size: 2.7em;
    line-height: 1.1;
    text-align: center;
}
    
div {
    width: 100%;
    text-align: right;
    align-self: center;
}
</style>
  