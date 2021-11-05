import React, {Component} from "react";
import Codecademy from "../../img/codecademy.png";
import "./index.css";

export default class Codecademycourse extends Component {
    render() {
        return (
            <div className="jsitgid-wrapper">
                <div className="flex-container-certif small">
                    <div className="col s9 m4">
                        <div className="card center">
                            <div className="card-image">
                                <img src={Codecademy} alt="Certificate oop"/>
                            </div>
                            <div className="card-action">
                                <a href="https://www.codecademy.com/">www.codecademy.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}