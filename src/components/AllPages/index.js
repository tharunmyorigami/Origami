import DigitalProductBanner from "../DigitalProductBanner";
import OurMotto from "../OurMotto";
import OurServices from "../OurServices";
import WhyUs from "../WhyUs";
import OurExpertise from "../OurExpertise";
import OurClients from "../OurClients";
import OurTechnologyExpertise from "../OurTechnologyExpertise";
import "./css/styles.css"

const AllPages =()=>{
    return(
            <div className="allPagesDiv">
                <DigitalProductBanner />
                <OurMotto />
                <OurServices />
                <WhyUs />
                <OurExpertise />
                <OurClients />
                <OurTechnologyExpertise />
    
            </div>
        )
    }
    
export default AllPages;