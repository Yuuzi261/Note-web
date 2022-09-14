<template>
    <div class="category-block">
        <TextBox v-bind="$attrs" />
        <Glass v-bind="$attrs" @click="toPage(link)"/>
    </div>
    <br v-for="_ in 10" :key="_" />
</template>
  
<script>
    import TextBox from './Note/TextBox.vue';
    import Glass from './Note/Glass.vue';

    // defineProps({
    //     link: {
    //         type: String,
    //         default: ''
    //     }
    // });

    export default {
        data(){
            return {
                link: {
                    type: String,
                    default: ''
                },
            }
        },
        methods:{
            toPage(){
                this.$router.push({path: "/courses"});
                console.log("log");
            }
        },
        components:{
            TextBox,
            Glass
        }
    };

    // const toPage = (link) => {
    //     // self.location = './pages/' + link + '/' + link + '.html'
    //     // this.$router.push("/courses");
    //     router.push("/courses");
    //     console.log("log")
    // }
</script>
  
<style scoped>
.category-block {
    padding: 0 15% 0 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>