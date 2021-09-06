import { Row, Col, Button } from "react-bootstrap";
import "./css/styles.css"
const Header =()=>{
    return(
        <>
            <Row className="HeaderRow">
                <Col sm="5">
                    <p className="origamiParaText"><span className="oLetter">O</span>rigami</p>
                </Col>
                <Col sm="7" className="d-flex">
                    <p className="menuNames">Services</p>
                    <p className="menuNames">Ecommerce</p>
                    <p className="menuNames">Technology</p>
                    <p className="menuNames">Staffing</p>
                    <p className="menuNames">About</p>
                    <p className="menuNames">Careers</p>
                    <Button className="startProjectBtn">Start a Project</Button>          
                </Col>
            </Row>
            
        </>
    )

}

export default Header;