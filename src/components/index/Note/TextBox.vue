<template>
    <div>
        <h2>{{textTitle}}</h2>
        <p>{{text}}</p>
    </div>
</template>

<script setup>
defineProps({
    textTitle: {
        type: String,
        default: 'TITLE'
    },
    text: {
        type: String,
        default: 'text'
    }
})
</script>

  
<style scoped>
h2 {
    font-size: 2.7em;
    line-height: 1.1;
}
    
div {
    width: 100%;
    text-align: left;
    align-self: flex-start;
}

@media only screen and (max-width: 1250px) {
    div {
        text-align: center;
    }
}
</style>
  