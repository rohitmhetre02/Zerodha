import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row p-5'>
                {/* Left Column */}
                <div className='col-md-5 col-12'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking 
                        and price transparency in India. Flat fees 
                        and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>

                {/* Right Column */}
                <div className='col-md-7 col-12 mt-4'>
                    <div className='row text-center'>
                        <div className='col-4'>
                            <img style={{ height: "30%" }} src='media/images/pricing-eq.svg' alt='Free account opening' className='img-fluid' />
                            <p>Free account opening</p>
                        </div>
                        <div className='col-4'>
                            <img style={{ height: "30%" }} src='media/images/pricing-eq.svg' alt='Free equity delivery' className='img-fluid' />
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-4'>
                            <img style={{ height: "30%" }} src='media/images/other-trades.svg' alt='Intraday and F&O' className='img-fluid' />
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;