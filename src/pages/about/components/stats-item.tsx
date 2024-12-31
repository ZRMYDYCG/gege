import React, { useEffect, useState } from "react";

interface StatsItemProps {
    value: number;
    label: string;
    duration?: number; // 动画持续时间
    children?: React.ReactNode; // 支持自定义插槽
}

const StatsItem: React.FC<StatsItemProps> = ({ value, label, duration = 2000, children }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const increment = Math.ceil(end / (duration / 100));

        const timer = setInterval(() => {
            if (start < end) {
                start += increment;
                setCount(start > end ? end : start); // 防止超过目标值
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer); // 清除定时器
    }, [value, duration]);

    // 处理换行逻辑
    const formattedLabel = label.split("").reduce((acc: string[], char: string) => {
        const lastLine = acc[acc.length - 1];

        if (lastLine.length < 10) {
            acc[acc.length - 1] += char;
        } else {
            acc.push(char);
        }

        return acc;
    }, [""]).filter(line => line); // 过滤掉空行

    return (
        <div className="flex flex-col items-center">
            <div className="border border-gray-600 rounded-full w-[60px] h-[60px] border-dotted flex items-center justify-center">
                {children}  {/* 自定义插槽 */}
            </div>
            <div className="text-4xl font-bold text-gray-800 py-2">{count}</div>
            {formattedLabel.map((line, index) => (
                <div key={index} className="text-xl text-gray-600">{line}</div>
            ))}
        </div>
    );
};

export default StatsItem;
