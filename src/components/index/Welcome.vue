<template>
    <div class="welcome">
        <BG />
        <div class="blank"></div>
        <img src="/index/welcome.png" alt="Nachoneko is sitting on the floor." />
        <Headline />
    </div>
</template>

<script setup>
    import BG from './BG.vue';
    import Headline from './Headline.vue';
</script>

<style scoped>
img {
    width: 100%;
    max-width: max-content;
}

.welcome {
    height: 100vh;
}

.blank {
  height: 8.5rem;
}
</style>
