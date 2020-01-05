import loader from '@/utils/loader'   // 路由懒加载

export const Home = loader(() => import('@/pages/home')) // app 页面
export const Login = loader(() => import('@/pages/login')) // app 页面
export const Register = loader(() => import('@/pages/register')) // app 页面
export const Tables = loader(() => import('@/pages/tables')) // app 页面
export const Kong = loader(() => import('@/pages/kong')) // app 页面
export const Vip = loader(() => import('@/pages/vip')) // app 页面


