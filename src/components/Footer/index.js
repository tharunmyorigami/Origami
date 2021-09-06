import { Row, Col, Button} from "react-bootstrap";
import { ReactComponent as RedHeart } from "../../assets/svgs/RedHeart.svg";
import { ReactComponent as UpArrowRed } from "../../assets/svgs/UpArrowRed.svg";
import "./css/styles.css"
const Footer=()=>{
    const date =  new Date().getFullYear();
    return(
        <>
            <Row className="footerRow">
                <Row>
                    <p className="footerHeading">Are you ready?</p>
                    <p className="buildProductText">Let’s build your next </p>
                    <p className="buildProductText">digital <span className="colorRedText">product</span>!</p>
                    <Button className="getInTouchBtn">Get in touch</Button>
                </Row>
                <Row className="servicesRow">
                    <Col>
                        <p className="footerHeadings">Services</p>
                        <p className="servicesNames">Web design & Development</p>
                        <p className="servicesNames">App Development</p>
                        <p className="servicesNames">Quality Assurance</p>
                        <p className="servicesNames">Discover & Design</p>
                    </Col>
                    <Col>
                        <p className="footerHeadings">eCommerce</p>
                        <p className="servicesNames">Web design & Development</p>
                        <p className="servicesNames">App Development</p>
                        <p className="servicesNames">Quality Assurance</p>
                        <p className="servicesNames">Discover & Design</p>
                    </Col>
                    <Col>
                        <p className="footerHeadings">Expertise</p>
                        <p className="servicesNames">Web design & Development</p>
                        <p className="servicesNames">App Development</p>
                        <p className="servicesNames">Quality Assurance</p>
                        <p className="servicesNames">Discover & Design</p>
                    </Col>
                    <Col>
                        <p className="footerHeadings">Technologies</p>
                        <p className="servicesNames">Web design & Development</p>
                        <p className="servicesNames">App Development</p>
                        <p className="servicesNames">Quality Assurance</p>
                        <p className="servicesNames">Discover & Design</p>
                    </Col>
                    <Col>
                        <p className="footerHeadings">Staffing</p>
                        <p className="servicesNames">Web design & Development</p>
                        <p className="servicesNames">App Development</p>
                        <p className="servicesNames">Quality Assurance</p>
                        <p className="servicesNames">Discover & Design</p>
                    </Col>
                </Row>
                <Row className="contactUsRow">
                    <Col md={3}>
                        <p className="origamiText"><span className="colorRedText">O</span>RIGAMI</p>
                        <p className="logoSubText">Your Go-To Digital Developers</p>
                    </Col>
                    <Col md={3}>
                        <p className="footerHeadings">Contact Us -</p>
                        <p className="contactDescription">contact@myorigami.co</p>
                        <p className="contactDescription">US +1 858 429 9159</p>
                        <p className="contactDescription">IN +91 761 878 0865</p>
                    </Col>
                    <Col md={4}>
                        <p className="footerHeadings">Office -</p>
                        <p className="addressText">312 N Milton Ave, Campbell, </p>
                        <p className="addressText">California 95008, US</p>
                        <p className="contactDescription">US +1 858 429 9159</p>
                    </Col>
                    <Col className="upArrowRed"><UpArrowRed className="upArrowRed" /></Col>
                </Row>
                <span className="footerLine"></span>
                <div className="copyRightDiv">
                    <span className="loveText">Made with <RedHeart /> from the people of Origami</span>
                    <span className="copyRightText">© {date} Origami. All Rights Reserved.</span>
                </div>
            </Row>
        </>
    )
}

export default Footer;