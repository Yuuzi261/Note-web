<template>
    <div class="category-block">
        <TextBox />
        <Glass v-bind="$attrs" />
    </div>
    <br v-for="_ in 10" :key="_" />
</template>
  
<script setup>
    import TextBox from './Note/TextBox.vue';
    import Glass from './Note/Glass.vue'
</script>
  
<style scoped>
.category-block {
    padding: 0px 75px 0px 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>