import React from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
     const navigate = useNavigate(); 
    
      const handleSignupClick = () => {
        navigate("/signup"); 
      };

    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                {/* <button onClick={handleSignupClick} className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button> */}
                <button onClick={handleSignupClick} className="btn btn-primary btn-lg mt-3 w-90 w-md-50">Sign up for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;