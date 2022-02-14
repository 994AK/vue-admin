import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'

/* 私有路由表  */

const privateRouter = [
  /* 个人中心 */
  {
    path: '/profile',
    name: 'profile ',
    component: () => import('@/views/profile/index.vue'),
    meta: {
      title: 'profile',
      icon: 'el-icon-user'
    }
  },
  {
    path: '/user',
    component: layout,
    redirect: '/article/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'userRole',
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info/index.vue'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: 'excelImport',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('@/views/article-ranking/index.vue'),
        meta: {
          title: 'articleRanking',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('@/views/article-detail/index.vue'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: 'articleCreate',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/article/editor/:id ',
        name: 'articleEditor',
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]

/* 公开路由表 */
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/profile',
    component: layout,
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...privateRouter, ...publicRoutes]
})

export default router
