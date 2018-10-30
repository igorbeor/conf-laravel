import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});

export default router;