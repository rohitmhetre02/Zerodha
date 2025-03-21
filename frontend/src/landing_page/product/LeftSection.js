import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googleplay,
    appStore,
}) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 col-12 text-center'>
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
                <div className='col-md-6 col-12 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} className="btn btn-primary">Try Demo</a>
                        <a href={learnMore} className="btn btn-secondary" style={{ marginLeft: "20px" }}>Learn More</a>
                        <div className='mt-3'>
                            <a href={googleplay}>
                                <img src='media/images/googlePlayBadge.svg' alt="Google Play" className="img-fluid" />
                            </a>
                            <a href={appStore}>
                                <img src='media/images/appstoreBadge.svg' alt="App Store" className="img-fluid" style={{ marginLeft: "20px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;