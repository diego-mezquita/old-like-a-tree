<template>
    <div class="google-map-wrapper">
        <div class="map-buttons">
            <!--<button v-on:click="this.showMap" v-show="!this.showTressButtonVisible">Show Map</button>-->
            <button v-on:click="this.showMarkers"
                    class="map-button">Show Trees
            </button>
        </div>
        <div v-show="this.mapVisible"
             v-bind:id="mapName"
             class="google-map"></div>
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
                mapVisible: false,
                showTressButtonVisible: false
            }
        },
        created() {
            this.data = WANDKUST_JSON.features;
        },
        mounted() {
          this.showMap();
        },
        methods: {
            showMap() {
                if (!this.map) {
                    // UX IMPROVEMENT
                    // add spinner?loader? anything that lets the user know the system is waiting
                    // for a response/computing/etc
                    this.initMap();
                }

                this.mapVisible = true;
                this.showTressButtonVisible = true;
            },
            initMap() {
                if (!google) {
                    setTimeout(this.initMap, 100);
                } else {
                    const element = document.getElementById(this.mapName);
                    const options = {
                        zoom: 12,
                        center: new google.maps.LatLng(52.370216, 4.895168)
                    };

                    this.map = new google.maps.Map(element, options);
                }
            },
            showMarkers() {
                this.data.forEach(location => {
                    const lat = location.geometry.coordinates[1];
                    const lng = location.geometry.coordinates[0];

                    const mapSettings = {
                        position: new google.maps.LatLng(lat, lng),
                        map: this.map
                    };

                    const marker = new google.maps.Marker(mapSettings);
                });
            }


        }
    };
</script>

<style scoped>
    .google-map-wrapper {
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }

    .google-map {
        width: 100vw;
        margin: 0 auto;
        background: gray;
    }

    .map-buttons {
        display: flex;
    }

    .map-button {
        position: absolute;
        z-index: 1;
        top: 10px;
        background: black;
        color: whitesmoke;
        height: 40px;
        padding: 0 1rem;
        border-radius: 2px;
        left: 50%;
        border: 1px solid grey;
    }
</style>
