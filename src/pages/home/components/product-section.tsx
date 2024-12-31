import img6 from '../../../assets/title.png'

const ProductSection = () => {
    const img1 = 'https://pic1.imgdb.cn/item/6772d855d0e0a243d4ecd876.png';
    const img2 = 'https://pic1.imgdb.cn/item/6772d87ad0e0a243d4ecd879.png';
    const img3 = 'https://pic1.imgdb.cn/item/6772d891d0e0a243d4ecd87a.png';
    const img4 = 'https://pic1.imgdb.cn/item/6772d8fcd0e0a243d4ecd87f.png';
    const img5 = 'https://pic1.imgdb.cn/item/6772d97bd0e0a243d4ecd883.png';

    return (
        <div className="relative py-10 w-screen bg-gray-100 overflow-hidden">
            {/* 左下角背景图 */}
            <img src={img5} alt="侧边图" className="absolute left-0 bottom-0 w-1/8 lg:w-1/8 transform translate-x-[-80px] translate-y-[50px]" />

            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">新品上市</h2>
                <div className="flex items-center mb-3 justify-center gap-x-2">
                    <div className="w-[60px] h-[1px] bg-orange-500"></div>
                    <img src={img6} alt="分割线" />
                    <div className="w-[60px] h-[1px] bg-orange-500"></div>
                </div>
                <p className="text-center mb-6 text-sm text-gray-600">
                    鲜香辣爽，韧性美味，用心呈现。贴心双开口设计，食用更方便。系出名门，品质之选。
                </p>

                {/* 产品图片展示部分 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-1/2 mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img src={img1} alt="香辣豆皮" className="w-3/4 h-auto mb-2" />
                            <h3 className="font-semibold">香辣豆皮</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img src={img2} alt="多味花生" className="w-3/4 h-auto mb-2" />
                            <h3 className="font-semibold">多味花生</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img src={img3} alt="魔芋凉皮" className="w-3/4 h-auto mb-2" />
                            <h3 className="font-semibold">魔芋凉皮</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 右上角背景图 */}
            <img src={img4} alt="侧边图" className="absolute right-0 top-0 w-1/8 lg:w-1/8 transform -translate-x-[-100px] -translate-y-[60px]" />
        </div>
    );
};

export default ProductSection;
