import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Header = () => {
    const location = useLocation(); // 获取当前路径状态
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制菜单显示

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev); // 切换菜单的显示状态
    };

    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center h-[100px] px-4">
                {/* Logo 部分 */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-full" />
                </div>
                {/* 移动端菜单按钮 */}
                <div className="block lg:hidden" onClick={toggleMenu}>
                    <button className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {/* 导航菜单 */}
                <nav className={`hidden lg:flex space-x-6`}>
                    <Link to="/" className={`font-bold ${location.pathname === '/' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                        首页
                    </Link>
                    <Link to="/about" className={` ${location.pathname === '/about' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                        关于我们
                    </Link>
                    <Link to="/product" className={` ${location.pathname === '/product' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                        产品中心
                    </Link>
                    <Link to="/new" className={` ${location.pathname === '/new' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                        新闻
                    </Link>
                    <Link to="/job" className={` ${location.pathname === '/job' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                        招聘
                    </Link>
                    <Link to="/factory" className={` ${location.pathname === '/factory' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                        在线参观区
                    </Link>
                </nav>
            </div>
            {/* 移动端下拉菜单 */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link to="/" className={`font-bold ${location.pathname === '/' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                            首页
                        </Link>
                        <Link to="/about" className={` ${location.pathname === '/about' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                            关于我们
                        </Link>
                        <Link to="/product" className={` ${location.pathname === '/product' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                            产品中心
                        </Link>
                        <Link to="/new" className={` ${location.pathname === '/new' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                            新闻
                        </Link>
                        <Link to="/job" className={` ${location.pathname === '/job' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                            招聘
                        </Link>
                        <Link to="/factory" className={` ${location.pathname === '/factory' ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
                            在线参观区
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
