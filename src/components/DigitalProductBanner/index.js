import { Row, Col} from "react-bootstrap";
import {ReactComponent as RightArrowRed} from "../../assets/svgs/RightArrowRed.svg"
import "./css/styles.css"
const DigitalProductBanner=()=>{
    return(
        <>
            <Row className="digitalProductBannerRow">
                <Col md={8}>
                    <p className="digitalProductBannerHeading">World-Class Digital Products.</p>
                    <p className="digitalProductBannerHeading">On-<span className="colorText">Time</span>. On-<span className="colorText">Budget</span>. On-<span className="colorText">Point</span>.</p>
                    <p className="digitalProductBannerDescription">We are an acclaimed and certified web and mobile app design and development company committed to digital innovations and inventions.</p>
                    <p className="somethingTogetherText">Lets create something together  <RightArrowRed className="rightArrowDiv"/></p>
                </Col>
                <Col md={4}>
                    <img alt="dummyImage" />
                </Col>
            </Row>
        </>
    )
}

export default DigitalProductBanner;