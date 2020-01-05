import loader from '@/utils/loader'   // 路由懒加载

export const Home = loader(() => import('@/pages/home')) // app 页面


