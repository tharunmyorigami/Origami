import { Row, Col} from "react-bootstrap";
import "./css/styles.css";

const OurTechnologyExpertise=()=>{
    return(
        <>
            <Row className="ourTechnologyExpertiseRow">
                <Row>
                    <p className="ourTechnologyExpertiseHeading">Our Technology Expertise <hr /></p>
                    <p className="technologyDescription">We use <span className="colorText">best-in-class tools, state-of-the-art technologies and modern approaches</span> to scale up your business</p>
                </Row>
                <Row className="ourTechnologyExpertiseIconsRow">
                    <Col>
                        <div className="technologydiv">
                            <p className="ourExpertiseHeadings">Design</p>
                            <p>Figma</p>
                            <p>Sketch</p>
                            <p>Adobe Illustrator</p>
                            <p>Adobe Photoshop</p>
                        </div>
                        <div className="technologydiv">
                            <p className="ourExpertiseHeadings">Front-end</p>
                            <p>ReactJS</p>
                            <p>Angular</p>
                            <p>Vue.JS</p>
                        </div>
                        <div className="technologydiv">
                            <p className="ourExpertiseHeadings">Back-end</p>
                            <p>.Net</p>
                            <p>Java</p>
                            <p>Ruby On Rails</p>
                            <p>Laravel</p>
                            <p>PHP</p>
                            <p>Golang</p>
                        </div>
                        <div className="technologydiv">
                            <p className="ourExpertiseHeadings">Other</p>
                            <p>Agile TDD</p>
                        </div>
                    </Col>
                    <Col>
                         <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Server</p>
                            <p>Azure</p>
                            <p>Google Cloud</p>
                            <p>AWS</p>
                            <p>Digital Ocean</p>
                            <p>Heroku</p>
                        </div>
                         <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Database</p>
                            <p>MS SQL</p>
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                            <p>MySQL</p>
                            <p>Dynamo DB</p>
                        </div>
                         <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Mobile</p>
                            <p>iOS</p>
                            <p>Android</p>
                            <p>Flutter</p>
                            <p>React Native</p>
                            <p>Ionic</p>
                            <p>Kotlin</p>
                        </div>
                    </Col>
                    <Col>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Version Control</p>
                            <p>Github</p>
                            <p>BitBucket</p>
                            <p>Gitlab</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">CRM</p>
                            <p>Salesforce</p>
                            <p>Microsoft Dynamic 365</p>
                            <p>TeamCity</p>
                            <p>Bamboo</p>
                            <p>Circleci Hudson</p>
                            <p>Jenkins</p>
                            <p>Apps</p>
                            <p>Git</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Meeting</p>
                            <p>Google Meet</p>
                            <p>Zoom</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Communication Tools</p>
                            <p>Slack</p>
                            <p>Microsoft Team</p>
                            <p>Hangout</p>
                        </div>
                    </Col>
                    <Col>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Devops</p>
                            <p>Apacheant</p>
                            <p>Xcode</p>
                            <p>Fastlane Gant</p>
                            <p>Gradle</p>
                            <p>Maven</p>
                            <p>Ansible</p>
                            <p>Chef</p>
                            <p>Puppet</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Project Management Tools</p>
                            <p>Jira</p>
                            <p>Trello</p>
                            <p>BaseCamp</p>
                            <p>MS Project</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">CMS</p>
                            <p>WordPress</p>
                            <p>Drupal</p>
                        </div>
                    </Col>   
                </Row>
            </Row>
        </>
    )
}

export default OurTechnologyExpertise;