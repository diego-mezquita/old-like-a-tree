<template>
    <ul class="ui sidebar inverted vertical menu list">
        <li v-for="data in $options.monumentaalGroenData.features" v-bind:key="data.id" class="item">
            <!--<a href="" class="item"></a>-->
            <img class="ui avatar image" src="../assets/images/monument.svg">
            <div class="content">
                <p class="header">{{data.properties.Naam}}</p>
                <p class="meta">{{data.properties.Status}}</p>
            </div>
        </li>
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
</style>


<!--<div class="ui items">-->
    <!--<div class="item">-->
        <!--<div class="image">-->
            <!--<img src="/images/wireframe/image.png">-->
        <!--</div>-->
        <!--<div class="content">-->
            <!--<a class="header">Header</a>-->
            <!--<div class="meta">-->
                <!--<span>Description</span>-->
            <!--</div>-->
            <!--<div class="description">-->
                <!--<p></p>-->
            <!--</div>-->
            <!--<div class="extra">-->
                <!--Additional Details-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <!--<div class="item">-->
        <!--<div class="image">-->
            <!--<img src="/images/wireframe/image.png">-->
        <!--</div>-->
        <!--<div class="content">-->
            <!--<a class="header">Header</a>-->
            <!--<div class="meta">-->
                <!--<span>Description</span>-->
            <!--</div>-->
            <!--<div class="description">-->
                <!--<p></p>-->
            <!--</div>-->
            <!--<div class="extra">-->
                <!--Additional Details-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</div>-->