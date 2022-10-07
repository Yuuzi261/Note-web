<template>
    <div class="welcome" :style="{'height':getClientHeight}">
        <BG />
        <div class='blank'></div>
        <img src="/Note-web/index/welcome.png" />
    </div>
</template>

<script>
    import BG from './BG.vue';
    import global_ from '../Global';

    export default {
    computed: {
        getClientHeight: () => {
            let clientHeight = document.documentElement.clientHeight + "px";
            window.onresize = () => {
                clientHeight = document.documentElement.clientHeight + "px";
                return clientHeight;
            };
            return clientHeight;
        }
    },
    components: { BG }
}
</script>

<style scoped>
img {
    width: 100%;
    max-width: max-content;
}
</style>
