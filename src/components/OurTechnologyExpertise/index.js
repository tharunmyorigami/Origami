import { Row, Col} from "react-bootstrap";
import { ReactComponent as FigmaLogo } from "../../assets/svgs/FigmaLogo.svg";
import { ReactComponent as SketchLogo } from "../../assets/svgs/SketchLogo.svg";
import { ReactComponent as Adobeillustrator } from "../../assets/svgs/AdobeillustratorLogo.svg";
import AdobePhotoshop from "../../assets/Images/AdobePhotoshop.png";
import { ReactComponent as ReactLogo } from "../../assets/svgs/ReactLogo.svg";
import { ReactComponent as AngularLogo } from "../../assets/svgs/AngularLogo.svg";
import { ReactComponent as VueJsLogo } from "../../assets/svgs/VueJsLogo.svg";
import DotNetLogo from "../../assets/Images/DotNetLogo.png"
import  NodeJsLogo  from  "../../assets/Images/NodeJsLogo.png";
import  RubyLogo  from  "../../assets/Images/RubyLogo.png";
import { ReactComponent as LaravelLogo } from "../../assets/svgs/LaravelLogo.svg";
import { ReactComponent as PhpLogo } from "../../assets/svgs/PhpLogo.svg";
import { ReactComponent as GolangoLogo } from "../../assets/svgs/GolangoLogo.svg";
// import { ReactComponent as AgileTddLogo } from "../../assets/svgs/AgileTddLogo.svg";
import { ReactComponent as AzureLogo } from "../../assets/svgs/AzureLogo.svg";
import { ReactComponent as AmazonLogo } from "../../assets/svgs/AmazonLogo.svg";
import { ReactComponent as DigitaloceanLogo } from "../../assets/svgs/DigitaloceanLogo.svg";
import { ReactComponent as HerokuLogo } from "../../assets/svgs/HerokuLogo.svg";
import { ReactComponent as PostgresqlLogo } from "../../assets/svgs/PostgresqlLogo.svg";
import { ReactComponent as MysqlLogo } from "../../assets/svgs/MysqlLogo.svg";
import { ReactComponent as DynamodbLogo } from "../../assets/svgs/DynamodbLogo.svg";
import { ReactComponent as IosLogo } from "../../assets/svgs/IosLogo.svg";
import { ReactComponent as AndroidLogo } from "../../assets/svgs/AndroidLogo.svg";
import { ReactComponent as FlutterLogo } from "../../assets/svgs/FlutterLogo.svg";
import { ReactComponent as KotlinLogo } from "../../assets/svgs/KotlinLogo.svg";
import { ReactComponent as GithubLogo } from "../../assets/svgs/GithubLogo.svg";
import { ReactComponent as BitbucketLogo } from "../../assets/svgs/BitbucketLogo.svg";
import { ReactComponent as GitlabLogo } from "../../assets/svgs/GitlabLogo.svg";
import { ReactComponent as SalesforceLogo } from "../../assets/svgs/SalesforceLogo.svg";
import { ReactComponent as TeamcityLogo } from "../../assets/svgs/TeamcityLogo.svg";
import { ReactComponent as CircleciLogo } from "../../assets/svgs/CircleciLogo.svg";
import { ReactComponent as JenkinsLogo } from "../../assets/svgs/JenkinsLogo.svg";
import { ReactComponent as AppStoreLogo } from "../../assets/svgs/AppStoreLogo.svg";
import { ReactComponent as GitLogo } from "../../assets/svgs/GitLogo.svg";
import { ReactComponent as GoogleMeetLogo } from "../../assets/svgs/GoogleMeetLogo.svg";
import { ReactComponent as ZoomLogo } from "../../assets/svgs/ZoomLogo.svg";
import { ReactComponent as SlackLogo } from "../../assets/svgs/SlackLogo.svg";
import { ReactComponent as MicrosoftTeamsLogo } from "../../assets/svgs/MicrosoftTeamsLogo.svg";
import { ReactComponent as HangoutsLogo } from "../../assets/svgs/HangoutsLogo.svg";
import { ReactComponent as MavenLogo } from "../../assets/svgs/MavenLogo.svg";
import { ReactComponent as AnsibleLogo } from "../../assets/svgs/AnsibleLogo.svg";
import { ReactComponent as ChefLogo } from "../../assets/svgs/ChefLogo.svg";
import { ReactComponent as JiraLogo } from "../../assets/svgs/JiraLogo.svg";
import { ReactComponent as TrelloLogo } from "../../assets/svgs/TrelloLogo.svg";
import { ReactComponent as BasecampLogo } from "../../assets/svgs/BasecampLogo.svg";
import { ReactComponent as MsProjectLogo } from "../../assets/svgs/MsProjectLogo.svg";
import { ReactComponent as WordpressLogo } from "../../assets/svgs/WordpressLogo.svg";
import { ReactComponent as DrupalLogo } from "../../assets/svgs/DrupalLogo.svg";


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
                            <p><FigmaLogo className="technologySvg"/> Figma</p>
                            <p><SketchLogo className="technologySvg"/> Sketch</p>
                            <p><Adobeillustrator className="technologySvg adobeSvg"/>Adobe Illustrator</p>
                            <p className="technologyImagePara"><div className="technologyImageDiv adobe"><img src={AdobePhotoshop} className="technologyPng" /></div>Adobe Photoshop</p>
                        </div>
                        <div className="technologydiv">
                            <p className="ourExpertiseHeadings">Front-end</p>
                            <p><ReactLogo className="technologySvg"/>ReactJS</p>
                            <p><AngularLogo className="technologySvg" />Angular</p>
                            <p><VueJsLogo className="technologySvg"/>Vue.JS</p>
                        </div>
                        <div className="technologydiv">
                            <p className="ourExpertiseHeadings">Back-end</p>
                            <p className="technologyImagePara"><div className="technologyImageDiv"><img src={DotNetLogo} className="technologyPng" /></div> .Net</p>
                            <p className="technologyImagePara"><div className="technologyImageDiv"><img src={NodeJsLogo} className="technologyPng" /></div> Node Js</p>
                            <p>Java</p>
                            <p className="technologyImagePara"><div className="technologyImageDiv ruby"><img src={RubyLogo} className="technologyPng" /></div> Ruby On Rails</p>
                            <p><LaravelLogo className="technologySvg"/>Laravel</p>
                            <p><PhpLogo className="technologySvg"/>PHP</p>
                            <p><GolangoLogo className="technologySvg"/>Golang</p>
                        </div>
                        <div className="technologydiv">
                            <p className="ourExpertiseHeadings">Other</p>
                            <p>Agile TDD</p>
                        </div>
                    </Col>
                    <Col>
                         <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Server</p>
                            <p><AzureLogo className="technologySvg"/>Azure</p>
                            <p>Google Cloud</p>
                            <p><AmazonLogo className="technologySvg"/>AWS</p>
                            <p><DigitaloceanLogo className="technologySvg"/>Digital Ocean</p>
                            <p><HerokuLogo className="technologySvg"/>Heroku</p>
                        </div>
                         <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Database</p>
                            <p>MS SQL</p>
                            <p>MongoDB</p>
                            <p><PostgresqlLogo className="technologySvg"/>PostgreSQL</p>
                            <p><MysqlLogo className="technologySvg"/>MySQL</p>
                            <p><DynamodbLogo className="technologySvg"/>Dynamo DB</p>
                        </div>
                         <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Mobile</p>
                            <p><IosLogo className="technologySvg"/>iOS</p>
                            <p><AndroidLogo className="technologySvg"/>Android</p>
                            <p><FlutterLogo className="technologySvg"/>Flutter</p>
                            <p><ReactLogo className="technologySvg"/>React Native</p>
                            <p>Ionic</p>
                            <p><KotlinLogo className="technologySvg"/>Kotlin</p>
                        </div>
                    </Col>
                    <Col>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Version Control</p>
                            <p><GithubLogo className="technologySvg"/>Github</p>
                            <p><BitbucketLogo className="technologySvg"/>BitBucket</p>
                            <p><GitlabLogo className="technologySvg"/>Gitlab</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">CRM</p>
                            <p><SalesforceLogo className="technologySvg"/>Salesforce</p>
                            <p>Microsoft Dynamic 365</p>
                            <p><TeamcityLogo className="technologySvg"/>TeamCity</p>
                            <p>Bamboo</p>
                            <p><CircleciLogo className="technologySvg"/>Circleci Hudson</p>
                            <p><JenkinsLogo className="technologySvg"/>Jenkins</p>
                            <p><AppStoreLogo className="technologySvg"/>Apps</p>
                            <p><GitLogo className="technologySvg"/>Git</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Meeting</p>
                            <p><GoogleMeetLogo className="technologySvg"/>Google Meet</p>
                            <p><ZoomLogo className="technologySvg"/>Zoom</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Communication Tools</p>
                            <p><SlackLogo className="technologySvg"/>Slack</p>
                            <p><MicrosoftTeamsLogo className="technologySvg"/>Microsoft Team</p>
                            <p><HangoutsLogo className="technologySvg"/>Hangout</p>
                        </div>
                    </Col>
                    <Col>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Devops</p>
                            <p>Apacheant</p>
                            <p>Xcode</p>
                            <p>Fastlane Gant</p>
                            <p>Gradle</p>
                            <p><MavenLogo className="technologySvg"/>Maven</p>
                            <p><AnsibleLogo className="technologySvg"/>Ansible</p>
                            <p><ChefLogo className="technologySvg"/>Chef</p>
                            <p>Puppet</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">Project Management Tools</p>
                            <p><JiraLogo className="technologySvg"/>Jira</p>
                            <p><TrelloLogo className="technologySvg"/>Trello</p>
                            <p><BasecampLogo className="technologySvg"/>BaseCamp</p>
                            <p><MsProjectLogo className="technologySvg"/>MS Project</p>
                        </div>
                        <div  className="technologydiv">
                            <p className="ourExpertiseHeadings">CMS</p>
                            <p><WordpressLogo className="technologySvg"/>WordPress</p>
                            <p><DrupalLogo className="technologySvg"/>Drupal</p>
                        </div>
                    </Col>   
                </Row>
            </Row>
        </>
    )
}

export default OurTechnologyExpertise;