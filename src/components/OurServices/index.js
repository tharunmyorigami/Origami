import { Row, Col} from "react-bootstrap";
import "./css/styles.css"
const OurServices =()=>{
    return(
        <>
            <Row className="ourServicesRow">
                <p className="ourServiceText">Our Services</p>
                <p className="ourServiceSubHeading">Taking care of every <span className="colorText">digital</span> aspect</p>
                <Row>
                    <Col md={6} className="ourServiceDescptionCol">
                        <div className="ourServiceDescptionDiv">
                            <hr />
                            <div>
                                <p className="ourServiceHeadings">Business Analysis</p>
                                <p className="ourServiceDescription">
                                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="ourServiceDescptionCol">
                        <div className="ourServiceDescptionDiv">
                            <hr />
                            <div>
                                <p className="ourServiceHeadings">Design</p>
                                <p className="ourServiceDescription">
                                    Engaging and interactive UI/UX designs escalate conversions, reducing customer churn, and promote loyalty and advocacy. A great UI/UX design turns software into experiences.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>     
                <Row>
                    <Col md={6} className="ourServiceDescptionCol">
                        <div className="ourServiceDescptionDiv">
                            <hr />
                            <div>
                                <p className="ourServiceHeadings">Application Development</p>
                                <p className="ourServiceDescription">
                                    Mobile apps provide thrilling and engaging experiences that connect users with brands. Native, hybrid, and cross-platform mobile application development offers new and lasting competitive advantages.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="ourServiceDescptionCol">
                        <div className="ourServiceDescptionDiv">        
                            <hr />
                            <div>
                                <p className="ourServiceHeadings">Blockchain</p>
                                <p className="ourServiceDescription">
                                    From cryptocurrencies to supply chain management, Blockchain’s decentralized, distributed, and public ledger offers the highest level of security, transparency, and traceability.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>     
                <Row>
                    <Col md={6} className="ourServiceDescptionCol">
                        <div className="ourServiceDescptionDiv">
                            <hr />
                            <div>
                                <p className="ourServiceHeadings">QA & Testing</p>
                                <p className="ourServiceDescription"> 
                                    Quality Assurance is all about creating the best possible product for your customers. A proper QA & Testing process reveals valuable insights, mitigates downtime, and improves user experience.
                                </p>
                            </div>   
                        </div>   
                    </Col>
                    <Col md={6} className="ourServiceDescptionCol">
                        <div className="ourServiceDescptionDiv">
                            <hr />
                            <div>
                                <p className="ourServiceHeadings">Cyber Security</p>
                                <p className="ourServiceDescription">
                                    Cybersecurity is as relevant as ever, especially for large-scale projects. Managing security risks when handling sensitive data or business products is a priority in any modern software project.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>     
            </Row>    
        </>
    )

}

export default OurServices;