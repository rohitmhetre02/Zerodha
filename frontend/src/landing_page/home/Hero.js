import React from 'react';

function Hero() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">
                    <img src="media/images/homeHero.png" alt="Hero Image" className="img-fluid mb-4" />
                    <h1 className="mt-4 fw-bold">Invest in everything</h1>
                    <p className="fs-5 text-muted">
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button className="btn btn-primary btn-lg mt-3 w-90 w-md-50">Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
