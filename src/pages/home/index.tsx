import Banner from './components/banner.tsx'
import BrandStory from "./components/brand-story.tsx";
import ProductSection from "./components/product-section.tsx";
import TmallLinks from "./components/tmall-links.tsx"
import LatestUpdates from './components/latest-updates.tsx'
import CarouselComponent from "./components/carousel-component.tsx";

function Home() {
    return (
        <div className="w-screen">
            <Banner />
            <BrandStory />
            <ProductSection />
            <TmallLinks />
            <LatestUpdates />
            <CarouselComponent />
        </div>
    )
}

export default Home
