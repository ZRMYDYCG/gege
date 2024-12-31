import React from 'react';

// 定义 props 类型
interface PaginatorProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages: JSX.Element[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => onPageChange(i)}
                className={`px-4 py-2 border rounded ${currentPage === i ? 'bg-red-600 text-white' : 'bg-white text-black'}`}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="flex justify-center mt-4 py-2">
            <button onClick={() => onPageChange(1)} className="px-4 py-2 border rounded">首页</button>
            <button onClick={() => onPageChange(Math.max(currentPage - 1, 1))} className="px-4 py-2 border rounded">上一页</button>
            {pages}
            <button onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} className="px-4 py-2 border rounded">下一页</button>
            <button onClick={() => onPageChange(totalPages)} className="px-4 py-2 border rounded">尾页</button>
        </div>
    );
};

export default Paginator;
