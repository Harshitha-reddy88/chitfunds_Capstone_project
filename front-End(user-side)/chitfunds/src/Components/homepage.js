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

           <div className='prosses'>
              <h2>Auction(Prosses)</h2>
           </div>

            <div className="auctionDiv">
                <div>
                    <img  className="auctionImg" src="https://uploads-ssl.webflow.com/61339d90305bd88987604b1e/6167f1997f00bac1df4f6691_what-do-you-need-to-do-before-an-auction.jpeg" alt="error" />
                    <h3>Pre-Auction</h3>
                </div>
                <div>
                    <img className="arrowMark"src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACbCAMAAADC6XmEAAAAeFBMVEX///8AAABGRkYwMDAyMjK9vb309PTj4+NZWVn39/fr6+u2trZsbGzBwcHg4OAEBAQnJydycnITExPNzc0dHR2RkZGBgYGcnJympqYiIiJ4eHhCQkKsrKxKSkpfX1/Jyck7OzvX19d+fn6fn59UVFQQEBCKioplZWWw+oRaAAAEnklEQVR4nO2djVLqMBCFWVsFFUURf7kqKOr7v+GVihhKk2yazGyWnE/HkUHxeGapXXvYHQwOhuH984Souj6WFqKYsxf6ZXIuLUYrF2QyOpPWo5JdE79BOYYzbJtI9HIiLUodz/suEuGvTBg3XSZ+l+OptDBVvHW7SHQhrUwTc5uLNMbRkc2V1UX6QDlycbhIdI2jI4+Fy0WavErr08GX08XvcpQWqIIHj4s0vZGWqADL+aLJm7RGBfhdpBnK0YfvwNhwJ60yd845LtLVUlpn3pyxXCT6lBaaN+4zxj9ml9JKc+ae6SLRrbTUjLlku0g1ytEK30WUo527EBsXKMduXkNcJLqX1pspYS7SYigtOEtY7QvK0QOvfTE5QjnuwW1fTB6kRefHUQ8bn5FEacFvX1COdpa9XEQ5tnjsZyP9kxaeFdaEhI8VyvGPwPbFBDm9Laf9XURO748Xv1soRy/h7YvJCEmUhj7tiwliow3cqy82kNNb0699MUFOr3f7YjLG0XEwibeRkNPr3b6YFJ/Ti2hfDIqPjSZxkehJ+veQJap9MSg7pxfXvpiE5fTquqqqunn7ea+3N9YfNvc2nxpfVW9uVs397a+uNg9SG4/8e7Myb27vb6iNe82f/PtdVbWrz3jwzbfUVTIX6TGkHNP92IMjoBylpebMlB0blVaaN9xglLTOzKl55SgtM3tY5SgtMn84sVFpjRrwl6O0QhV4y1FaoBI8OT1peVqYO3N60ur08A4XU+AIRklLU4U1pyctTBdzSzlK69JGd05PWpU6OnN60qIU0lGO0pI0MtpLokgr0kk7pyetRymtnJ60HLUcw8UUfJ3AxQRMjuFiCrY5PWkhyrmAiyn4KUdpFeppcnrSIg6Ap1O4mIAVXIznFs/oaB6XOC5G84kznWhmS5wvRnOHDjAaI7MsLUUv5thlaS1ameyE56XVKKX1MjdpOTppv8ZNWo9G9td0SCtSSMdkBGlJ6vjqGosgLUob3SM6pFXpwja9SFqXKqyji6SFKWI/ngMXg3FNGJTWpgX3eEFpdUrwjLqUlqcC79hVaYEa8I8AllaYP7bXFcDFAFiT+qVFZs6ct8REWmbecFdGSOvMmYq9TUdaacYEbHY6OijsW82D4RfiwZFuzljJCxhHiTwsexloIhPLXkx7kcTDsocvDgbXKUwsfmF3Ag8/Ci/EJPO6C59Iu+Yz1sNp6dOR19SRJu4nRwpkGGkilhiseYjy8AuF2LCKMRHLXX44iSlEbHbZcNzfRCy92tK7cXEkR8pjikKMZ9nPwxUK0aRf44Ilqbv0aVywsLdFn8YFhdjmPbwQnfN6yyS4cXEN6y2V0MZlgULsILBx4SZHCmMc4iFnv0ORhJgYkBwpixu+h4uiL9g74TcuKEQ7M6aHMxSinUumiWUnR3zwGpdHFKKTIxRiPGcMD0uPMPlhRMWQHPFy6zURhejHl6Atfsc7C/e/uYtf8M7Eec49RnKEx5XDRCRHuNhf5YLkCJ87FGICLP8XG+GIGETnUxrJkUA6LkaPcME+mL2LV7hg34ddG93Db4CV4QqFmILL2/mEaDYW+KvyH3wtcdoOdabyAAAAAElFTkSuQmCC" alt="error" />
                </div>
                <div>
                    <img className="auctionImg" src="https://media.istockphoto.com/id/497347644/photo/hand-pressing-register-now.jpg?s=612x612&w=0&k=20&c=XzXNw7_71cx23yPATWsSnYwGytZW-KU3eTpy3WCFQgw=" alt="error" />
                    <h3>Registration</h3>
                </div>
                <div>
                   <img className="arrowMark" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACbCAMAAADC6XmEAAAAeFBMVEX///8AAABGRkYwMDAyMjK9vb309PTj4+NZWVn39/fr6+u2trZsbGzBwcHg4OAEBAQnJydycnITExPNzc0dHR2RkZGBgYGcnJympqYiIiJ4eHhCQkKsrKxKSkpfX1/Jyck7OzvX19d+fn6fn59UVFQQEBCKioplZWWw+oRaAAAEnklEQVR4nO2djVLqMBCFWVsFFUURf7kqKOr7v+GVihhKk2yazGyWnE/HkUHxeGapXXvYHQwOhuH984Souj6WFqKYsxf6ZXIuLUYrF2QyOpPWo5JdE79BOYYzbJtI9HIiLUodz/suEuGvTBg3XSZ+l+OptDBVvHW7SHQhrUwTc5uLNMbRkc2V1UX6QDlycbhIdI2jI4+Fy0WavErr08GX08XvcpQWqIIHj4s0vZGWqADL+aLJm7RGBfhdpBnK0YfvwNhwJ60yd845LtLVUlpn3pyxXCT6lBaaN+4zxj9ml9JKc+ae6SLRrbTUjLlku0g1ytEK30WUo527EBsXKMduXkNcJLqX1pspYS7SYigtOEtY7QvK0QOvfTE5QjnuwW1fTB6kRefHUQ8bn5FEacFvX1COdpa9XEQ5tnjsZyP9kxaeFdaEhI8VyvGPwPbFBDm9Laf9XURO748Xv1soRy/h7YvJCEmUhj7tiwliow3cqy82kNNb0699MUFOr3f7YjLG0XEwibeRkNPr3b6YFJ/Ti2hfDIqPjSZxkehJ+veQJap9MSg7pxfXvpiE5fTquqqqunn7ea+3N9YfNvc2nxpfVW9uVs397a+uNg9SG4/8e7Myb27vb6iNe82f/PtdVbWrz3jwzbfUVTIX6TGkHNP92IMjoBylpebMlB0blVaaN9xglLTOzKl55SgtM3tY5SgtMn84sVFpjRrwl6O0QhV4y1FaoBI8OT1peVqYO3N60ur08A4XU+AIRklLU4U1pyctTBdzSzlK69JGd05PWpU6OnN60qIU0lGO0pI0MtpLokgr0kk7pyetRymtnJ60HLUcw8UUfJ3AxQRMjuFiCrY5PWkhyrmAiyn4KUdpFeppcnrSIg6Ap1O4mIAVXIznFs/oaB6XOC5G84kznWhmS5wvRnOHDjAaI7MsLUUv5thlaS1ameyE56XVKKX1MjdpOTppv8ZNWo9G9td0SCtSSMdkBGlJ6vjqGosgLUob3SM6pFXpwja9SFqXKqyji6SFKWI/ngMXg3FNGJTWpgX3eEFpdUrwjLqUlqcC79hVaYEa8I8AllaYP7bXFcDFAFiT+qVFZs6ct8REWmbecFdGSOvMmYq9TUdaacYEbHY6OijsW82D4RfiwZFuzljJCxhHiTwsexloIhPLXkx7kcTDsocvDgbXKUwsfmF3Ag8/Ci/EJPO6C59Iu+Yz1sNp6dOR19SRJu4nRwpkGGkilhiseYjy8AuF2LCKMRHLXX44iSlEbHbZcNzfRCy92tK7cXEkR8pjikKMZ9nPwxUK0aRf44Ilqbv0aVywsLdFn8YFhdjmPbwQnfN6yyS4cXEN6y2V0MZlgULsILBx4SZHCmMc4iFnv0ORhJgYkBwpixu+h4uiL9g74TcuKEQ7M6aHMxSinUumiWUnR3zwGpdHFKKTIxRiPGcMD0uPMPlhRMWQHPFy6zURhejHl6Atfsc7C/e/uYtf8M7Eec49RnKEx5XDRCRHuNhf5YLkCJ87FGICLP8XG+GIGETnUxrJkUA6LkaPcME+mL2LV7hg34ddG93Db4CV4QqFmILL2/mEaDYW+KvyH3wtcdoOdabyAAAAAElFTkSuQmCC" alt="error" />
                </div>
                <div>
                    <img  className="auctionImg" src="https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_403,h_269/v1540507318/678957009SK010_SHD_George_S_hxkzdw.jpg" alt="error" />
                    <h3>Auction Opening</h3>
                </div>
                <div>
                   <img className="arrowMark" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACbCAMAAADC6XmEAAAAeFBMVEX///8AAABGRkYwMDAyMjK9vb309PTj4+NZWVn39/fr6+u2trZsbGzBwcHg4OAEBAQnJydycnITExPNzc0dHR2RkZGBgYGcnJympqYiIiJ4eHhCQkKsrKxKSkpfX1/Jyck7OzvX19d+fn6fn59UVFQQEBCKioplZWWw+oRaAAAEnklEQVR4nO2djVLqMBCFWVsFFUURf7kqKOr7v+GVihhKk2yazGyWnE/HkUHxeGapXXvYHQwOhuH984Souj6WFqKYsxf6ZXIuLUYrF2QyOpPWo5JdE79BOYYzbJtI9HIiLUodz/suEuGvTBg3XSZ+l+OptDBVvHW7SHQhrUwTc5uLNMbRkc2V1UX6QDlycbhIdI2jI4+Fy0WavErr08GX08XvcpQWqIIHj4s0vZGWqADL+aLJm7RGBfhdpBnK0YfvwNhwJ60yd845LtLVUlpn3pyxXCT6lBaaN+4zxj9ml9JKc+ae6SLRrbTUjLlku0g1ytEK30WUo527EBsXKMduXkNcJLqX1pspYS7SYigtOEtY7QvK0QOvfTE5QjnuwW1fTB6kRefHUQ8bn5FEacFvX1COdpa9XEQ5tnjsZyP9kxaeFdaEhI8VyvGPwPbFBDm9Laf9XURO748Xv1soRy/h7YvJCEmUhj7tiwliow3cqy82kNNb0699MUFOr3f7YjLG0XEwibeRkNPr3b6YFJ/Ti2hfDIqPjSZxkehJ+veQJap9MSg7pxfXvpiE5fTquqqqunn7ea+3N9YfNvc2nxpfVW9uVs397a+uNg9SG4/8e7Myb27vb6iNe82f/PtdVbWrz3jwzbfUVTIX6TGkHNP92IMjoBylpebMlB0blVaaN9xglLTOzKl55SgtM3tY5SgtMn84sVFpjRrwl6O0QhV4y1FaoBI8OT1peVqYO3N60ur08A4XU+AIRklLU4U1pyctTBdzSzlK69JGd05PWpU6OnN60qIU0lGO0pI0MtpLokgr0kk7pyetRymtnJ60HLUcw8UUfJ3AxQRMjuFiCrY5PWkhyrmAiyn4KUdpFeppcnrSIg6Ap1O4mIAVXIznFs/oaB6XOC5G84kznWhmS5wvRnOHDjAaI7MsLUUv5thlaS1ameyE56XVKKX1MjdpOTppv8ZNWo9G9td0SCtSSMdkBGlJ6vjqGosgLUob3SM6pFXpwja9SFqXKqyji6SFKWI/ngMXg3FNGJTWpgX3eEFpdUrwjLqUlqcC79hVaYEa8I8AllaYP7bXFcDFAFiT+qVFZs6ct8REWmbecFdGSOvMmYq9TUdaacYEbHY6OijsW82D4RfiwZFuzljJCxhHiTwsexloIhPLXkx7kcTDsocvDgbXKUwsfmF3Ag8/Ci/EJPO6C59Iu+Yz1sNp6dOR19SRJu4nRwpkGGkilhiseYjy8AuF2LCKMRHLXX44iSlEbHbZcNzfRCy92tK7cXEkR8pjikKMZ9nPwxUK0aRf44Ilqbv0aVywsLdFn8YFhdjmPbwQnfN6yyS4cXEN6y2V0MZlgULsILBx4SZHCmMc4iFnv0ORhJgYkBwpixu+h4uiL9g74TcuKEQ7M6aHMxSinUumiWUnR3zwGpdHFKKTIxRiPGcMD0uPMPlhRMWQHPFy6zURhejHl6Atfsc7C/e/uYtf8M7Eec49RnKEx5XDRCRHuNhf5YLkCJ87FGICLP8XG+GIGETnUxrJkUA6LkaPcME+mL2LV7hg34ddG93Db4CV4QqFmILL2/mEaDYW+KvyH3wtcdoOdabyAAAAAElFTkSuQmCC" alt="error" />
                </div>
                <div>
                    <img className="auctionImg" src="https://news.artnet.com/app/news-upload/2017/11/GettyImages-50947488-1024x687.jpg" alt="error" />
                    <h3>Bidding Process</h3>
                </div>
                <div>
                   <img className="arrowMark" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACbCAMAAADC6XmEAAAAeFBMVEX///8AAABGRkYwMDAyMjK9vb309PTj4+NZWVn39/fr6+u2trZsbGzBwcHg4OAEBAQnJydycnITExPNzc0dHR2RkZGBgYGcnJympqYiIiJ4eHhCQkKsrKxKSkpfX1/Jyck7OzvX19d+fn6fn59UVFQQEBCKioplZWWw+oRaAAAEnklEQVR4nO2djVLqMBCFWVsFFUURf7kqKOr7v+GVihhKk2yazGyWnE/HkUHxeGapXXvYHQwOhuH984Souj6WFqKYsxf6ZXIuLUYrF2QyOpPWo5JdE79BOYYzbJtI9HIiLUodz/suEuGvTBg3XSZ+l+OptDBVvHW7SHQhrUwTc5uLNMbRkc2V1UX6QDlycbhIdI2jI4+Fy0WavErr08GX08XvcpQWqIIHj4s0vZGWqADL+aLJm7RGBfhdpBnK0YfvwNhwJ60yd845LtLVUlpn3pyxXCT6lBaaN+4zxj9ml9JKc+ae6SLRrbTUjLlku0g1ytEK30WUo527EBsXKMduXkNcJLqX1pspYS7SYigtOEtY7QvK0QOvfTE5QjnuwW1fTB6kRefHUQ8bn5FEacFvX1COdpa9XEQ5tnjsZyP9kxaeFdaEhI8VyvGPwPbFBDm9Laf9XURO748Xv1soRy/h7YvJCEmUhj7tiwliow3cqy82kNNb0699MUFOr3f7YjLG0XEwibeRkNPr3b6YFJ/Ti2hfDIqPjSZxkehJ+veQJap9MSg7pxfXvpiE5fTquqqqunn7ea+3N9YfNvc2nxpfVW9uVs397a+uNg9SG4/8e7Myb27vb6iNe82f/PtdVbWrz3jwzbfUVTIX6TGkHNP92IMjoBylpebMlB0blVaaN9xglLTOzKl55SgtM3tY5SgtMn84sVFpjRrwl6O0QhV4y1FaoBI8OT1peVqYO3N60ur08A4XU+AIRklLU4U1pyctTBdzSzlK69JGd05PWpU6OnN60qIU0lGO0pI0MtpLokgr0kk7pyetRymtnJ60HLUcw8UUfJ3AxQRMjuFiCrY5PWkhyrmAiyn4KUdpFeppcnrSIg6Ap1O4mIAVXIznFs/oaB6XOC5G84kznWhmS5wvRnOHDjAaI7MsLUUv5thlaS1ameyE56XVKKX1MjdpOTppv8ZNWo9G9td0SCtSSMdkBGlJ6vjqGosgLUob3SM6pFXpwja9SFqXKqyji6SFKWI/ngMXg3FNGJTWpgX3eEFpdUrwjLqUlqcC79hVaYEa8I8AllaYP7bXFcDFAFiT+qVFZs6ct8REWmbecFdGSOvMmYq9TUdaacYEbHY6OijsW82D4RfiwZFuzljJCxhHiTwsexloIhPLXkx7kcTDsocvDgbXKUwsfmF3Ag8/Ci/EJPO6C59Iu+Yz1sNp6dOR19SRJu4nRwpkGGkilhiseYjy8AuF2LCKMRHLXX44iSlEbHbZcNzfRCy92tK7cXEkR8pjikKMZ9nPwxUK0aRf44Ilqbv0aVywsLdFn8YFhdjmPbwQnfN6yyS4cXEN6y2V0MZlgULsILBx4SZHCmMc4iFnv0ORhJgYkBwpixu+h4uiL9g74TcuKEQ7M6aHMxSinUumiWUnR3zwGpdHFKKTIxRiPGcMD0uPMPlhRMWQHPFy6zURhejHl6Atfsc7C/e/uYtf8M7Eec49RnKEx5XDRCRHuNhf5YLkCJ87FGICLP8XG+GIGETnUxrJkUA6LkaPcME+mL2LV7hg34ddG93Db4CV4QqFmILL2/mEaDYW+KvyH3wtcdoOdabyAAAAAElFTkSuQmCC" alt="error" />
                </div>
                <div>
                    <img className="auctionImg" src="https://www.homelight.com/blog/wp-content/uploads/2018/10/sellers-closing-statement.jpg" alt="error"/>
                    <h3>Settlement</h3>
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