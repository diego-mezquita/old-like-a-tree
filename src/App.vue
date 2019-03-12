<template>
    <div id="app">
        <GoogleMap name="example"></GoogleMap>
        <ShowAllMonumentaalGroenData></ShowAllMonumentaalGroenData>
    </div>
</template>

<script>
    import ShowAllMonumentaalGroenData from './components/ShowAllMonumentaalGroenData.vue'
    import GoogleMap from './components/GoogleMap.vue'

    export default {
        name: 'app',
        components: {
            ShowAllMonumentaalGroenData,
            GoogleMap
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
