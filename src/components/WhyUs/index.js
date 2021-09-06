import { Row, Col} from "react-bootstrap";
import "./css/styles.css"
const WhyUs=()=>{
    return(
        <>
            <Row className="whyUsRow">
                <Col md={8}>
                    <p className="whyUsHeading">Why us?</p>
                    <p className="pillarText">Four pillars of <span className="colorText">Origami</span></p>
                    <p className="pillarSubHeading">We highly appreciate working with innovative and ambitious entrepreneurs. This is why we are our clients favourites.</p>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col>
                            On-time delivery
                        </Col>
                        <Col>
                            Exceptional Quality
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            App Versioning
                        </Col>
                        <Col>
                            Budget planning
                        </Col>
                    </Row>
                </Col>

            </Row>
        </>
    )
}

export default WhyUs;