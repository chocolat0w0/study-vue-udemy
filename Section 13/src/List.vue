<template>
    <div>
        <h1>Filters & Mixins</h1>

        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <p>{{ test2 }}</p>
        <p>{{ test }}</p>
    </div>
</template>

<script>
    import { fruitMixin } from './FruitMixin';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                test: 'test inside List',
                test2: 'test2 inside List'
            }
        }
    }
</script>

<style>

</style>
