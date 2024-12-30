import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/home';
import About from '../pages/about';
import Factory from '../pages/factory';
import Job from '../pages/job';
import New from '../pages/new';
import Product from '../pages/product';
import NotFound from '../pages/notFound/404.tsx';

const routesConfig = [
    { path: 'home', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'factory', element: <Factory /> },
    { path: 'job', element: <Job /> },
    { path: 'new', element: <New /> },
    { path: 'product', element: <Product /> },
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
            })),
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
