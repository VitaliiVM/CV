import React, {Component} from "react";
import Education from "./Education";
import Experience from "./Experience";
import Navbar from "./Navbar";
import About from "./About";
import Porfolios from "./Porfolios";
import Profile from "./Profile";
import Skills from "./Skills";

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile/>
                        </div>
                        <div className="col s12 m8 l9">
                            <About/>
                            <Skills/>
                            <Experience/>
                            <Education/>
                            <Porfolios/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}