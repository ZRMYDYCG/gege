import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { routesConfig } from '../router';
import breadcrumbsPic from '../assets/breadcrubs.jpg';

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
        <nav
            className="relative w-[100vw] rounded-md h-[240px] flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${breadcrumbsPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-10 text-[35px] text-gray-500 font-[楷体] mb-3">{ breadcrumbs[breadcrumbs.length - 1].title }</div>
            <ul className="flex list-none relative z-10"> {/* 将内容提升到最上层 */}
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <Link to={breadcrumb.path} className="hover:text-orange-500 text-sm">
                            {breadcrumb.title}
                        </Link>
                        {index < breadcrumbs.length - 1 && <span className="px-1 text-sm text-gray-400">//</span>}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
