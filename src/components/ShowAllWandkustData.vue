<template>
    <ul>
        <li v-for="data in $options.wandkustData.features" class="data-item">{{data}}</li>
    </ul>
</template>

<script>
    import WANDKUST_JSON from '../assets/data/wandkust.json'

    export default {
        name: "ShowAllWandkustData",
        wandkustData: WANDKUST_JSON
    }
</script>

<style scoped>
.data-item {
    padding: 2rem 0;
}
</style>