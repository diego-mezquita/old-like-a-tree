import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '../components/Welcome';
import GoogleMap from '../components/GoogleMap';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Welcome"
            }
        },
        {
            path: '/welcome',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/map',
            name: 'GoogleMap',
            component: GoogleMap,
            props: {
                name: 'example'
            }
        }
    ]
})
