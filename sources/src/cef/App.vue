<template>
    <div class="main">
        <h1>RAGE:MP CEF</h1>
        <button @click="closeCef">Закрыть CEF</button>
    </div>
</template>

<script setup lang='ts'>
const closeCef = () => {
    mp.trigger('cef:destroy');
};
</script>

<style scoped>
.main {
    position: absolute;
    top: 0;left: 0;
    width: 100%;height: 100vh;
    display: flex;justify-content: center;
    align-items: center;flex-direction: column;
    font-family: Arial, sans-serif;
}
h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 10px;
}
button {
  padding: 8px;
  cursor: pointer;
}
</style>