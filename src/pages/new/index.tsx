import { useState } from "react";
import Breadcrumb from "../../components/bread-crumb.tsx";
import Paginator from "./components/Paginator.tsx";

const newsData = [
    { id: 1, title: "“阜阜食品牌”高铁定名仪式", date: "2016-08-08", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 2, title: "阜阜品牌启动大会", date: "2016-07-16", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 3, title: "三峡山之书", date: "2016-06-03", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 4, title: "感想与企业", date: "2016-05-11", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 5, title: "荣誉证书", date: "2016-05-06", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 6, title: "打道花在工厂", date: "2016-04-13", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 7, title: "公司会议", date: "2016-03-14", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 1, title: "“阜阜食品牌”高铁定名仪式", date: "2016-08-08", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 2, title: "阜阜品牌启动大会", date: "2016-07-16", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 3, title: "三峡山之书", date: "2016-06-03", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 4, title: "感想与企业", date: "2016-05-11", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 5, title: "荣誉证书", date: "2016-05-06", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 6, title: "打道花在工厂", date: "2016-04-13", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
    { id: 7, title: "公司会议", date: "2016-03-14", image: "https://pic1.imgdb.cn/item/67739f9fd0e0a243d4ed0670.png" },
];

function New(){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // 每页显示项数
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem); // 当前页显示的数据

    const totalPages = Math.ceil(newsData.length / itemsPerPage); // 总页数

    return (
        <>
            <Breadcrumb />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {currentItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-3" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.date}</p>
                    </div>
                ))}
            </div>
            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    );
}

export default New;
