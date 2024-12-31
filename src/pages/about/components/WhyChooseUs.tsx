import React from 'react';
import Image from '../../../assets/ab-bg.jpg';
import img6 from "../../../assets/title.png";

const WhyChooseUs: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-white py-10 relative">
            <h2 className="text-3xl mb-4 font-[楷体]">为什么选择我们？</h2>
            <div className="flex items-center mb-3 justify-center gap-x-2">
                <div className="w-[60px] h-[1px] bg-orange-500"></div>
                <img src={img6} alt="分割线"/>
                <div className="w-[60px] h-[1px] bg-orange-500"></div>
            </div>
            <p className="text-sm text-gray-600 text-center max-w-lg mb-8">
                "做良心食品，不赚黑心钱"是鸽鸽食品对社会的庄严承诺，勇于承担社会责任，用百年老店的理念经营企业，确保产品合格率100%。让"鸽鸽"飞出国门，翱翔世界是"鸽鸽"全体员工永远不懈的追求。
            </p>
            <div>
                <img src={Image} alt="Featured Product" className="rounded-lg shadow-md"/>
            </div>
        </div>
    );
};

export default WhyChooseUs;
