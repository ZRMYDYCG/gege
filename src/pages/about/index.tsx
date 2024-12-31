import Breadcrumb from "../../components/bread-crumb.tsx";
import CompanyProfile from "./components/company-profile.tsx";
import Stats from './components/stats.tsx'
import WhyChooseUs from './components/WhyChooseUs.tsx'
import CoreValues from './components/CoreValues.tsx'
import CorporateScene from './components/CorporateScene.tsx'

function About() {

    return (
        <>
            <Breadcrumb />
            <CompanyProfile />
            <Stats />
            <WhyChooseUs />
            <CoreValues />
            <CorporateScene />
        </>
    )
}

export default About
