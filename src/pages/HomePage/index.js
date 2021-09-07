import AllPages from "../../components/AllPages"
import DigitalProductBanner from "../../components/DigitalProductBanner"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "./css/styles.css"

const HomePage =()=>{
return(<>
            <Header />
            <DigitalProductBanner />
            <p className="customeHr" ></p>
            <AllPages />
            <Footer />
        </>
    )
}

export default HomePage;