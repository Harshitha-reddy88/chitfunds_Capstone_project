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
                            <h4>Auction Chiti</h4>
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
                <div></div>
                <div>
                    <img/>
                </div>
            </div>

            <div>
                <h2 className='aboutChit'>chit funds provide individuals with a unique financial tool to save, <br/>
                    invest, borrow, and achieve their financial goals.</h2>
            </div>

            <div>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/selective-focus-auctioneer-holding-gavel-microphone-looking-buyers-auction-175030056.jpg"  alt="error"/>
                    <h5>Auction chiti, also known as auction-based chit funds, is a<br/>
                         variant of traditional chit funds that involves the process of <br/>
                         conducting auctions to determine the recipient of the prize amount. <br/>
                         These chit funds add an element of excitement and competition to the<br/> 
                         chit fund experience, providing participantswith an opportunity to <br/>
                         potentially receive a larger payout.</h5>
                </div>

                <div>
                    <img src="https://blog.ipleaders.in/wp-content/uploads/2011/07/How-can-a-Chit-Fund-help-you-to-raise-capital-for-your-business.png" alt="error"/>
                    <h5>Double chiti, also known as a double-scheme chit fund, is a unique <br/>
                        variant of traditional chit funds that offers participants the opportunity<br/>
                        to receive a larger payout than their regular contributions.This type of <br/>
                        chit fund is structured in a way that allows participants to bid for a <br/>
                        higherprize amount, increasing the potential returns on their investment.</h5>
                </div>

                <div>
                    <img src="" alt="error"/>
                    <h5></h5>
                </div>
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

                    <h4 className='peopleText'> 
                         Witnessing the joy and satisfaction that<br/>
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