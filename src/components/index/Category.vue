<template>
    <div class="category-block" :style="{'flex-direction': decideArrangement}">
        <TextBox v-bind="$attrs" />
        <Glass v-bind="$attrs" @click="toPage(link)"/>
    </div>
    <br v-for="_ in 10" :key="_" />
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
        computed:{
            decideArrangement: () => {
                if(document.documentElement.clientWidth > 1250) return 'row';
                else return 'column';
            }
        },
        components:{
            TextBox,
            Glass
        }
    };
</script>
  
<style scoped>
.category-block {
    padding: 0 15% 0 15%;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
}
</style>