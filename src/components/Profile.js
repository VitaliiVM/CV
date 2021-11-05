import React, {Component} from "react";
import Myimg from "../img/photo_2021-11-05_01-51-10.jpg";
import {HashLink as Link} from "react-router-hash-link";

export default class Profile extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={Myimg} alt="My imageCv"/>
                        <Link to="/" className="btn-floating halfway-fab waves-effect waves-light light-green">
                            <i className="material-icons activator">more_vert</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator green-text text-darken-4">
                            Myrnyi Vitalii
                        </span>
                        <p>My goal: Full Stack Web Developer</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            Follow Me
                            <i className="material-icons right">close</i>
                        </span>
                        <p className="flex-container">
                            <a href="https://www.instagram.com/vitaliimyrnyi30/">
                                <i className="fab fa-instagram grey-text text-darken-4 social-style"></i>
                            </a>
                            <a href="https://t.me/vitalii_m_77">
                                <i className="fab fa-telegram grey-text text-darken-4 social-style"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/%D0%B2%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%BC%D0%B8%D1%80%D0%BD%D1%8B%D0%B9-831056177/">
                                <i className="fab fa-linkedin grey-text text-darken-4 social-style"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}