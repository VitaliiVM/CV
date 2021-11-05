import React, {Component} from "react";
import ItGidJs from "../img/itgidjs.jpg";
import ItGidoop from "../img/jsoopitgid.JPG";
import ItGidReact from "../img/reactItGid.JPG";
import ItGidNode from "../img/nodejs.jpg";
import Codecademy from "../img/codecademy.png";
import {HashLink as Link} from "react-router-hash-link";

export default class Education extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>
                                Education
                            </strong>
                        </h6>
                        <div className="row">

                            <Link to="/sertificatejs">
                                <div className="col s12 m4 l2">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={ItGidJs} alt="cart"/>
                                        </div>

                                    </div>
                                </div>
                            </Link>

                            <Link to="/sertificateoop">
                                <div className="col s12 m4 l2">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={ItGidoop} alt="cart"/>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/sertificatenodejs">
                                <div className="col s12 m4 l2">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={ItGidNode} alt="cart"/>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/sertificatecodecademy">
                                <div className="col s12 m4 l2">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={Codecademy} alt="cart"/>
                                        </div>

                                    </div>
                                </div>
                            </Link>

                            <Link to="/sertificateitgidreact">
                                <div className="col s12 m4 l2">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={ItGidReact} alt="cart"/>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}