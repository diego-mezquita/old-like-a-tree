<template>
    <ul>
        <li v-for="data in $options.monumentaalGroenData.features" v-bind:key="data.id" class="data-item">{{data}}</li>
    </ul>
</template>

<script>
    import MONUMEMNTAAL_GROEN_JSON from '../assets/data/monumentaal-groen.json'

    export default {
        name: "ShowAllMonumentaalGroenData",
        monumentaalGroenData: MONUMEMNTAAL_GROEN_JSON
    }
</script>

<style scoped>
.data-item {
    padding: 2rem 0;
}
</style>