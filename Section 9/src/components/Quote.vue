<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span class="subtitle"><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
div {
    margin: 30px auto;
    padding: 30px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    text-align: center;
}

h2 {
    color: red;
}

.title {
    font-style: italic;
}

.subtitle {
    color: gray;
}
</style>