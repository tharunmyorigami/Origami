import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Services from "./pages/ServicesPage";
import Ecommerce from "./pages/Ecommerce";
import TechnologyPage from "./pages/TechnologyPage";
import StaffingPage from "./pages/StaffingPage";
import AboutUsPage from "./pages/AboutUsPage";
import CareersPage from "./pages/CareersPage";

const Routes=()=>{
    return(<>
    <Header/>
    <Switch>
        <Route exact path="/" component={withRouter(HomePage)} />
        <Route exact path="/Services" component={withRouter(Services)} />
        <Route exact path="/Ecommerce" component={withRouter(Ecommerce)} />
        <Route exact path="/Technology" component={withRouter(TechnologyPage)} />
        <Route exact path="/Staffing" component={withRouter(StaffingPage)} />
        <Route exact path="/AboutUs" component={withRouter(AboutUsPage)} />
        <Route exact path="/Careers" component={withRouter(CareersPage)} />
    </Switch>

    </>)
}

export default Routes;

      