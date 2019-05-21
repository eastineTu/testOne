import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const About = r => require.ensure([], () => r(require('./views/About.vue')), 'About')
const Login = r => require.ensure([], () => r(require('./views/Login.vue')), 'Login')
const Question = r => require.ensure([], () => r(require('./views/Question.vue')), 'Question')
const Rule = r => require.ensure([], () => r(require('./views/Rule.vue')), 'Rule')
const Finish = r => require.ensure([], () => r(require('./views/Finish.vue')), 'Finish')

Vue.use(Router)

const route = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        },
        {
            path: '/login',
            name: 'login',
            meta: { title: '登陆' },
            component: Login
        },
        {
            path: '/question',
            name: 'question',
            meta: { title: '问答' },
            component: Question
        },
        {
            path: '/rule',
            name: 'rule',
            meta: { title: '规则' },
            component: Rule
        },
        {
            path: '/finish',
            name: 'finish',
            meta: { title: '完成' },
            component: Finish
        }
    ]
})

route.beforeEach((to, from, next) => {
    sessionStorage.setItem('pathName', to.path)
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default route
