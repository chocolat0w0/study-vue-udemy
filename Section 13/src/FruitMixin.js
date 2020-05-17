export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: '',
            test: 'test'
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((v) => {
                return v.match(this.filterText);
            })
        }
    }
}