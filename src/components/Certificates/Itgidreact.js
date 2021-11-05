import React, {Component} from "react";
import ItGidReact from "../../img/reactItGid.JPG";
import "./index.css";

export default class Itgidreact extends Component {
    render() {
        return (
            <div className="jsitgid-wrapper">
                <div className="flex-container-certif small">
                    <div className="col s9 m4">
                        <div className="card center">
                            <div className="card-image">
                                <img src={ItGidReact} alt="Certificate oop"/>
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