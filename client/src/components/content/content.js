import React, { Component } from 'react';

export default class content extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <section id="about" className="about mt-5 mb-5 py-3 wow fadeIn" data-wow-delay="0.2s">
                        <div className="row pt-2 mt-5">
                            <div className="col-lg-5 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
                                <img src="https://mdbootstrap.com/img/Photos/Others/images/66.jpg" className="img-fluid z-depth-1 rounded" alt="My photo" />
                            </div>
                            <div className="col-lg-6 ml-auto col-md-12 wow fadeIn" data-wow-delay="0.4s">
                                <h3 className="mb-5 dark-grey-text title font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                                    <strong>Build your brand with us</strong>
                                </h3>
                                <p align="justify" className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi
                                  soluta ratione quisquam, dicta
                                  ab cupiditate iure eaque? Repellendus voluptatum, magni impedit delectus, beatae maxime temporibus
          maiores quibusdam.</p>
                                <p align="justify" className="grey-text">Rem magnam ad perferendis iusto sint tempora ea voluptatibus iure,
                                  animi excepturi modi aut possimus
                                  in hic molestias repellendus illo ullam odit quia velit. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.</p>
                                <p align="justify" className="grey-text mb-5">Incidunt eligendi mollitia labore ipsum ex fugit explicabo saepe
                                  error neque beatae in, expedita
          eveniet quae aliquam assumenda voluptatibus!</p>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section id="features" className="mb-5 pb-4">
                        <h3 className="text-center title my-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                            <strong>Awesome features</strong>
                        </h3>
                        <p className="text-center w-responsive mx-auto my-5 grey-text wow fadeIn" data-wow-delay="0.2s">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum
                            dolores reiciendis
      ad voluptas, animi obcaecati adipisci sapiente mollitia.</p>
                        <div className="row features-small wow fadeIn" data-wow-delay="0.4s">
                            <div className="col-lg-4 col-md-12">
                                <div className="row mb-3">
                                    <div className="col-2">
                                        <i className="fas fa-edit orange-text fa-2x" />
                                    </div>
                                    <div className="col-10 mb-2">
                                        <h5 className="font-weight-bold title">Modern design</h5>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                          nam, aperiam
                                          minima.
            </p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-2">
                                        <i className="fas fa-cogs orange-text fa-2x" />
                                    </div>
                                    <div className="col-10 mb-2">
                                        <h5 className="font-weight-bold title">Easy customize</h5>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                          nam, aperiam
              minima assumenda.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-tablet-alt orange-text fa-2x" />
                                    </div>
                                    <div className="col-10 mb-2">
                                        <h5 className="font-weight-bold title">Responsive layouts</h5>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
              nam, aperiam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-1 text-center text-md-left">
                                <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="z-depth-0 img-fluid" />
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="row mb-3">
                                    <div className="col-2">
                                        <i className="fas fa-chart-line orange-text fa-2x" />
                                    </div>
                                    <div className="col-10 mb-2">
                                        <h5 className="font-weight-bold title">Optymized for SEO</h5>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
              nam, aperiam.</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-2">
                                        <i className="fas fa-users orange-text fa-2x" />
                                    </div>
                                    <div className="col-10 mb-2">
                                        <h5 className="font-weight-bold title">Technical support</h5>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                          nam, aperiam
              minima assumenda.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <i className="far fa-gem orange-text fa-2x" />
                                    </div>
                                    <div className="col-10 mb-2">
                                        <h5 className="font-weight-bold title">High quality</h5>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                          nam, aperiam
                                          minima.
            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
