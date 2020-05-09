<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>Server #{{ id }}</p>
        <p>status: {{ status }}</p>
        <button @click="resetStatus">Reset Status</button>
    </div>

</template>

<script>
export default {
    props: {
        id: Number,
        status: String,
        resetServerStatus: Function
    },
    methods: {
        resetStatus() {
            this.resetServerStatus(this.id);
        }
    }
}
</script>

<style>

</style>
