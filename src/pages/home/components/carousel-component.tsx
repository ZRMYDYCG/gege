import React, { useEffect, useState } from 'react';
import img6 from "../../../assets/title.png";
import p1 from "../../../assets/p-1.jpg";
import p2 from "../../../assets/p-2.jpg";
import p3 from "../../../assets/p-3.jpg";
import p4 from "../../../assets/p-4.jpg";

const items = [
    {
        id: 1,
        text: '做良心食品，不做黑心食品。是食品对社会的严肃承诺。',
        author: '何女士',
        position: '消费者',
        imageUrl: p1,
    },
    {
        id: 2,
        text: '一个孕妇想吃葱姜怎么能办，只能赞叹这种状态真的太自然了。',
        author: '张先生',
        position: '外企员工',
        imageUrl: p2,
    },
    {
        id: 3,
        text: '这项服务真的很人性化，值得推广。',
        author: '李小姐',
        position: '全职妈妈',
        imageUrl: p3,
    },
    {
        id: 4,
        text: '能够满足我对饮食健康的要求，太好了。',
        author: '王老师',
        position: '大学教授',
        imageUrl: p4,
    },
];

const CarouselComponent: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // 每3秒切换一次

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto p-10 bg-white">
            <h2 className="text-center text-3xl mb-4">消费者怎么说</h2>
            <div className="flex items-center mb-3 justify-center gap-x-2">
                <div className="w-[60px] h-[1px] bg-orange-500"></div>
                <img src={img6} alt="分割线"/>
                <div className="w-[60px] h-[1px] bg-orange-500"></div>
            </div>
            <p className="text-center mb-6 text-gray-600">
                "做良心食品，不做黑心食品。" 是食品对社会的严肃承诺。
            </p>
            <div className="flex justify-center mb-4">
                {items.map((item, index) => (
                    <div key={item.id}
                         className={`flex flex-col items-center mx-2 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}>
                        <img
                            src={item.imageUrl}
                            alt={item.author}
                            className={`w-24 h-24 object-cover rounded-full transition-transform duration-500 ${index === currentIndex ? 'scale-125' : ''}`}
                        />
                    </div>
                ))}
            </div>
            <div className="text-center mb-4">
                <blockquote className="text-lg italic">
                    {items[currentIndex].text}
                </blockquote>
                <p className="font-bold">{items[currentIndex].author}</p>
                <p className="text-gray-500">{items[currentIndex].position}</p>
            </div>
            <div className="flex justify-center space-x-2">
                {items.map((item, index) => (
                    <button key={item.id}
                            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'}`}></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;
