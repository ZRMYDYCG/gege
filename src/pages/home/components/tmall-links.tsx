import React from 'react';

const TmallLinks: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 py-10 bg-white">
            <a
                href="#"
                className="flex flex-col items-center mx-5 text-red-600 hover:text-orange-500"
            >
                <span className="text-2xl">天猫</span>
                <span className="text-sm">天猫旗舰店</span>
            </a>
            <a
                href="#"
                className="flex flex-col items-center mx-5 text-red-600 hover:text-orange-500"
            >
                <span className="text-2xl">京东</span>
                <span className="text-sm">京东旗舰店</span>
            </a>
            <a
                href="#"
                className="flex flex-col items-center mx-5 text-red-600 hover:text-orange-500"
            >
                <span className="text-2xl">天猫</span>
                <span className="text-sm">天猫专营店</span>
            </a>
            <a
                href="#"
                className="flex flex-col items-center mx-5 text-red-600 hover:text-orange-500"
            >
                <span className="text-2xl">饺子</span>
                <span className="text-sm">饺饺商城</span>
            </a>
            <a
                href="#"
                className="flex flex-col items-center mx-5 text-red-600 hover:text-orange-500"
            >
                <span className="text-2xl">饺子</span>
                <span className="text-sm">饺饺食品</span>
            </a>
        </div>
    );
};

export default TmallLinks;
