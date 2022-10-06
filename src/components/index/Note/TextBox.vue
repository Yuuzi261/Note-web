<template>
    <div :style="{'text-align':decideTitleDisplay}">
        <h2>{{textTitle}}</h2>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    props:{
        textTitle: {
            type: String,
            default: 'TITLE'
        },
        text: {
            type: String,
            default: 'text'
        }
    },
    computed:{
        decideTitleDisplay: () => {
            if(document.documentElement.clientWidth > 1250) return 'left';
            else return 'center';
        }
    }
}
</script>

  
<style scoped>
h2 {
    font-size: 2.7em;
    line-height: 1.1;
}
    
div {
    width: 100%;
    text-align: left;
    align-self: flex-start;
}
</style>
  