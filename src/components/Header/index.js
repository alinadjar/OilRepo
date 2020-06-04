import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingCart, faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons'

const $ = window.$;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {

        //Submenu Dropdown Toggle
        if ($('.main-header .navigation > li.dropdown ul').length) {
            $('.main-header .navigation > li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
            });

            //Megamenu Toggle
            $('.main-header .main-menu li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('.mega-menu').slideToggle(500);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }


        //Open Main Menu
        if ($('.main-header-bar .nav-toggler .toggler-btn').length) {
            $('.main-header-bar .nav-toggler .toggler-btn').on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('active');
                $('.main-nav-outer').toggleClass('now-visible');
            });
        }
    }



    render() {
        return (
            <>
                <header class="main-header header-style-three" style={{ position: 'fixed' }}>

                    {/* <!--Header Top--> */}
                    <div class="header-top">
                        <div class="auto-container">
                            <div class="inner-container clearfix">
                                <div class="top-left">
                                    <ul class="clearfix" style={{ marginBottom: 0 }}>
                                        <li>
                                            <p style={{ marginBottom: 0 }}>  051 - 37501  <FontAwesomeIcon icon={faPhoneSquare} size="lg" color={'#DDD'} /></p>
                                        </li>
                                        {/* <li><a href="appointment.html">Get a Free Auto Checkup Now <i class="fa fa-long-arrow-alt-right"></i></a></li> */}
                                    </ul>
                                </div>
                                <div class="top-right clearfix  d-none d-md-block">
                                    <p style={{ marginBottom: 0, fontFamily: 'inherit' }}>پشتیبانی شبانه روزی</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Header Top --> */}

                    {/* <!-- Header Lower --> */}
                    <nav class="navbar navbar-expand-md navbar-dark" style={{ position: 'relative', padding: '15px 0' }}>
                        <a class="navbar-brand" href="#">
                            <img src={require('../../images/logo-2.png')}
                                style={{ position: 'absolute', top: 0, left: 0 }} />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                            style={{ position: 'relative' }}>
                            <span class="navbar-toggler-icon"></span>
                            <a href="shop.html" title="" style={{ position: 'absolute', left: '-50px', top: '20%' }}>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" color={'#FFF'} />
                                <span className="badge badge-warning" style={{ position: 'absolute', top: '-10px', left: '18px', borderRadius: '50%' }}>74</span>
                            </a>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav" style={{ flexDirection: 'row', direction: 'rtl' }}>
                            <ul class="navbar-nav" style={{ textAlign: 'right', paddingRight: '20px' }}>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#" style={{ fontSize: '1.3rem' }}>خانه <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ fontSize: '1.3rem' }}>محصولات</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ fontSize: '1.3rem' }}>تماس با ما</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="shop.html" title="" style={{ position: 'relative' }}>
                                        <FontAwesomeIcon icon={faShoppingCart} size="lg" color={'#FFF'} />
                                        <span className="badge badge-warning" style={{ position: 'absolute', top: '-3px', right: '-5px', borderRadius: '50%' }}>4</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- End Header Lower --> */}

                    {/* <!--Sticky Header--> */}
                    {/* <div class="sticky-header">
  <div class="auto-container clearfix">
     <!--Logo--> 
    <div class="logo pull-left">
      <a href="index.html" class="img-responsive"><img src={require('./images/logo-small.png')} alt="" title="" /></a>
    </div>

    <!--Right Col-->
    <div class="right-col pull-right">
      <!-- Main Menu --> 
      <nav class="main-menu  navbar-expand-md">
        <div class="navbar-header" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"
            style={{ marginTop: '10px' }}>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
          <ul class="navigation clearfix">
            <li class="dropdown current"><a href="#">Home</a>
              <ul>
                <li><a href="index.html">Homepage One</a></li>
                <li><a href="index-2.html">Homepage Two</a></li>
                <li><a href="index-3.html">Homepage Three</a></li>
                <li><a href="index-4.html">Homepage Four</a></li>
                <li class="dropdown"><a href="#">Header Styles</a>
                  <ul>
                    <li><a href="index.html">Header Style One</a></li>
                    <li><a href="index-2.html">Header Style Two</a></li>
                    <li><a href="index-3.html">Header Style Three</a></li>
                    <li><a href="index-4.html">Header Style Four</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown"><a href="#">About</a>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="appointment.html">Appointment</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="price.html">Price</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
              </ul>
            </li>
            <li class="dropdown"><a href="#">Projects</a>
              <ul>
                <li><a href="project.html">Project</a></li>
                <li><a href="project-detail.html">Project Detail</a></li>
              </ul>
            </li>
            <li class="dropdown"><a href="#">Services</a>
              <ul>
                <li><a href="services.html">Services 01</a></li>
                <li><a href="services-2.html">Services 02</a></li>
                <li><a href="service-detail.html">Services Single</a></li>
              </ul>
            </li>
            <li class="dropdown has-mega-menu"><a href="#">Pages</a>
              <div class="mega-menu">
                <div class="mega-menu-bar row clearfix">
                  <div class="column col-md-3 col-sm-3 col-xs-12">
                    <h3>About Us</h3>
                    <ul>
                      <li><a href="team.html">Team</a></li>
                      <li><a href="team-single.html">Team Single</a></li>
                      <li><a href="testimonials.html">Testimonial</a></li>
                      <li><a href="faq.html">FAQ's</a></li>
                      <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                  </div>
                  <div class="column col-md-3 col-sm-3 col-xs-12">
                    <h3>Solutions</h3>
                    <ul>
                      <li><a href="service-detail.html">Solutions</a></li>
                      <li><a href="service-detail.html">Chemical Engineering</a></li>
                      <li><a href="service-detail.html">Energy & Power Engineering</a></li>
                      <li><a href="service-detail.html">Oil & Gas Engineering</a></li>
                      <li><a href="service-detail.html">Civil Engineering</a></li>
                    </ul>
                  </div>
                  <div class="column col-md-3 col-sm-3 col-xs-12">
                    <h3>Blog</h3>
                    <ul>
                      <li><a href="blog.html">Our Blog</a></li>
                      <li><a href="blog-classic.html">Blog Classic</a></li>
                      <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                      <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                      <li><a href="blog-detail.html">Blog Details</a></li>
                    </ul>
                  </div>

                  <div class="column col-md-3 col-sm-3 col-xs-12">
                    <h3>Shop</h3>
                    <ul>
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-single.html">Product Details</a></li>
                      <li><a href="shoping-cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout Page</a></li>
                      <li><a href="login.html">Registration Page</a></li>
                    </ul>
                  </div>

                </div>
              </div>
            </li>
            <li class="dropdown"><a href="#">News</a>
              <ul>
                <li><a href="blog.html">News</a></li>
                <li><a href="blog-detail.html">News Detail</a></li>
                <li><a href="error-page.html">Error Page</a></li>
              </ul>
            </li>
            <li class="dropdown"><a href="#">Shop</a>
              <ul>
                <li><a href="shop.html">Products</a></li>
                <li><a href="shop-single.html">Products Detail</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="cart.html">Shopping Cart</a></li>
                <li><a href="login.html">Registration</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
      <!-- Main Menu End-->
    </div>

  </div>
</div> */}
                    {/*<!--End Sticky Header--> */}
                </header>
                {/* <!--End Main Header --> */}

            </>
        );
    }
}

export default Header;