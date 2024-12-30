import tmallLogo from '../../../assets/tmall-logo.png';
import tmallLogoB from '../../../assets/tmall-logo-b.jpg';
import jdLogo from '../../../assets/jd-logo.png';
import gegeLogo1 from '../../../assets/gg-1.jpg';
import gegeLogo2 from '../../../assets/gg-2.jpg';
import gegeLogo3 from '../../../assets/gg-3.jpg';
import wechatQr1 from '../../../assets/w-1.jpg';
import wechatQr2 from '../../../assets/w-2.jpg';

const Footer = () => {
    const brandLogos = [
        { src: tmallLogo, alt: '天猫' },
        { src: tmallLogoB, alt: '天猫' },
        { src: jdLogo, alt: '京东' },
        { src: gegeLogo1, alt: 'gege品牌1' },
        { src: gegeLogo2, alt: 'gege品牌2' },
        { src: gegeLogo3, alt: 'gege品牌3' },
    ];

    const wechatQrs = [
        { src: wechatQr1, alt: '官方微信公众号二维码1' },
        { src: wechatQr2, alt: '官方微信公众号二维码2' },
    ];

    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto pt-6 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* 联系我们 */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">联系我们</h3>
                        <p>地址：江西省鹰潭市经济技术开发区的馨品路</p>
                        <p>邮箱：gegefood@163.com</p>
                        <p>客服电话：0701-6317851</p>
                        <p>办公室：0701-6317577</p>
                        <p>采购部：0701-6317881</p>
                        <p>传真：0701-6317851</p>
                    </div>

                    {/* 代理合作 */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">代理合作</h3>
                        <p>我们愿意与更多伙伴合作，实现双赢</p>
                        <p>招商热线：0701-6317851</p>
                        <p>工作时间：上午8:00-下午17:00（周一至周五）</p>
                        <p>阿里巴巴：0701-6317556</p>
                        <p>拼多多：0701-6317838</p>
                        <p>天猫商城：0701-6317882</p>
                    </div>

                    {/* 在线品牌专营店 */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">线上品牌专营店</h3>
                        <div className="flex space-x-4">
                            {brandLogos.map((logo) => (
                                <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10" />
                            ))}
                        </div>
                    </div>

                    {/* 官方微信公众账号 */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">官方微信公众号</h3>
                        <div className="flex space-x-4">
                            {wechatQrs.map((qr) => (
                                <img key={qr.alt} src={qr.src} alt={qr.alt} className="h-40" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 底部版权信息 */}
                <div className="bg-red-500 text-white text-center py-4 mt-8 w-full">
                    <p>Copyright © 2006-2024. 鳙鳙食品 All Rights Reserved. 赣ICP备12005678号-1</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
