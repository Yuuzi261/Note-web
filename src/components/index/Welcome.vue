<template>
    <div class="welcome">
        <BG />
        <div class="blank"></div>
        <img src="/index/welcome.png" alt="Nachoneko is sitting on the floor." />
        <Headline />
        <a href="#" v-scroll-to="'#ready'"><b>Get Started</b></a>
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

a {
    background-color: rgb(145, 146, 153, 0.5);
    border-color: var(--color-nacho-dark-gray);
    color: #fff;
    border-radius: 2rem;
    border-style: solid;
    border-width: 2px;
    box-sizing: border-box;
    display: inline-block;
    font-size: 1.05rem;
    letter-spacing: 0.1rem;
    margin: 0.5rem 1rem;
    padding: 0.75em 2rem;
    text-decoration: none;
    transition: all 0.15s ease
}

a:hover {
    background-color: var(--color-nacho-dark-gray);
    color: #fff;
}

.welcome {
    height: 100vh;
}

.blank {
  height: 8.5rem;
}
</style>
