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
                </div>

            </div>
            <div className='bannerimg'>
               <img className="bannerImg" src="http://ranmchitfunds.com/img/16.jpg" alt="error"/>
            </div>

            <div>
                <h2 className='topText'>The power of collective investments to unlock 
                financial opportunities and empower <br/>individuals with our innovative CHIT FUNDS platform
                </h2>

                <div>
                    <button className='button'><span class="blink">Start</span></button>
                </div>

            </div>

            <div>
                <h2>process</h2>
            </div>

            <div className='bankDiv'>

                <div  className='handsDiv'>
                    <div>
                        <img className="hands"src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2021/06/team-4529717_1920-e1624019650825.jpg" alt="error"/>
                        <h4 className='handsText'> By pooling resources with a community of <br/>
                            like-minded individuals, you can benefit from <br/>
                            higher returns on your investments. Our chit <br/>
                            funds are designed to maximize growth potential<br/>
                             and help you build substantial wealth over time.
                        </h4>
                    </div>
                </div>

                <div>
                   <div class="verticalLine"></div>
                </div>

                <div className="Div">
                    <div>
                       <h4 className="bankText">To initiate your journey with ChitFund and <br/>
                            start reaping the benefits of collective <br/>
                            investments,we kindly request you to provide <br/>us with your bank details. 
                       </h4>
                        <button className='fillButton'>Bank Form</button>
                    </div>

                    <div>
                        <img  className="piggyBank" src="https://im.rediff.com/money/2009/sep/07chit.jpg" alt="error"/>
                    </div>
                </div>

                <div>
                   <div class="verticalLine"></div>
                </div>

                <div className='peopleDiv'>
                    <img className="peopleMoney"src="https://previews.123rf.com/images/dolgachov/dolgachov1901/dolgachov190101437/115494320-finance-wealth-and-people-concept-group-of-happy-friends-picking-money-falling-from-up-above-over.jpg" alt="error"/>

                    <h4 className='peopleText'> Witnessing the joy and satisfaction that<br/>
                         our members experience when it comes to <br/>
                         their finances.The thrill of winning the <br/>
                         joy of achieving your goals with ChitFund <br/>
                         by your side.
                    </h4>
                </div>

            </div>

            <div className='footer'>

            </div>

        </div>



    )
}
export default HomePage 