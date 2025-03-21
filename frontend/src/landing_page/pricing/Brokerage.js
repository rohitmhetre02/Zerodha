import React from 'react';

function Brokerage() {
    return ( 
        <div className='container mb-5'>
            <div className='row text-center border-top pt-5 mt-5'>
                <div className='col-md-8 col-12 p-4'>
                    <a href='#' style={{ textDecoration: "none" }}>
                        <h3 className='fs-5'>Brokerage Calculator</h3>
                    </a>
                    <ul
                        style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
                        className="text-muted"
                    >
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-md-4 col-12 p-4'>
                    <a href='#' style={{ textDecoration: "none" }}>
                        <h3 className='fs-5'>List of Charges</h3>
                    </a>
                    {/* You can add more content here related to the list of charges */}
                </div>
            </div>
        </div>
    );
}

export default Brokerage;