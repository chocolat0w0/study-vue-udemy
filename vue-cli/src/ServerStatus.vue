<template>
    <div>
        <h1>Server Status: {{ status }}</h1>
        <hr>
        <button @click="changeStatus">change</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            status: 'Critical'
        };
    },
    methods: {
        changeStatus() {
            this.status = 'Normal'
        }
    }
}
</script>