import React from 'react';

function RightSection({ 
    imageURL, 
    productName, 
    productDescription, 
    learnMore 
}) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 col-12 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} className="btn btn-primary">Learn More</a>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;