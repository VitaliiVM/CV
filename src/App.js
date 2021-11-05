import React from "react";
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Itgidoop from "./components/Certificates/Itgidoop";
import Itgidjs from "./components/Certificates/Itgidjs";
import Itgidnode from "./components/Certificates/Itgidnode";
import Codecademycourse from "./components/Certificates/Codecademycourse";
import Itgidreact from "./components/Certificates/Itgidreact";

function App() {
    return (
        <Router>
            <>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/education" component={Education}/>
                    <Route path="/experience" component={Experience}/>
                    <Route path="/sertificateoop" component={Itgidoop}/>
                    <Route path="/sertificatejs" component={Itgidjs}/>
                    <Route path="/sertificatenodejs" component={Itgidnode}/>
                    <Route path="/sertificatecodecademy" component={Codecademycourse}/>
                    <Route path="/sertificateitgidreact" component={Itgidreact}/>
                </Switch>
            </>
        </Router>
    );
}

export default App;
