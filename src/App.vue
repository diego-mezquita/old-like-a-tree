<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/images/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <ShowAllWandkustData></ShowAllWandkustData>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import ShowAllWandkustData from './components/ShowAllWandkustData.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            ShowAllWandkustData
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
