<template>
    <div class="toggle">
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
    </div>
</template>

<script>
</script>

  
<style scoped>
.toggle {
    display: flex;
    position: fixed;
    width: 55px;
    height: 35px;
    top: 4vh;
    right: 4vh;
    flex-direction: column;
    justify-content: space-around;
}
.toggle-line {
    display: block;
    background: var(--color-shizuku-gray-blue);
    border-radius: 3px;
    height: 7px;
    width: 55px;
}

@media only screen and (max-width: 1250px) {
    .toggle {
        position: absolute;
    }
}
</style>