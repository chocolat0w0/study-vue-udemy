<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">Some Infomation</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">Some Infomation</div>
                </transition>
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">Some Infomation</div>
                </transition>
                <transition
                    appear
                    enter-active-class="animate__animated animate__bounce"
                    leave-active-class="animate__animated animate__shakeX">
                    <div class="alert alert-info" v-if="show">Some Infomation</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">!!Some Infomation</div>
                    <div class="alert alert-warning" v-else key="warning">!!Some Infomation</div>
                </transition>

                <hr>

                <button class="btn btn-primary" @click="load = !load">Load / Remove</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"

                    :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load">Load</div>
                </transition>

                <hr>

                <button class="btn btn-primary"
                    @click="selectedComponent = selectedComponent === 'app-success-alert' ? 'app-danger-alert' : 'app-success-alert'">
                    Switch Component
                </button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>

                <hr>

                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group" name="slide">
                    <transition-group name="slide">
                        <li class="list-group-item"
                            v-for="(number, index) in numbers"
                            @click="removeItem(index)"
                            style="cursor: pointer;"
                            :key="number">{{ number }}</li>
                    </transition-group>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    import SuccessAlert from './SuccessAlert.vue';
    import DangerAlert from './DangerAlert.vue';
    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: "fade",
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                console.log("beforeEnter");
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log("enter");
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                } ,20);
            },
            afterEnter(el) {
                console.log("afterEnter");
            },
            enterCancelled(el) {
                console.log("enterCancelled");
            },
            beforeLeave(el) {
                console.log("beforeLeave");
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log("leave");
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                } ,20);
            },
            afterLeave(el) {
                console.log("afterLeave");
            },
            leaveCancelled(el) {
                console.log("leaveCancelled");
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
        components: {
            'app-success-alert': SuccessAlert,
            'app-danger-alert': DangerAlert
        }
    }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }

    .slide-leave {
    }

    .slide-move {
        transition: transform 1s;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

</style>
