<template>
    <div class="row">
        <div class="col-xs-6">
            <label for="first_name">First Name</label>
            <input
                type="text"
                id="first_name"
                :value="firstName"
                @input="nameChanged(true, $event)"
                class="form-control">
        </div>
        <div class="col-xs-6">
            <label for="last_name">Last Name</label>
            <input
                type="text"
                id="last_name"
                :value="lastName"
                @input="nameChanged(false, $event)"
                class="form-control">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            nameChanged(isFirst, event) {
                if (isFirst) {
                    this.$emit('input', event.target.value + ' ' + this.lastName);
                } else {
                    this.$emit('input', this.firstName + ' ' + event.target.value);
                }
            }
        },
        computed: {
            firstName() {
                return this.value.split(' ')[0];
            },
            lastName() {
                return this.value.split(' ')[1];
            }
        }
    }

</script>

<style>

</style>