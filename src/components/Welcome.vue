<template>
    <div>
        <h1>Old Like A Tree</h1>
        <button v-on:click="navigate()">Show Map</button>
    </div>
</template>


<script>
    import router from '../router';

    export default {
        name: 'welcome',
        props: ['name'],
        methods: {
            navigate(){
                router.push({ name: 'GoogleMap' });
            }
        }

    }
</script>

<style scoped>

</style>
