import Layout from '@/layout/Index'

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: "",
                redirect: "/home",
                meta: {auth: true}
            },
            {
                path: 'home',
                component: () => import('@/views/Home'),
                meta: {auth: true}
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login'),
        meta: {auth: false}
    }
]

export default routes