import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout'
import Home from '../pages/home'
import NotFound from '../pages/notFound/404.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    }
]);

export default router;
