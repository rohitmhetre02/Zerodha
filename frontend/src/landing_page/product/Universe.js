import React from 'react';
import { useNavigate } from "react-router-dom";

function Universe() {
    const navigate = useNavigate(); 

    const handleSignupClick = () => {
        navigate("/signup"); 
    };

    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                {/* Partner Platforms */}
                <div className='col-md-4 col-12 p-3 mt-5'>
                    <img style={{ width: "60%", height: "auto" }} src="media/images/zerodhafundhouse.png" alt="Zerodha Fund House" />
                    <div className='mt-3'>
                <p className='text-small text-muted'>Our asset management venture focused on creating simple and transparent index funds to assist you in achieving your financial goals.</p>

                    </div>
                </div>
                <div className='col-md-4 col-12 p-3 mt-5'>
                    <img style={{ width: "60%", height: "auto" }} src="media/images/sensibullLogo.svg" alt="Sensibull" />
                    <div className='mt-3'>
                <p className='text-small text-muted'>A comprehensive options trading platform that enables you to develop strategies, analyze positions, and review critical data points such as open interest and FII/DII.</p>

                    </div>
                </div>
                <div className='col-md-4 col-12 p-3 mt-5'>
                    <img style={{ width: "60%", height: "auto" }} src="media/images/tijori.svg" alt="Tijori" />
                    <div className='mt-3'>
                <p className='text-small text-muted'>An investment research platform providing in-depth insights into stocks, sectors, supply chains, and more.</p>

                    </div>
                </div>
                <div className='col-md-4 col-12 p-3 mt-5'>
                    <img style={{ width: "60%", height: "auto" }} src="media/images/streak-logo.png" alt="Streak" />
                    <div className='mt-3'>
                <p className='text-small text-muted'>A systematic trading platform that allows you to design and backtest trading strategies without any coding required.</p>

                    </div>
                </div>
                <div className='col-md-4 col-12 p-3 mt-5'>
                    <img style={{ width: "60%", height: "auto" }} src="media/images/smallcaseLogo.png" alt="Smallcase" />
                    <div className='mt-3'>
                <p className='text-small text-muted'>A thematic investing platform that facilitates investment in diversified baskets of stocks and ETFs.</p>

                    </div>
                </div>
                <div className='col-md-4 col-12 p-3 mt-5'>
                    <img style={{ width: "60%", height: "auto" }} src="media/images/dittoLogo.png" alt="Ditto" />
                    <div className='mt-3'>
                <p className='text-small text-muted'>Get personalized advice on life and health insurance without spam or mis-selling.</p>

                    </div>
                </div>

                {/* Sign Up Button */}
                <div className='col-12 text-center mt-5'>
                    {/* <button onClick={handleSignupClick} className='p-2 btn btn-primary fs-5' style={{ width: "20%" }}>Sign up for free</button> */}
                    <button onClick={handleSignupClick} className="btn btn-primary btn-lg mt-3 w-90 w-md-50">Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
