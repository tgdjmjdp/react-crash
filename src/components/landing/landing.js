import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './landing.css';

export default class landing extends Component {
    render() {
        return (
            <div >
                <section className="intro-2" style={{ backgroundImage: 'https://mdbootstrap.com/img/Photos/Others/images/62.jpg' }}>
                    <div className="mask">
                        <div className="container h-100 d-flex justify-content-center align-items-center">
                            <div className="row flex-center pt-5 mt-3">
                                <div className="col-md-12 col-lg-6 text-center text-md-left margins">
                                    <div className="dark-grey-text">
                                        <h1 className="display-4 title mt-md-5 mt-lg-0 font-weight-bold wow fadeIn animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }} >
                                            <strong>Creative agency</strong>
                                        </h1>
                                        <hr className="hr-light wow fadeIn animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}></hr>
                                        <h6 className="grey-text wow fadeIn animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>
                                            Lorem ipsum dolor sit amet, consectetur
                                          adipisicing elit. Rem repellendus quasi fuga nesciunt
                                          dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                                          iste.
                                        </h6>
                                        <br></br>
                                        <a className="btn btn-white btn-rounded blue-text font-weight-bold ml-lg-0 wow fadeIn waves-effect waves-light animated"
                                            data-wow-delay="0.3s"
                                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>
                                            Portfolio
                                            </a>
                                        <a className="btn pink-gradient white-text btn-rounded font-weight-bold wow fadeIn waves-effect waves-light animated"
                                            data-wow-delay="0.3s"
                                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>
                                            Learn more
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-6 wow fadeIn animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>
                                    <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
