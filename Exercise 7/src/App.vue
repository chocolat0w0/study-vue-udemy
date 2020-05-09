<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers
                :servers="servers"
                :showServerDetail="showServerDetail"></servers>
            <app-server-details
                :id="currentServerId"
                :status="currentServerStatus"
                :resetServerStatus="resetServerStatus"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Critical'}
                ],
                currentServerId: 1
            };
        },
        computed: {
            currentServerStatus: function() {
                return this.servers.find(v => v.id === this.currentServerId).status;
            }
        },
        methods: {
            showServerDetail(id) {
                this.currentServerId = id;
            },
            resetServerStatus(id) {
                this.servers.forEach(v => {
                    if (v.id === id) {
                        v.status = 'Normal'
                    }
                })
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
