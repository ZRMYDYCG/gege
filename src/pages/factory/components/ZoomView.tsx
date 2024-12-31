import { useState } from 'react';

// @ts-ignore
import VrReact from 'vr-react';

// 自定义 VR 组件
const VRComponent = () => {
    const [viewer, setViewer] = useState(null);

    // 定义场景
    const scenes = {
        oneScene: {
            type: "equirectangular",
            panorama: "https://pannellum.org/images/bma-1.jpg",
        },
        twoScene: {
            type: "equirectangular",
            panorama: "https://pannellum.org/images/bma-2.jpg",
        },
    };

    // 自定义热点
    const hotSpots = [
        {
            id: "hotSpot1",
            sceneId: "twoScene",
            pitch: 0,
            yaw: 180,
            createTooltip: () => <div>点击跳转到第二个场景</div>,
        },
    ];

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <VrReact
                setViewer={setViewer}
                scenes={scenes}
                hotSpots={hotSpots}
                width="100%"
                height="100%"
                firstSceneId="oneScene"
            />
        </div>
    );
};

export default VRComponent;
