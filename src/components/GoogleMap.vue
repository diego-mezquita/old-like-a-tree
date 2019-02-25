<template>
    <div>
        <button v-on:click="this.toggleMapVisibility">Show Map</button>
        <button v-on:click="this.showMarkers">Show Trees</button>
        <div v-show="this.mapVisible" class="google-map" v-bind:id="mapName"></div>
    </div>
</template>

<script>
    import WANDKUST_JSON from '../assets/data/wandkust.json';

    export default {
        name: 'google-map',
        props: ['name'],
        data() {
            return {
                mapName: this.name + "-map",
                mapVisible: false
            }
        },
        created() {
            let script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=XXX';
            document.body.appendChild(script);

            this.data = WANDKUST_JSON.features;
        },
        methods: {
            toggleMapVisibility() {
                this.mapVisible = !this.mapVisible;

                if (!this.map) {
                    this.initMap();
                }
            },
            initMap() {
                const element = document.getElementById(this.mapName);
                const options = {
                    zoom: 12,
                    center: new google.maps.LatLng(52.370216, 4.895168)
                };
                this.map = new google.maps.Map(element, options);

                this.mapVisible = true;
            },
            showMarkers() {
                this.data.forEach(location => {
                    const lat = location.geometry.coordinates[1];
                    const lng = location.geometry.coordinates[0];

                    const mapSettings = {
                        position: new google.maps.LatLng(lat, lng),
                        map: this.map
                    }

                    const marker = new google.maps.Marker(mapSettings);
                });
            }


        }
    };
</script>

<style scoped>
    .google-map {
        width: 100vw;
        max-width: 1000px;
        height: 80vh;
        margin: 0 auto;
        background: gray;
    }
</style>