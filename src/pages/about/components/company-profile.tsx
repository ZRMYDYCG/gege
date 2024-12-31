import React from 'react';
import imageSrc from '../../../assets/about.jpg';

const CompanyProfile: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row w-[80vw] mx-auto justify-center items-center">
            {/* 左侧卡片 */}
            <div className="w-[400px] p-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-700 font-[楷体]">公司简介</h2>
                <p className="text-gray-700 mb-4">
                    江西省鸽鸽食品有限公司是一家以天然、绿色农林产品为主要食材，专业生产健康、美味、有特色的、差异化休闲零食企业。公司座落在鹰潭市国家高新技术开发区鸽鸽食品路，占地面积一百余亩，建成现代化标准生产车间、办公室、生活用房总建筑面积60000多平方米。拥有高标准的洁净食品生产车间、无尘无菌工作室。现有员工300余人，公司有自己的原材料基地，固定资产投资过亿元。下设有技术部、生产部、采购部、财务部、人力资源部、行政部、客服部、销售部、电子商务部。
                </p>
                <button className="mt-4 bg-orange-500 w-[100%] text-white py-2 px-4 rounded-md">
                    鸽鸽食品宣传片
                </button>
            </div>

            {/* 右侧图片 */}
            <div className="w-[400px] mt-4 md:mt-0"> {/* 在移动设备上添加上边距 */}
                <img src={imageSrc} alt="公司" className="w-full rounded-md" />
            </div>
        </div>
    );
};

export default CompanyProfile;
