<template>
    <div class="category-block">
        <TextBox v-bind="$attrs" />
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
    padding: 0 15% 0 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>