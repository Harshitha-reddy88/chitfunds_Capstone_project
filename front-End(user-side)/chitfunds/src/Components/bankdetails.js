import React from 'react';
import './bankdetails.css';
function BankDetails(){
    return(
        <div>

            <h1>Bank Details</h1>

            <div className='detailsDiv'>

                <div className='firstDiv'>
                    <div className='margintop'>
                       <input  className="inputTag" type="text" placeholder="fullname"/>
                    </div>

                    <div className='margintop'>
                       <input className="inputTag" type="text" placeholder="address"/>
                    </div>
                    <div className='margintop'>
                       <input className="inputTag" type="text" placeholder="contact information"/>
                    </div>
                </div>

                <div className='secondDiv'>
                    <div className='margintop'>
                        <input className="inputTag" type="text" placeholder="Account number"/>
                    </div>

                    <div className='margintop'>
                        <input className="inputTag" type="text" placeholder="account type"/>
                    </div>

                    <div className='margintop'>
                        <input className="inputTag" type="text" placeholder="IFSC number"/>
                    </div>
                </div>

            </div>
           
        </div>
    )
}
export default BankDetails ;