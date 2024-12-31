import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/home';
import About from '../pages/about';
import Factory from '../pages/factory';
import Job from '../pages/job';
import New from '../pages/new';
import Product from '../pages/product';
import Article from '../pages/new/children/article.tsx';
import NotFound from '../pages/notFound/404.tsx';

const routesConfig = [
    { path: 'home', element: <Home />, meta: { title: '首页' } },
    { path: 'about', element: <About />, meta: { title: '关于我们' } },
    { path: 'factory', element: <Factory />, meta: { title: '工厂' } },
    { path: 'job', element: <Job />, meta: { title: '职位' } },
    {
        path: 'new',
        element: <New />,
        meta: { title: '新闻' },
        children: [
            {
                path: 'article',
                element: <Article />,
                meta: { title: '正文' },
            },
        ],
    },
    { path: 'product', element: <Product />, meta: { title: '产品' } },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Navigate to="/home" replace />, // 默认重定向到 /home
            },
            ...routesConfig.map(route => ({
                path: route.path,
                element: route.element,
                meta: route.meta,
                children: route.children ? route.children.map(child => ({
                    path: child.path,
                    element: child.element,
                    meta: child.meta, // 添加子路由的元信息
                })) : [],
            })),
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
