import React, {Component} from "react";

export default class About extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">
                            <strong>About Me</strong>
                        </h6>
                        <p className="grey-text">
                            I love going in for sports.
                            Spend a lot of time studying.
                            Always try to be better than yesterday.
                            I like to read books about programming.
                            And of course I love coding...

                        </p>
                    </div>
                    <div className="card-action">
                        <h6>Personal Info</h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Address:</strong> Ukraine Kremenchuk</p>
                                <p><strong>Email:</strong> v.mirniy@icloud.com</p>
                                <p><strong>Phone:</strong> +380970929151</p>
                            </div>
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Native Language:</strong>Ukrainian</p>
                                <p><strong>Second Language:</strong>Russian</p>
                                <p><strong>Third Language:</strong>English</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}