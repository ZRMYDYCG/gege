import React, { useState } from 'react';
import officeBuilding from '../../../assets/a-1.jpg';
import productionBase from '../../../assets/a-2.jpg';
import store from '../../../assets/a-3.jpg';

const CorporateScene: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const handleImageClick = (image: string) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="bg-white py-10">
            <h2 className="text-3xl font-[楷体] text-center mb-6">企业场景</h2>
            <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
                公司座落在湖北省国家高新技术开发区的食品路，占地面积一百余亩，生产车间、办公室、生活用房总建筑面积60000多平方米。拥有高标准的洁净食品生产间，无尘无菌工作室。
            </p>
            <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center p-5">
                    <img src={officeBuilding} alt="办公楼" className="w-80 h-auto rounded-lg shadow-md mb-2 cursor-pointer" onClick={() => handleImageClick(officeBuilding)} />
                    <h3 className="text-xl">办公楼</h3>
                </div>
                <div className="flex flex-col items-center text-center p-5">
                    <img src={productionBase} alt="生产基地" className="w-80 h-auto rounded-lg shadow-md mb-2 cursor-pointer" onClick={() => handleImageClick(productionBase)} />
                    <h3 className="text-xl">生产基地</h3>
                </div>
                <div className="flex flex-col items-center text-center p-5">
                    <img src={store} alt="专卖店" className="w-80 h-auto rounded-lg shadow-md mb-2 cursor-pointer" onClick={() => handleImageClick(store)} />
                    <h3 className="text-xl">专卖店</h3>
                </div>
            </div>

            {/* Modal for image preview */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-4">
                        <img src={currentImage!} alt="Preview" className="max-w-full h-auto rounded-lg" />
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={handleCloseModal}>关闭</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CorporateScene;
