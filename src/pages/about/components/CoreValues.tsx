import React from 'react';
import { SiAmazonwebservices, SiAparat, SiAtandt } from "react-icons/si";
import lBG from "../../../assets/l-bg.jpg";

const CoreValues: React.FC = () => {
    return (
        <div
            className="bg-gray-100 py-10"
            style={{ backgroundImage: `url(${lBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h2 className="text-3xl font-[楷体] text-center mb-6">我们的核心价值观</h2>
            <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto">

                <div className="flex flex-col items-center text-center p-5 rounded-lg m-3 w-full md:w-auto">
                    <div className="border border-gray-600 rounded-full w-[60px] h-[60px] border-dotted flex items-center justify-center">
                        <SiAmazonwebservices />
                    </div>
                    <h3 className="text-xl py-2">企业宗旨</h3>
                    <p className="text-gray-600">把员工和消费者当家人</p>
                </div>

                <div className="flex flex-col items-center text-center p-5 rounded-lg m-3 w-full md:w-auto">
                    <div className="border border-gray-600 rounded-full w-[60px] h-[60px] border-dotted flex items-center justify-center">
                        <SiAparat />
                    </div>
                    <h3 className="text-xl py-2">经营理念</h3>
                    <p className="text-gray-600">生产给父母、子女、恋人的食品</p>
                </div>

                <div className="flex flex-col items-center text-center p-5 rounded-lg m-3 w-full md:w-auto">
                    <div className="border border-gray-600 rounded-full w-[60px] h-[60px] border-dotted flex items-center justify-center">
                        <SiAtandt />
                    </div>
                    <h3 className="text-xl py-2">庄严承诺</h3>
                    <p className="text-gray-600">做良心食品，不隐黑心钱</p>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
