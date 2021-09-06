import { Row, Col} from "react-bootstrap";
import "./css/styles.css"
const OurMotto =()=>{
    return(
        <>
            <Row className="mottoRow">
                <Col md={6}>
                        <p className="ourMottoPara">Our Motto</p>
                        <p className="deliverText">Deliver only the <span className="bestText">Best</span></p>  
                </Col>
                <Col md={6}>
                    <p className="ourMottoDescription">We are a leading global technology provider that helps businesses achieve efficiency, scalability, and lower cost of ownership by accelerating their digital transformation journey.</p>   
                </Col>
            </Row>    
        </>
    )

}

export default OurMotto;