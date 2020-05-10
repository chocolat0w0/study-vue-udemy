<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Signup Form</h1>
                    <div class="form-group">
                        <h2>Name</h2>
                        <app-name v-model="fullName"></app-name>
                    </div>
                    <div class="form-group">
                        <label for="email">EMail</label>
                        <input
                            type="text"
                            id="email"
                            v-model="email"
                            class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            v-model="password"
                            class="form-control">
                    </div>
                    <div class="form-group">
                        <h2>Store Data</h2>
                        <label for="store_yes">
                            <input
                                type="radio"
                                id="store_yes"
                                v-model="storeData"
                                value="yes"> Yes
                        </label>
                        <label for="store_no">
                            <input
                                type="radio"
                                id="store_no"
                                v-model="storeData"
                                value="no"> No
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Name from './Name.vue';

    export default {
        data() {
            return {
                fullName: 'FirstName LastName',
                email: '',
                password: '',
                storeData: 'yes',
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        components: {
            appName: Name
        }
    }
</script>

<style>
</style>
