const routers = [
    {
        path: '/',
        name:'home',
        meta: {
            title: ''
        },
        component: (resolve) => require(['../views/index.vue'], resolve),
        children: [
            { path: '/', title: '商品列表', name: 'home_content', component: (resolve) => require(['../views/index_content.vue'], resolve) },
            { path: '/detail/:id', title: '商品详情', name: 'detail', component: (resolve) => require(['../views/detail.vue'], resolve) },
            { path: '/wineclass', title: '酒品分类', name: 'wineclass', component: (resolve) => require(['../views/wineclass.vue'], resolve) },
        ]
    },
    {
		path: '/paycallback',
		name: 'paycallback',
	    meta: {
	        title: '付款成功跳转'
	    },
	    component: (resolve) => require(['../views/paycallback.vue'], resolve)
    },
    {
		path: '/allorders',
		name: 'allorders',
	    meta: {
	        title: '全部订单'
	    },
	    component: (resolve) => require(['../views/allorders.vue'], resolve)
	},
    {
		path: '/goodsresale',
		name: 'goodsresale',
	    meta: {
	        title: '商品转售'
	    },
	    component: (resolve) => require(['../views/goodsresale.vue'], resolve)
	},
    {
		path: '/immediatepay',
		name: 'immediatepay',
	    meta: {
	        title: '立即付款'
	    },
	    component: (resolve) => require(['../views/immediatepay.vue'], resolve)
	},
    {
		path: '/submitorder',
		name: 'submitorder',
	    meta: {
	        title: '提交订单'
	    },
	    component: (resolve) => require(['../views/submitorder.vue'], resolve)
	},
    {
		path: '/shopcart',
		name: 'shopcart',
	    meta: {
	        title: '购物车'
	    },
	    component: (resolve) => require(['../views/shopcart.vue'], resolve)
	},
	
    {
		path: '/personaldata',
		name: 'personaldata',
	    meta: {
	        title: '个人资料'
	    },
	    component: (resolve) => require(['../views/personaldata.vue'], resolve)
    },
	{
		path: '/personal',
		name: 'personal',
	    meta: {
	        title: '个人主页'
	    },
	    component: (resolve) => require(['../views/personal.vue'], resolve)
    },
	

    {
        path: '/test',
        name:'test',
        meta: {
            title: '订单'
        },
        component: (resolve) => require(['../views/test.vue'], resolve)
    },
    {
        path: '/test5',
        name:'test5',
        meta: {
            title: '订单'
        },
        component: (resolve) => require(['../views/test5.vue'], resolve)
    },
    {
		path: '/login',
		name:"login",
        meta: {
            title: 'Login - 登录'
        },
        component: (resolve) => require(['../views/login.vue'], resolve)
	},
   
    {
        path: '/bind',
        name:'bind',
        meta: {
            title: '绑定手机号'
        },
        component: (resolve) => require(['../views/bind.vue'], resolve)
    },
    {
        path: '/find_user',
        name:'find_user',
        meta: {
            title: '绑定手机号'
        },
        component: (resolve) => require(['../views/find_user.vue'], resolve)
    },
    {
        path: '/test2',
        name:'test2',
        meta: {
            title: '绑定手机号'
        },
        component: (resolve) => require(['../views/test2.vue'], resolve)
    },
   
];
export default routers;