import React, { useState } from 'react';

interface Product {
    name: string;
    flavor: string;
    weight: string;
    image: string;
}

interface ProductsData {
    [key: string]: Product[];
}

const productsData: ProductsData = {
    '豆角干系列': [
        { name: '豆角干', flavor: '素香/麻辣', weight: '散装称重', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
        { name: '豆角干(箱)', flavor: '麻辣味/素香味', weight: '', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
        { name: '豆角干(箱)', flavor: '麻辣味/素香味', weight: '', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
        { name: '豆角干(箱)', flavor: '麻辣味/素香味', weight: '', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
        { name: '豆角干(箱)', flavor: '麻辣味/素香味', weight: '', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
        { name: '豆角干(箱)', flavor: '麻辣味/素香味', weight: '', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
        { name: '豆角干(箱)', flavor: '麻辣味/素香味', weight: '', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
        { name: '豆角干(箱)', flavor: '麻辣味/素香味', weight: '', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
    '豆制品系列': [
        { name: '香辣豆角干', flavor: '香辣味', weight: '70克', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
    '四季豆系列': [
        { name: '香辣豆角干', flavor: '香辣味', weight: '70克', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
    '牛肉系列': [
        { name: '香辣豆角干', flavor: '香辣味', weight: '70克', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
    '饮料系列': [
        { name: '香辣豆角干', flavor: '香辣味', weight: '70克', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
    '花生系列': [
        { name: '香辣豆角干', flavor: '香辣味', weight: '70克', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
    '酸奶系列': [
        { name: '香辣豆角干', flavor: '香辣味', weight: '70克', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
    '辣条系列': [
        { name: '香辣豆角干', flavor: '香辣味', weight: '70克', image: 'https://pic1.imgdb.cn/item/67739a51d0e0a243d4ed0563.jpg' },
    ],
};

const ProductCenter: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('豆角干系列');

    const categories = Object.keys(productsData);

    return (
        <div className="bg-white py-10">
            <div className="text-center mb-8 w-[80vw] shadow-lg rounded-lg bg-white mx-auto py-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 mx-2 ${
                            activeCategory === category ? 'text-red-600 font-bold' : 'text-gray-600'
                        }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {productsData[activeCategory].map((product, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-3" />
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-600">口味: {product.flavor}</p>
                        <p className="text-gray-600">净含量: {product.weight}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCenter;
