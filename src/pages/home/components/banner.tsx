import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // 使用箭头图标

const slides = [
    {
        id: 1,
        title: "如比香酥，你心动吗",
        description: "内里香酥，口味悠长；花生原香轻烤，令人欲罢不能。少油少负担，美味放心吃。",
        buttonText: "点击购买",
        image: "https://pic1.imgdb.cn/item/6772cf6fd0e0a243d4ecd7ec.jpg",
    },
    {
        id: 2,
        title: "健康的美味",
        description: "让我们一起享受健康的美味小食。",
        buttonText: "立即尝试",
        image: "https://pic1.imgdb.cn/item/6772cf9dd0e0a243d4ecd7f3.jpg",
    },
    {
        id: 3,
        title: "新鲜可口的滋味",
        description: "每天都新鲜，口口相传的享受。",
        buttonText: "查看详情",
        image: "https://pic1.imgdb.cn/item/6772cf8dd0e0a243d4ecd7ef.jpg",
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentIndex].image})`, zIndex: 0 }}>
            {/* 轮播图内容 */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                <h2 className="text-3xl font-bold mb-4">{slides[currentIndex].title}</h2>
                <p className="text-lg mb-4 text-center">{slides[currentIndex].description}</p>
                <button className="bg-red-500 text-white py-2 px-4 rounded">
                    {slides[currentIndex].buttonText}
                </button>
            </div>

            {/* 左右箭头（仅在大屏幕显示） */}
            <button onClick={prevSlide} className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 opacity-50 hover:opacity-100 text-white p-2 rounded">
                <FaChevronLeft />
            </button>
            <button onClick={nextSlide} className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 opacity-50 hover:opacity-100 text-white p-2 rounded">
                <FaChevronRight />
            </button>

            {/* 当前索引指示（大屏幕显示为小圆点，小屏幕显示为数字） */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
                {slides.map((slide, index) => (
                    <div key={slide.id} className="hidden lg:flex">
                        <span className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`} />
                    </div>
                ))}
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center
                        ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}
                        cursor-pointer`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
