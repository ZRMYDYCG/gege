const BrandStory = () => {
    const productImage = 'https://pic1.imgdb.cn/item/6772d55fd0e0a243d4ecd843.png'
    return (
        <div className="flex flex-col lg:flex-row items-center py-10 px-4 bg-white w-2/3 mx-auto">
            {/* 描述文本部分 */}
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-3">品牌故事</h2>
                <p className="text-lg mb-4">
                    做良心产品，不赚黑心钱
                </p>
                <p className="mb-4">
                    来摩岚游玩，除了欣赏丽的龙虎山风光外，想品尝特色的“鳙鳙”食品的，的确，这种口感鲜嫩、甘、咸、香为一体的特色小吃，给许多游客留下了很深的美味印象。从2006年正式生产“鳙鳙”的“香色小吃”，鳙鳙食品有限公司遵循了“善与‘鳙’”之道。
                </p>
                <button className="bg-red-500 text-white py-2 px-4 rounded">
                    了解更多
                </button>
            </div>
            {/* 产品图片部分 */}
            <div className="lg:w-1/2 lg:pr-10">
                <img src={productImage} alt="产品展示" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default BrandStory;
