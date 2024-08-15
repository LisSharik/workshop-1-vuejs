import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import Profile from '@/pages/Profile.vue';
import Team from '@/pages/Team.vue';
import Projects from '@/pages/Projects.vue';
import Connections from '@/pages/Connections.vue';

const routes = [
 
    {
        path: '/',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/team',
        name: 'Team',
        component: Team,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/connections',
        name: 'Connections',
        component: Connections,
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
