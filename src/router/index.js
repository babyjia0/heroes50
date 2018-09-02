import VueRouter from 'vue-router';

//导入路由组件
import HeroList from '../views/heroes/list.vue';
import EquipsList from '../views/heroes/list.vue';
import WeaponsList from '../views/heroes/list.vue';

//注册VueRouter插件
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter({
    linkExactActiveClass: 'active',
    //路由规则
    routes: [{
            path: '/',
            redirect: '/heroes',

        }, {
            path: '/heroes',
            component: HeroList
        },
        {
            path: '/equips',
            component: EquipsList
        },
        {
            path: '/weapons',
            component: WeaponsList
        }
    ]
});






export default router;