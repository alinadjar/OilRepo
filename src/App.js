import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'

//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($('.preloader').length) {
    $('.preloader').delay(2000).fadeOut(500);
  }
}

//Update Header Style and Scroll to Top
function headerStyle() {
  if ($('.main-header').length) {
    var windowpos = $(window).scrollTop();
    var siteHeader = $('.main-header');
    var sticky_Header = $('.sticky-header');
    var scrollLink = $('.scroll-to-top');
    if (windowpos >= 300) {
      sticky_Header.addClass("animated slideInDown")
      siteHeader.addClass('fixed-header');
      scrollLink.fadeIn(300);
    } else {
      sticky_Header.removeClass("animated slideInDown")
      siteHeader.removeClass('fixed-header');
      scrollLink.fadeOut(300);
    }
  }
}



//Update Fixed Nav Position
// function fixedNavStyle() {
//   if ($('.fixed-top-bar').length) {
//     var windowHeight = $(window).height();
//     var windowpos = $(window).scrollTop();
//     var fixedBar = $('.fixed-top-bar');
//     if (windowpos >= windowHeight) {
//       $('body').addClass('banner-height-reached');
//       fixedBar.addClass('now-fixed');
//     } else {
//       $('body').removeClass('banner-height-reached');
//       fixedBar.removeClass('now-fixed');
//     }
//   }
// }

class App extends Component {



  componentDidMount() {
    $(window).on('load', function () {
      handlePreloader();
      // fixedNavStyle();
    });

    $(window).on('scroll', function () {      
      headerStyle();
      // fixedNavStyle();
    });



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




    //Search Popup
    // if ($('#search-popup').length) {

    //   //Show Popup
    //   $('.fixed-search-box-btn').on('click', function () {
    //     $('#search-popup').addClass('popup-visible');
    //   });
    //   $(document).keydown(function (e) {
    //     if (e.keyCode == 27) {
    //       $('#search-popup').removeClass('popup-visible');
    //     }
    //   });
    //   //Hide Popup
    //   $('.close-search,.search-popup .overlay-layer').on('click', function () {
    //     $('#search-popup').removeClass('popup-visible');
    //   });
    // }


  }


  render() {
    return (
      <div className="App">
        <div className='preloader'></div>


        {/* <!-- Main Header--> */}
        <header class="main-header header-style-three">

          {/* <!--Header Top--> */}
          <div class="header-top">
            <div class="auto-container">
              <div class="inner-container clearfix">
                <div class="top-left">
                  <ul class="clearfix" style={{ marginBottom: 0}}>
                    <li>Autocare is your one stap solution for all auto repair needs!</li>
                    <li><a href="appointment.html">Get a Free Auto Checkup Now <i class="fa fa-long-arrow-alt-right"></i></a></li>
                  </ul>
                </div>
                <div class="top-right clearfix">
                  <p style={{ marginBottom: 0}}><i class="fa fa-phone-volume"></i> 24/7 Support  0700 125 3657</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Header Top --> */}

          {/* <!-- Header Lower --> */}
          <div class="header-lower">
            <div class="auto-container">
              <div class="main-box clearfix">
                {/* <!--Logo Box--> */}
                <div class="logo-box">
                  <div class="logo"><a href="index.html"><img src={require('./images/logo-2.png') } alt="" /></a></div>
                </div>
                {/* <!--outer Box--> */}
                <div class="outer-box">
                  {/* <!-- Cart Btn --> */}
                  <div class="cart-btn">
                    <a href="shop.html" title="">
                      <i class="flaticon-shopping-bag-1"></i>
                      <span class="count">2</span>
                    </a>
                  </div>

                  {/* <!--Search Box--> */}
                  {/* <div class="dropdown dropdown-outer">
                    <button class="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-search"></span></button>
                    <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                      <li class="panel-outer">
                        <div class="form-container">
                          <form method="post" action="https://expert-themes.com/html/motor-expert/blog.html">
                            <div class="form-group">
                              <input type="search" name="field-name" value="" placeholder="Search Here" required="" />
                              <button type="submit" class="search-btn"><span class="fa fa-search"></span></button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                </div>
                {/* <!--End outer Box--> */}
                {/* <!-- Main Menu --> */}
                <nav class="main-menu navbar-expand-md">
                  <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>

                  <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
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
                            <div class="column col-md-4 col-sm-4 col-xs-12">
                              <h3>About Us</h3>
                              <ul>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="team-single.html">Team Single</a></li>
                                <li><a href="testimonials.html">Testimonial</a></li>
                                <li><a href="faq.html">FAQ's</a></li>
                                <li><a href="coming-soon.html">Coming Soon</a></li>
                              </ul>
                            </div>
                            <div class="column col-md-4 col-sm-4 col-xs-12">
                              <h3>Solutions</h3>
                              <ul>
                                <li><a href="service-detail.html">Solutions</a></li>
                                <li><a href="service-detail.html">Chemical Engineering</a></li>
                                <li><a href="service-detail.html">Energy & Power Engineering</a></li>
                                <li><a href="service-detail.html">Oil & Gas Engineering</a></li>
                                <li><a href="service-detail.html">Civil Engineering</a></li>
                              </ul>
                            </div>
                            <div class="column col-md-4 col-sm-4 col-xs-12">
                              <h3>Blog</h3>
                              <ul>
                                <li><a href="blog.html">Our Blog</a></li>
                                <li><a href="blog-classic.html">Blog Classic</a></li>
                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                <li><a href="blog-detail.html">Blog Details</a></li>
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
                {/* <!-- Main Menu End--> */}

              </div>
            </div>

          </div>
          {/* <!-- End Header Lower --> */}

          {/* <!--Sticky Header--> */}
          <div class="sticky-header">
            <div class="auto-container clearfix">
              {/* <!--Logo--> */}
              <div class="logo pull-left">
                <a href="index.html" class="img-responsive"><img src="images/logo-small.png" alt="" title="" /></a>
              </div>

              {/* <!--Right Col--> */}
              <div class="right-col pull-right">
                {/* <!-- Main Menu --> */}
                <nav class="main-menu  navbar-expand-md">
                  <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
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
                {/* <!-- Main Menu End--> */}
              </div>

            </div>
          </div>
          {/* <!--End Sticky Header--> */}
        </header>
        {/* <!--End Main Header --> */}

        <section className="main-slider">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={require('./images/main-slider/image-1.jpg')} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require('./images/main-slider/image-2.jpg')} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require('./images/main-slider/image-3.jpg')} alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>

        <div class="sec-title text-center">
          <h2>Our Latest Works</h2>
          <div class="separator"><span class="flaticon-settings-2"></span></div>
        </div>


        {/* <!-- Main Footer --> */}
        <footer class="main-footer" style={{}}>
          <div class="auto-container">

            {/* <!--Widgets Section--> */}
            <div class="widgets-section">
              <div class="row clearfix">
                {/* <!--Footer Column--> */}
                <div class="footer-column col-md-3 col-sm-6 col-xs-12">
                  <div class="footer-widget about-widget">
                    <div class="footer-logo">
                      <figure>
                        <a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                      </figure>
                    </div>
                    <div class="widget-content">
                      <div class="text">How to pursue pleasure rationally thats encounter consequences that extremely painful. Nor again is there anyones who loves or pursues or ut desires obtains pain of itself, because.</div>
                      <h4>Follow Us:</h4>
                      <ul class="social-icon">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!--Footer Column--> */}
                <div class="footer-column col-md-3 col-sm-6 col-xs-12">
                  <div class="footer-widget services-widget">
                    <h2 class="widget-title">Our Services</h2>
                    <div class="widget-content">
                      <ul class="services-list">
                        <li><a href="#">Engine Diagnostic & Repair</a></li>
                        <li><a href="#">Maintanence Inspaection</a></li>
                        <li><a href="#">Electrical System Diagnostic</a></li>
                        <li><a href="#">Wheel Allignment & Installation</a></li>
                        <li><a href="#">Air Conditioner Service & Repair</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!--Footer Column--> */}
                <div class="footer-column col-md-3 col-sm-6 col-xs-12">
                  {/* <!--Footer Column--> */}
                  <div class="footer-widget gallery-widget">
                    <h2 class="widget-title">Instragram</h2>
                    {/* <!--Footer Column--> */}
                    <div class="widget-content">
                      <div class="outer clearfix">
                        <figure class="image">
                          <a href="images/resource/feature-1.jpg" class="lightbox-image" title="Image Title Here"><img src="images/resource/insta-1.jpg" alt="" /></a>
                        </figure>

                        <figure class="image">
                          <a href="images/resource/feature-2.jpg" class="lightbox-image" title="Image Title Here"><img src="images/resource/insta-2.jpg" alt="" /></a>
                        </figure>

                        <figure class="image">
                          <a href="images/resource/feature-3.jpg" class="lightbox-image" title="Image Title Here"><img src="images/resource/insta-3.jpg" alt="" /></a>
                        </figure>

                        <figure class="image">
                          <a href="images/resource/feature-4.jpg" class="lightbox-image" title="Image Title Here"><img src="images/resource/insta-4.jpg" alt="" /></a>
                        </figure>

                        <figure class="image">
                          <a href="images/resource/news-1.jpg" class="lightbox-image" title="Image Title Here"><img src="images/resource/insta-5.jpg" alt="" /></a>
                        </figure>

                        <figure class="image">
                          <a href="images/resource/news-2.jpg" class="lightbox-image" title="Image Title Here"><img src="images/resource/insta-6.jpg" alt="" /></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>


                {/* <!--Footer Column--> */}
                <div class="footer-column col-md-3 col-sm-6 col-xs-12">
                  {/* <!--Footer Column--> */}
                  <div class="footer-widget news-widget">
                    <h2 class="widget-title">Latest News</h2>
                    {/* <!--Footer Column--> */}
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
                </div>
              </div>
            </div>
          </div>

          {/* <!--Footer Bottom--> */}
          <div class="footer-bottom">
            <div class="auto-container">
              <div class="copyright-text">
                <p>Copyrights © 2019 All Rights Reserved. by <a href="#"> Expert Themes</a></p>
              </div>
            </div>
          </div>
        </footer>


        {/* <!--Scroll to top--> */}
        <div class="scroll-to-top scroll-to-target" data-target="html">HH<span class="icon fa fa-angle-double-up"></span></div>
      </div>
    );
  }
}

export default App;
