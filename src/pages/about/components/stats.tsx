import StatsItem from './stats-item';
import lBG from "../../../assets/l-bg.jpg";
import { Si1Dot1Dot1Dot1, SiAerlingus, SiAdonisjs, SiAiohttp } from "react-icons/si";

const Stats = () => {
    return (
        <div
            className="flex flex-col md:flex-row justify-around items-center bg-gray-100 p-10"
            style={{ backgroundImage: `url(${lBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <StatsItem value={30} label="余种消费者喜欢的系列休闲产品">
                <Si1Dot1Dot1Dot1 />
            </StatsItem>
            <StatsItem value={60000} label="平方米的现代标准化食品生产车间">
                <SiAerlingus />
            </StatsItem>
            <StatsItem value={300} label="余名优秀员工">
                <SiAdonisjs />
            </StatsItem>
            <StatsItem value={100} label="竞争达到合格率">
                <SiAiohttp />
            </StatsItem>
        </div>
    );
};

export default Stats;
