<template>
    <ul class="list">
        <li v-for="data in $options.monumentaalGroenData.features" v-bind:key="data.id" class="list-item">
            <div class="list-item-info-wrapper">
                <i class="material-icons list-item-image">account_balance</i>
                <div class="list-item-info">
                    <p class="list-item-primary">{{data.properties.Naam}}</p>
                    <p class="list-item-secondary">{{data.properties.Status}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import MONUMEMNTAAL_GROEN_JSON from '../assets/data/monumentaal-groen.json'

    console.log(MONUMEMNTAAL_GROEN_JSON);

    export default {
        name: "ShowAllMonumentaalGroenData",
        monumentaalGroenData: MONUMEMNTAAL_GROEN_JSON
    }
</script>

<style scoped>
    .list {
        max-width: 33vw;
        min-width: 25vw;
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: inherit;
        padding: 0 0.5rem 0 0;
    }

    .list-item {
        list-style: none;
        display: flex;
        align-items: start;
        flex-shrink: 0;
    }

    .list-item-image {
        /*width: 100%;*/
        height: 100%;
        padding-right: 1rem;
    }

    .list-item-info-wrapper {
        border: 1px solid grey;
        border-radius: 3px;
        margin: 0.5rem;
        padding: 0.5rem;
        flex-grow: 1;
        display: flex;
    }

    .list-item-info {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: flex-start;
    }

    .list-item-primary {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        word-break: break-all;
    }

    .list-item-secondary {
        font-size: 0.8rem;
        margin-bottom: 0;
        word-break: break-all;
    }
</style>
