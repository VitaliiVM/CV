import React, {Component} from "react";
import ItGidnode from "../../img/nodejs.jpg";
import "./index.css";

export default class Itgidnode extends Component {
    render() {
        return (
            <div className="jsitgid-wrapper">
                <div className="flex-container-certif small">
                    <div className="col s9 m4">
                        <div className="card center">
                            <div className="card-image">
                                <img src={ItGidnode} alt="Certificate oop"/>
                            </div>
                            <div className="card-action">
                                <a href="https://itgid.info/">itgid.info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}