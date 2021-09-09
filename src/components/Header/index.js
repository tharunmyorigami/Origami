import { Row, Col, Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import "./css/styles.css"
const Header =()=>{
    return(
        <>
            {/* <Row className="HeaderRow">
                <Col sm="5">
                    <p className="origamiParaText"><span className="oLetter">O</span>rigami</p>
                </Col>
                <Col sm="7" className="d-flex menuCol">
                    <p className="menuNames">Services</p>
                    <p className="menuNames">Ecommerce</p>
                    <p className="menuNames">Technology</p>
                    <p className="menuNames">Staffing</p>
                    <p className="menuNames">About</p>
                    <p className="menuNames">Careers</p>
                    <Button className="startProjectBtn">Start a Project</Button>          
                </Col>
            </Row> */}
            <Navbar  expand="lg" className="HeaderRow">
                <Container>    
                    <Navbar.Brand href="/"><span className="oLetter">O</span>rigami</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto menuCol">
                            <Nav.Link className="menuNames" href="/Services">Services</Nav.Link>
                            <Nav.Link className="menuNames" href="/Ecommerce">Ecommerce</Nav.Link>
                            <Nav.Link className="menuNames" href="/Technology">Technology</Nav.Link>
                            <Nav.Link className="menuNames" href="/Staffing">Staffing</Nav.Link>
                            <Nav.Link className="menuNames" href="/AboutUs">About</Nav.Link>
                            <Nav.Link className="menuNames" href="/Careers">Careers</Nav.Link>
                            <Button className="startProjectBtn">Start a Project</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )

}

export default Header;