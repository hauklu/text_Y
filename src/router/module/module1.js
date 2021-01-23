export default [
  {
    path: '/',
    component: () => import('@/view/index'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/view/pages/home')
      }
    ]
  }
]
