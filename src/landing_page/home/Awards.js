import React from 'react';


function Awards () {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 p-5 '>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='mb-3'>Largest stock broker in India</h1>
                    <p1 className='mb-5 '> 2+ Million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in :</p1>
                
                    <div className='row' >
                        <div className='col-6'>
                            <ul>
                                <li>
                                <p> future and option</p>
                            </li>
                            <li>
                                <p> commodity derivatives</p>
                            </li>
                            <li>
                                <p> currency derivatives</p>
                            </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                <p> stockes & IOPs</p>
                            </li>
                            <li>
                                <p> direct mutual fund</p>
                            </li>
                            <li>
                                <p> Bonds and giv. securities</p>
                            </li>
                            </ul>
                        </div>

                    </div>
                    <img
                    src="media/images/pressLogos.png" style={{ width: "90%" }}/>                    
                
                </div>
            </div>
        </div>
     );
}

export default Awards ;