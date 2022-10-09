<template>
    <div id = 'title-block'>
        <h2 id = 'title' :key = 'titleText'>{{ titleText }}</h2>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue'

    const titleText = ref('WELCOME');
    setTimeout(() => {
        titleText.value = 'Yuuzi\'s Notes';
    }, 2000)
</script>

<style scoped>
h2 {
    color: #213547;
}

#title {
    animation: openIn 1s ease-in-out;
}

#title-block {
    height: 300px;
    /* padding-top: 150px; */
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
