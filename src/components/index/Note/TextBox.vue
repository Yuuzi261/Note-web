<template>
    <div :style="{'text-align':decideTitleDisplay}">
        <h2>{{textTitle}}</h2>
        <p>{{text}}</p>
    </div>
</template>

<script>
import global_ from '../../Global';

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
            if(document.documentElement.clientWidth > global_.MIDDLE_SCREEN) return 'left';
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
  