<template>
    <div id = 'title-block'>
        <h1 id = 'title'>{{ titleText }}</h1>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    defineProps({
        titleText: {
            type: String,
            default: 'TITLE TEXT'
        }
    })
</script>

<style scoped>
h1 {
    text-align: center;
}

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
