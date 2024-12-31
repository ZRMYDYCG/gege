import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { routesConfig } from '../router';

const Breadcrumbs: React.FC = () => {
    const location = useLocation();

    const getBreadcrumbs = () => {
        const paths = location.pathname.split('/').filter(Boolean); // 获取当前路径的所有部分
        const breadcrumbs = [];

        // 添加“首页”
        breadcrumbs.push({
            title: '首页',
            path: '/home',
        });

        // 循环获取当前路径的子路由
        let currentPath = '';
        paths.forEach((path) => {
            currentPath += `/${path}`;
            const route = routesConfig.find(route => route.path === path);

            // 如果找到了相应的路由，就将其标题添加到面包屑中
            if (route) {
                breadcrumbs.push({
                    title: route.meta.title,
                    path: currentPath,
                });
            }
        });

        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none' }}>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <Link to={breadcrumb.path}>
                            {breadcrumb.title}
                        </Link>
                        {index < breadcrumbs.length - 1 && <span className="px-2">//</span>}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
