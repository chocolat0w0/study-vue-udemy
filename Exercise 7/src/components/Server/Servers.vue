<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers"
                    @click="showDetail(server.id)">
                Server #{{ server.id }}: {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        servers: Array,
        showServerDetail: Function
    },
    methods: {
        showDetail(id) {
            this.showServerDetail(id);
        }
    }
}
</script>

<style>

</style>
