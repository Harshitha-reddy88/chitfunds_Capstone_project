import React from 'react';
import './homepage.css';
function HomePage(){
    return(
        <div>
            <div>
                <nav>


                    <div className='navBar'>
                        <div className='logodiv'>
                            <img  className="logo" src="../resorses/logo.avif" alt="error"/>
                        </div>
                        <div className='arazChiti chiti'>
                            <h4>Araz Chiti</h4>
                        </div>
                        <div className='doubleChiti chiti'>
                            <h4>Double chiti</h4>
                        </div>
                        <div className='agentChiti chiti'>
                            <h4>Agent chiti</h4>
                        </div>

                        <div className='searchdiv'>
                            <input className="search"type="text" placeholder="search"/>
                        </div>

                        <div className='signup'>
                            <h4>Signup</h4>
                        </div>
                    </div>

                </nav>



                <div className='image-animation'>
                    <marquee  direction="alternative" className="marquee">
                         <h3>Discover the power of collective savings - Chit Funds, where unity meets prosperity.</h3>
                    </marquee> 
                    <img src="http://ranmchitfunds.com/img/16.jpg" alt="error"/>
                </div>

            </div>
        </div>
    )
}
export default HomePage 