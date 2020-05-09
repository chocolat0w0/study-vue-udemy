<template>
    <div>
        <h2>New</h2>
        <button @click="counter++">Increase</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        };
    },
    activated() {
        console.log('Activated');
    },
    deactivated() {
        console.log('Deactivated');
    }
}

</script>

<style scoped>
</style>