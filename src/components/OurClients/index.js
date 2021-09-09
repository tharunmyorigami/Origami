import { Row, Col} from "react-bootstrap";
import "./css/styles.css";

const OurClients=()=>{

    const companyNames=[1,2,3]
    return(
        <>
            <Row className="ourClientsRow">
                <div className="ourClientsHeadingDiv">
                    <p className="ourClientsHeading">Our Clients</p>
                    <p className="ourClientsSubHeading">We go <span className="colorText"> above and beyond </span> together</p>
                </div> 
                <Row className="ourClientsProjectsRow">
                    {/* <div>
                        <p className="projectDescription">Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.</p>
                    </div> */}
                    <Col className="ourClientsProjectsCol">
                        {(companyNames || [])?.map(() => {
                            return ( 
                                <div className="ourClientsProjectsDiv" >
                                    <img src="holder.js/100px180"/>
                                    <p className="projectDescription">Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.</p>
                                </div>
                             )
                        })}
                      
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default OurClients;