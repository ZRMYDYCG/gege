const jobList = [
    "包装设计",
    "淘宝客服",
    "推销运营",
    "美工",
    "市场调研专员",
    "招聘专员",
    "运营总监",
    "财务总监",
    "品质主任",
    "培训专员",
    "人力资源经理",
    "人力资源总监",
    "设备干部",
    "研发员",
    "市场专员",
    "运维经理"
];

const JobList = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto py-4">
            {jobList.map((job, index) => (
                <div key={index} className="border p-4 flex items-center justify-center rounded-lg bg-white shadow-md">
                    <span className="text-orange-600 font-semibold">招聘信息: {job}</span>
                </div>
            ))}
        </div>
    );
};

export default JobList;
