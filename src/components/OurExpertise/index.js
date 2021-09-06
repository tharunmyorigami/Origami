import { Row, Col} from "react-bootstrap";
import "./css/styles.css";
import { ReactComponent as LoveHeart } from "../../assets/svgs/loveHeart.svg";
import { ReactComponent as PlayButton } from "../../assets/svgs/PlayButton.svg";
const OurExpertise=()=>{
    return(
        <>
            <Row className="ourExpertiseRow">
                <Row className="ourExpertiseHeadingRow">
                    <p className="ourExpertiseHeading">Our Expertise</p>
                    <p className="ourExpertiseSubHeading">We love being <span className="colorText">Diversified</span></p>
                    <div className="ourExpertiseDiv">
                        <p>We take pride in the expertise we have over diverse industustries. We have implemented out of the box web and mobile applications in these industries.</p>
                    </div>
                </Row>
                <Row>
                    <Col md={2}>
                        <div className="iconDiv">
                            <LoveHeart/>
                            <p>Fantasy Gaming</p>
                        </div>
                    </Col>

                    <Col md={2}>
                        <div className="iconDiv">
                            <LoveHeart/>
                            <p>Healthcare</p>
                        </div>
                    </Col>
                    <Col md={2}>
                         <div className="iconDiv">
                            <LoveHeart/>
                            <p>Analytics</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="iconDiv">
                            <LoveHeart/>
                            <p>Fintech</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="iconDiv">
                            <PlayButton/>
                            <p>Entertainment & Media</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="iconDiv">
                            <LoveHeart/>
                            <p>Ecommerce & Marketplace</p>
                        </div>
                    </Col>
                </Row>

            </Row>
        </>
    )
}

export default OurExpertise;