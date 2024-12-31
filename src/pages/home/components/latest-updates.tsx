import React from 'react';
import img6 from "../../../assets/title.png";
import update1 from '../../../assets/updates-1.jpg';
import update2 from '../../../assets/updates-2.jpg';
import update3 from '../../../assets/updates-3.jpg';

const updates = [
    {
        date: '2020-01-21',
        title: '新的一年，只争朝夕，不负韶华',
        imageUrl: update1,
    },
    {
        date: '2020-01-21',
        title: '精彩活动回顾',
        imageUrl: update2,
    },
    {
        date: '2019-12-17',
        title: '上下一心，打造百米粒，豆腐产业',
        imageUrl: update3,
    },
];

const LatestUpdates: React.FC = () => {
    return (
        <div className="mx-auto py-10 w-screen bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-6">最新动态</h2>
            <p className="text-center text-gray-600 mb-8 text-sm">
                满足消费者的真实需求，用积极的心态适应变革。
            </p>
            <div className="flex items-center mb-3 justify-center gap-x-2">
                <div className="w-[60px] h-[1px] bg-orange-500"></div>
                <img src={img6} alt="分割线" />
                <div className="w-[60px] h-[1px] bg-orange-500"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 sm:px-2`">
                {updates.map((update, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:max-w-[calc(33%)] mx-auto flex flex-col"
                    >
                        <img src={update.imageUrl} alt={update.title} className="w-full h-48 object-cover" />
                        <div className="flex flex-col p-4">
                            <div className="flex items-center">
                                <span className="bg-orange-500 text-white px-2 py-1 text-sm font-bold whitespace-nowrap">{update.date}</span>
                                <h3 className="text-lg font-semibold ml-4">{update.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestUpdates;
