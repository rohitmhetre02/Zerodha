import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className="p-5 text-center" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href='' className="btn btn-link">Track Tickets</a>
            </div>

            <div className="row  p-5">
                <div className="col-md-6 col-12 p-4">
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input 
                        className='form-control mb-3' 
                        placeholder='E.g., how do I activate F&O? Why is my order getting rejected?' 
                    />
                    <div className="d-flex flex-column">
                        <a className="mb-2" style={{ fontSize: "1.3rem" }} href='#'>Track account opening</a>
                        <a className="mb-2" style={{ fontSize: "1.2rem" }} href='#'>Track segment activation</a>
                        <a className="mb-2" style={{ fontSize: "1.2rem" }} href='#'>Intraday margins</a>
                    </div>
                    <a style={{ fontSize: "1.2rem", lineHeight: "50px" }} href='#'>Kite user manual</a>
                </div>
                <div className="col-md-6 col-12 p-4">
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li style={{ lineHeight: "50px" }}><a href='#'>Rights Entitlements listing in January 2025</a></li>
                        <li><a href='#'>Surveillance measure on scrips - January 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;