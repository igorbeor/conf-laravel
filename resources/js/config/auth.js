import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'conference-laravel-vue',
    tokenStore: ['localStorage'],
    rolesVar: 'role',
    loginData: {url: 'auth/login', method: 'POST', redirect: '/', fetchUser: false},
    logoutData: {url: 'auth/logout', method: 'POST', redirect: '/', makeRequest: true},
    refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30}
}
export default config