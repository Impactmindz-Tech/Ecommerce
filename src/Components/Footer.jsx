import React from 'react'
import images from '../constants/images'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {

    const showAlert = () => {
        toast('Coming Soon', {
            icon: '👏',
          });
    }

    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='footer-layout'>
                        <div>
                            <Link to='/'><img src={images.footerLogo} alt="" /></Link>
                            <nav>
                                <ul className='footer_links'>
                                    <li>Disclaimer</li>
                                    <li>Privacy Policy</li>
                                    <li>Faq</li>
                                    <li>Terms & Conditions</li>
                                    <li>Feedback</li>
                                </ul>
                            </nav>
                        </div>
                        <div className='brand_download'>
                            <p> DOWNLOAD APP</p>
                            <div>
                                <img onClick={showAlert} src="https://pizzaonline.dominos.co.in/static/assets/play_store.png" alt="" />
                                <img onClick={showAlert} style={{ marginLeft: "2rem" }} src="https://pizzaonline.dominos.co.in/static/assets/app_store.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='copy-right_text'>
                        All Rights Reserved. Copyright © Pizza Bite.
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default Footer