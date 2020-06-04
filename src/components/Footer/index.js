import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone, faBarcode, faEnvelope, faShoppingBag, faShoppingCart, faShoppingBasket, faMapMarkerAlt,
  faTint, faFilter, faSmile, faCog, faWrench, faPhoneSquare, faAngleDoubleLeft, faChevronUp
} from '@fortawesome/free-solid-svg-icons'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer class="main-footer">
                <div class="auto-container">
                    {/* <!--Widgets Section--> */}
                    <div class="widgets-section">
                        <div class="row clearfix">
                            {/* <!--Footer Column--> */}
                            <div class="col-sm-4 col-12">
                                <div class="footer-widget about-widget">
                                    <div class="widget-content">
                                        <div className='row'>
                                            <div className='col-4'>
                                                <img className='img-fluid' src={require('../../images/verifyLogo/union.png')} alt='some txt' />
                                            </div>
                                            <div className='col-4'>
                                                <img className='img-fluid' src={require('../../images/verifyLogo/enamad.png')} alt='some txt' />
                                            </div>
                                            <div className='col-4'>
                                                <img className='img-fluid' src={require('../../images/verifyLogo/rasaneh.png')} alt='some txt' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <!--Footer Column--> */}
                            <div class="col-sm-4 col-6">
                                <div class="footcolumn footer-widget services-widget">
                                    <h2 class="widget-title" style={{ textAlign: 'right', fontFamily: 'IRANSans', marginBottom: '40px' }}>خدمات ما</h2>
                                    <div class="widget-content">
                                        <ul class="services-list" style={{ direction: 'rtl', textAlign: 'right' }}>
                                            <li><FontAwesomeIcon icon={faAngleDoubleLeft} size="md" color={'#FFF'} /><a href="#">تعویض روغن</a></li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleLeft} size="md" color={'#FFF'} /><a href="#">تعویض لنت ترمز</a></li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleLeft} size="md" color={'#FFF'} /><a href="#">تعویض فیلتر</a></li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleLeft} size="md" color={'#FFF'} /><a href="#">فلاشینگ موتور</a></li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleLeft} size="md" color={'#FFF'} /><a href="#">عیب یابی</a></li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleLeft} size="md" color={'#FFF'} /><a href="#">سرویس خودرو</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            {/* <!--Footer Column--> */}
                            <div class="col-sm-4 col-6">
                                <div class="footcolumn footer-widget services-widget">
                                    <h2 class="widget-title" style={{ textAlign: 'right', fontFamily: 'IRANSans', marginBottom: '40px' }}>تماس با ما</h2>
                                    <ul style={{ listStyle: 'none', textAlign: 'right', fontSize: '1rem', direction: 'rtl' }}>
                                        <li>
                                            <span> <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> </span>
                                            <span style={{ paddingRight: '1rem' }}>آدرس: مشهد، بهارستان 18</span>
                                        </li>
                                        <li>
                                            <span> <FontAwesomeIcon icon={faPhone} size="sm" /> </span>
                                            <span style={{ paddingRight: '1rem' }}>تلفن: 37501-051</span>
                                        </li>
                                        <li>
                                            <span> <FontAwesomeIcon icon={faEnvelope} size="sm" /> </span>
                                            <span style={{ paddingRight: '1rem' }}>ایمیل: info@tabarok.ir</span>
                                        </li>
                                        <li>
                                            <span> <FontAwesomeIcon icon={faBarcode} size="sm" /> </span>
                                            <span style={{ paddingRight: '1rem' }}>کدپستی: 91677</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!--Footer Column--> */}
                            {/* <div class="footer-column col-md-3 col-sm-6 col-xs-12">
                  <!--Footer Column-->
                  <div class="footer-widget news-widget">
                    <h2 class="widget-title">Latest News</h2>
                    <!--Footer Column--> 
                    <div class="widget-content">
                      <div class="post">
                        <h4><a href="#">Get Usefull Car Maintanence Tips From Our Expets</a></h4>
                        <span class="date"><i class="far fa-calendar-check"></i>Aug 21, 2015</span>
                      </div>

                      <div class="post">
                        <h4><a href="#">Get Usefull Car Maintanence Tips From Our Expets</a></h4>
                        <span class="date"><i class="far fa-calendar-check"></i>Aug 21, 2015</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '2px solid #bbb', width: '80%', margin: '0 auto' }}></div>
                <p style={{ textAlign: 'center', fontSize: '.8rem', margin: 0 }}>&copy;Copyright 2020 - Tabarok Industrial Group Co.</p>
            </footer>
        );
    }
}

export default Footer;