import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                {/* Left Column */}
                <div className='col-md-6 col-12'>
                    <img style={{ width: "70%" }} src='media/images/education.svg' alt='Education' className='img-fluid' />
                </div>

                {/* Right Column */}
                <div className='col-md-6 col-12'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{ textDecoration: "none" }}>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5'>TradingQ&A, a platform for traders to ask questions and get answers from experts.</p>
                    <a href='' style={{ textDecoration: "none" }}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;