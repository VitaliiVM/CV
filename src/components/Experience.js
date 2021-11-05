import React, {Component} from "react";

export default class Experience extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>Experience</strong></h6>
                        <div className="row">
                            <div className=" col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    September <strong>2021</strong> -
                                    November <strong>2021</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            Java Developer
                                        </strong>
                                        <p>
                                            Had two months of internship
                                            experience in position java developer
                                        </p>
                                    </h6>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}