<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-detail></app-server-detail>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetail from './components/Server/ServerDetail.vue';
import Footer from './components/Shared/Footer.vue';

export default {
    components: {
        'app-header': Header,
        'app-servers': Servers,
        'app-server-detail': ServerDetail,
        'app-footer': Footer
    }
}
</script>

<style>

</style>
