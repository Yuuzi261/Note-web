<template>
    <div id = 'title-block'>
        <h1 id = 'title' :key = 'titleText'>{{ titleText }}</h1>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue'

    const titleText = ref('歡迎');
    setTimeout(() => {
        titleText.value = '金桔的筆記庫';
    }, 2000)
</script>

<style scoped>
#title {
    animation: openIn 1s ease-in-out;
}

#title-block {
    height: 300px;
    padding-top: 150px;
}

@keyframes openIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
