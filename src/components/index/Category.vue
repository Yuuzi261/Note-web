<template>
    <div class="category-block">
        <TextBox v-bind="$attrs" />
        <Glass v-bind="$attrs" @click="toPage(link)"/>
    </div>
    <div class="blank"></div>
</template>
  
<script>
    import TextBox from './Note/TextBox.vue';
    import Glass from './Note/Glass.vue';
    
    export default {
        props:{
            link:{
                type: String,
                default: ''
            }
        },
        methods:{
            toPage(link){
                const path = '/' + link
                this.$router.push({path: path});
            }
        },
        components:{
            TextBox, Glass
        }
    };
</script>
  
<style scoped>
.category-block {
    padding: 0 15% 0 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.blank {
  height: 15rem;
}

@media only screen and (max-width: 1250px) {
    .category-block {
        padding: 0;
        flex-direction: column;
    }
    .blank {
        height: 10vh;
    }
}
</style>