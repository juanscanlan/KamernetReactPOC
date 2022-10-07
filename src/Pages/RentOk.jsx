import { useEffect } from 'react'

import rentOkImg from '../Images/rentok/RentOKlogo.png'

import translations from './words.json'

//import './RentOk.css'

import { NavBar } from '../Components/NavBar/NavBar'

let url2 = 'http://localhost:44324/api/user/Login'
let url = 'http://localhost:44324/Login'

const RentOk = () => {

    useEffect(() => {
      postLogin(url)

    }, [])
    

    const getLogin = (url) => {
        // fetch("http://localhost/api/v1/login")
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })

        fetch(url).then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Something went wrong');
          })
          .then((resJson) => {
            // Do something with the response
            console.log(resJson);
          })
          .catch((error) => {
            console.log(error)
          });
    }

    const postLogin = (url) => {
        fetch(url,{
            method:'POST',
            
        })
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
        },(error)=>{
            console.log('Failed');
        })
    }

    const RentOkJSX = ((
        <div className="container" id="buy-now-container">
        <div className="row margin-bottom-0">
            <div className="col s12 m12 l8 offset-l2 position-relative">
                <section className="rent-ok">
                    <div className="row">
                        <div className="flex align-center-horizontal rentok-logo">
                            <img src={rentOkImg} alt="RentOk Logo" />
                        </div>
                        {/* Summary */}
                        <div className="col s12">
                            <div className="rent-ok-summary-wrapper">
                                <div className="rent-ok-summary">
                                    <div className="col s12 l6">
                                        {translations.LBL_ROK_SUMMARY}
                                    </div>                               
                                    <div className="flex align-center-horizontal rentok-video">
                                        <div style={{display:'none'}} id="video1">
                                            <video className="lg-video-object lg-html5" controls="" preload="none">
                                                <source src="https://vimeo.com/356862969" type="video/mp4"/>
                                                Your browser does not support HTML5 video.
                                            </video>
                                        </div>
    
                                        <ul id="lightgallery">
                                            <li className="video" data-src="https://vimeo.com/356862969">
                                                <a href="">
                                                    <div className="rentok-video-poster">
                                                        <img src=""/>
                                                    </div>
                                                </a>
                                            </li>
    
                                        </ul>
    
                                    </div>
    
    
                                </div>
                            </div>
                        </div>
    
                        {/* I am a */}
                        <div className="flex align-center-horizontal">
                            <div className="user-choice">{translations.LBL_ROK_USER_CHOICE}</div>
                        </div>
    
                        {/* Landlord / Tenant */}
                        <div className="selection-buttons-mobile hide-on-large-only">
                            <div className="flex align-center-horizontal">
                                <a id="rentOkLandlordBtnMobile" className="btn-medium primary">{translations.LBL_ROK_BTN_LANDLORD}</a>
                                <a id="rentOkTenantBtnMobile" className="btn-medium color-background-secondary-light-3">{translations.LBL_ROK_BTN_TENANT}</a>
                            </div>
                        </div>
    
                        <div>
                            <div>Be trustworthy</div>
                            <div>Landlords or roommates can verify their bank account.</div>
                        </div>
    
                        {/* Left container */}
                        <div className="col s12 l5">
                            <div className="selection-buttons-desktop"><a id="rentOkLandlordBtnDesktop" className="btn z-depth-0 hide-on-med-and-down active" href='google.com'>{translations.LBL_ROK_BTN_LANDLORD}</a></div>
                            <div id="left-container"></div>
                        </div>
    
                        {/* Middle container */}
                        <div className="col s2 hide-on-med-and-down">
                            <div className="rent-ok-numbers">
                                <div className="number-wrapper">
                                    <div className="number-horizontal-connector"></div>
                                    <div className="number">1</div>
                                </div>
                                <div className="number-vertical-connector"></div>
                                <div className="number-wrapper">
                                    <div className="number-horizontal-connector"></div>
                                    <div className="number">2</div>
                                </div>
                                <div className="number-vertical-connector"></div>
                                <div className="number-wrapper">
                                    <div className="number-horizontal-connector"></div>
                                    <div className="number">3</div>
                                </div>
                            </div>
                        </div>
    
                        {/* Right container */}
                        <div className="col s12 l5 hide-on-med-and-down">
                            <div className="selection-buttons-desktop"><a id="rentOkTenantBtnDesktop" className="btn z-depth-0 hide-on-med-and-down" href='google.com'>{translations.LBL_ROK_BTN_TENANT}</a></div>
                            <div id="right-container"></div>
                        </div>
    
                        {/* Did not recieve key? */}
                        <div className="col s12 center">
                            <div className="no-key-received">
                                <div className="no-key-title">{translations.LBL_ROK_NO_KEY_TITLE}</div>
                                <div className="no-key-content">{translations.LBL_ROK_NO_KEY_CONTENT}</div>
                            </div>
                        </div>
    
                        {/* FAQ */}
                        <div className="col s12 center">
                            <ul>
                                <li>
                                    <div className="content bottom-bar">
                                        <h2>{translations.LBL_QUESTIONS_TITLE_BUY_NOW}</h2>
                                    </div>
                                    <ul className="collapsible z-depth-0 frequently-question" data-collapsible="accordion">
                                        <li>
                                            <div className="collapsible-header">{translations.LBL_QUESTION_1_BUY_NOW}</div>
                                            <div className="collapsible-body"><div className="header">{translations.LBL_ANSWER_1_BUY_NOW}</div></div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">{translations.LBL_QUESTION_2_BUY_NOW}</div>
                                            <div className="collapsible-body"><div className="header">{translations.LBL_ANSWER_2_BUY_NOW}</div></div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">{translations.LBL_QUESTION_3_BUY_NOW}</div>
                                            <div className="collapsible-body">
    
                                                <div className="subgroup">
                                                    <div className="subheader">{translations.LBL_ANSWER_3_BUY_NOW_SUBHEADER_TENANT}</div>
                                                    <ul>
                                                        <li>{translations.LBL_ANSWER_3_BUY_NOW_TENANT_B1}</li>
                                                        <li>{translations.LBL_ANSWER_3_BUY_NOW_TENANT_B2}</li>
                                                        <li>{translations.LBL_ANSWER_3_BUY_NOW_TENANT_B3}</li>
                                                    </ul>
                                                </div>
                                                <div className="subgroup">
                                                    <div className="subheader">{translations.LBL_ANSWER_3_BUY_NOW_SUBHEADER_LANDLORD}</div>
                                                    <ul>
                                                        <li>{translations.LBL_ANSWER_3_BUY_NOW_LANDLORD_B1}</li>
                                                        <li>{translations.LBL_ANSWER_3_BUY_NOW_LANDLORD_B2}</li>
                                                        <li>{translations.LBL_ANSWER_3_BUY_NOW_LANDLORD_B3}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">{translations.LBL_QUESTION_4_BUY_NOW}</div>
                                            <div className="collapsible-body">
    
                                                <div className="subgroup">
                                                    <div className="subheader">{translations.LBL_ANSWER_4_BUY_NOW_SUBHEADER_TENANT}</div>
                                                    <ul>
                                                        <li>{translations.LBL_ANSWER_4_BUY_NOW_TENANT_B1}</li>
                                                        <li>{translations.LBL_ANSWER_4_BUY_NOW_TENANT_B2}</li>
                                                        <li>{translations.LBL_ANSWER_4_BUY_NOW_TENANT_B3}</li>
                                                    </ul>
                                                </div>
    
                                                <div className="subgroup">
                                                    <div className="subheader">{translations.LBL_ANSWER_4_BUY_NOW_SUBHEADER_LANDLORD}</div>
                                                    <div>{translations.LBL_ANSWER_4_BUY_NOW_SUBHEADER_LANDLORD_ANSWER}</div>
                                                    <ul>
                                                        <li>{translations.LBL_ANSWER_4_BUY_NOW_LANDLORD_B1}</li>
                                                        <li>{translations.LBL_ANSWER_4_BUY_NOW_LANDLORD_B2}</li>
                                                        <li>{translations.LBL_ANSWER_4_BUY_NOW_LANDLORD_B3}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
    
                                        <li>
                                            <div className="collapsible-header">{translations.LBL_QUESTION_5_BUY_NOW}</div>
                                            <div className="collapsible-body">
    
                                                <div className="subgroup">
                                                    <div className="subheader">{translations.LBL_ANSWER_5_BUY_NOW_SUBHEADER_TENANT}</div>
                                                    <ul>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_TENANT_B1}</li>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_TENANT_B2}</li>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_TENANT_B3}</li>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_TENANT_B4}</li>
                                                    </ul>
                                                </div>
    
                                                <div className="subgroup">
                                                    <div className="subheader">{translations.LBL_ANSWER_5_BUY_NOW_SUBHEADER_LANDLORD}</div>
                                                    <div>{translations.LBL_ANSWER_5_BUY_NOW_SUBHEADER_LANDLORD_ANSWER}</div>
                                                    <ul>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_LANDLORD_B1}</li>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_LANDLORD_B2}</li>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_LANDLORD_B3}</li>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_LANDLORD_B4}</li>
                                                    </ul>
                                                </div>
    
                                                <div className="subgroup">
                                                    <div>{translations.LBL_ANSWER_5_BUY_NOW_SUBHEADER_EXTRA_ANSWER}</div>
                                                    <ul>
                                                        <li>{translations.LBL_ANSWER_5_BUY_NOW_EXTRA_B1}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
    
        </div>
    </div>
      ));

  return (
    <>
    <NavBar/>
    {RentOkJSX}
    </>
    
    )
}

export default RentOk