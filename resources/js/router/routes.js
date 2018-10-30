import RegistrationForm from '../pages/RegistrationForms';
import Participants from '../pages/Participants';
import Login from '../pages/Login';

const routes = [
    {
        path: '/',
        name: 'forms',
        component: RegistrationForm,
    },
    {
        path: '/participants',
        name: 'participants',
        component: Participants,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
];

export default routes;