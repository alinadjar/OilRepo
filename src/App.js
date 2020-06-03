import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone, faBarcode, faEnvelope, faShoppingBag, faShoppingCart, faShoppingBasket,
  faTint, faFilter, faSmile, faCog, faWrench, faPhoneSquare, faAngleDoubleLeft, faChevronUp
} from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const $ = window.$;

//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($('.preloader').length) {
    $('.preloader').delay(700).fadeOut(500);
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

    // $(".chosen-select").chosen();
    // $('#ki').on('change', function (e) {
    //   // triggers when whole value changed
    //   console.log("value changed");
    //   alert(e.target.value);
    //   console.log(e.target);
    // });

    $('#si1').on('change', function (e) {
      console.log("value changed");
      alert(e.target.value);
      console.log(e.target);
    });

    $('#si2').on('change', function (e) {
      console.log("value changed");
      alert(e.target.value);
      console.log(e.target);
    });

    $('#si3').on('change', function (e) {
      console.log("value changed");
      alert(e.target.value);
      console.log(e.target);
    });



    $('.mselect2').select2({
      placeholder: "Select a state",
      //allowClear: true
    });

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


    //Fact Counter + Text Count
    if ($('.count-box').length) {
      $('.count-box').appear(function () {

        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            }
          });
        }

      }, { accY: 0 });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
      $(".scroll-to-target").on('click', function () {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 1000);
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
              <img src={require('./images/logo-2.png')}
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
              <ul class="navbar-nav" style={{ textAlign: 'right', paddingRight: '20px'}}>
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

        <section className="main-slider" style={{ marginTop: '20px' }}>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={require('./images/main-slider/image-1.jpg')} alt="First slide"
                  style={{ objectFit: 'cover', height: '600px' }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require('./images/main-slider/image-2.jpg')} alt="Second slide"
                  style={{ objectFit: 'cover', height: '600px' }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require('./images/main-slider/image-3.jpg')} alt="Third slide"
                  style={{ objectFit: 'cover', height: '600px' }} />
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


        <div className='row flex-column-reverse flex-md-row' style={{
          margin: 0,
          paddingBottom: '5%',
          paddingTop: '5%',
          marginTop: '-80px',
          position: 'relative',
          zIndex: 20,
          borderTopLeftRadius: '95px',
          borderTopRightRadius: '95px',
          backgroundColor: '#dac873',
          marginBottom: '50px',
          fontFamily: 'IRANSans',
          boxShadow: '3px -5px 20px 0px #212121'
        }}>

          <div className="col-md-6 col-sm-12" style={{ fontFamily: 'inherit', marginBottom: '20px' }}>
            <div style={{ width: '80%', margin: '0 auto', fontFamily: 'inherit' }}>
              <h3 style={{ fontFamily: 'inherit', textAlign: 'center' }}>انتخاب مدل</h3>
              <select className="mselect2" id='si2' name="state" style={{ width: '100%' }}>
                <option value="AL">سمند سورن</option>
                <option value="WY">پارس </option>
                <option value="OH">Ohio</option>
                <option value="HA">Hamilton</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-sm-12" style={{ fontFamily: 'inherit', marginBottom: '20px' }}>
            <div style={{ width: '80%', margin: '0 auto' }}>
              <h3 style={{ fontFamily: 'inherit', textAlign: 'center' }}>انتخاب برند</h3>
              <select className="mselect2" id='si1' name="state" style={{ width: '100%' }}>
                <option value="AL">Alabama</option>
                <option value="WY">Wyoming</option>
                <option value="OH">Ohio</option>
                <option value="HA">Hamilton</option>
              </select>
            </div>
          </div>
        </div>



        <div class="sec-title text-center" style={{ marginTop: '50px' }}>
          <h2 style={{ fontFamily: 'inherit' }}>چاله سرویس</h2>
          <div class="separator"><FontAwesomeIcon icon={faWrench} size="lg" color={'#DDD'}
            style={{ fontSize: '2.5rem', }} /></div>
        </div>


        {/* <!-- Fact counter --> */}
        <section class="fun-fact-two no-pd-top wow fadeInLeft">
          <div class="auto-container">
            <div class="row clearfix">
              {/* <!-- Count box --> */}
              <div class="count-box col-lg-3 col-md-6 col-sm-12 wow rotateInUpRight">
                <div class="inner-box" style={{ overflow: 'hidden' }}>
                  <FontAwesomeIcon icon={faTint} size="lg" color={'#DDD'}
                    style={{ fontSize: '5.2rem', position: 'absolute', right: 0, bottom: 0 }} />
                  <span class="count-text" data-speed="5000" data-stop="6370"
                    style={{ textAlign: 'center', fontSize: '2.7rem', color: '#002156' }}>0</span>
                  <div class="counter-title"><h3>تعویض روغن</h3></div>
                </div>
              </div>

              {/* <!-- Count box --> */}
              <div class="count-box col-lg-3 col-md-6 col-sm-12 wow rotateInUpRight">
                <div class="inner-box" style={{ overflow: 'hidden' }}>
                  <FontAwesomeIcon icon={faFilter} size="lg" color={'#DDD'}
                    style={{ fontSize: '5.2rem', position: 'absolute', right: 0, bottom: 0 }} />
                  <span class="count-text" data-speed="4500" data-stop="5504"
                    style={{ textAlign: 'center', fontSize: '2.7rem', color: '#002156' }}>0</span>
                  <div class="counter-title"><h3>تعویض فیلتر</h3></div>
                </div>
              </div>

              {/* <!-- Count box --> */}
              <div class="count-box col-lg-3 col-md-6 col-sm-12 wow rotateInUpLeft">
                <div class="inner-box" style={{ overflow: 'hidden' }}>
                  <FontAwesomeIcon icon={faCog} size="lg" color={'#DDD'}
                    style={{ fontSize: '5.2rem', position: 'absolute', right: 0, bottom: 0 }} />
                  <span class="count-text" data-speed="3500" data-stop="3750"
                    style={{ textAlign: 'center', fontSize: '2.7rem', color: '#002156' }}>0</span>
                  <div class="counter-title"><h3>سرویس خودرو</h3></div>
                </div>
              </div>

              {/* <!-- Count box --> */}
              <div class="count-box col-lg-3 col-md-6 col-sm-12 wow rotateInUpLeft">
                <div class="inner-box" style={{ overflow: 'hidden' }}>
                  <FontAwesomeIcon icon={faSmile} size="lg" color={'#DDD'}
                    style={{ fontSize: '5.2rem', position: 'absolute', right: 0, bottom: 0 }} />
                  <span class="count-text" data-speed="4000" data-stop="5420"
                    style={{ textAlign: 'center', fontSize: '2.7rem', color: '#002156' }}>0</span>
                  <div class="counter-title"><h3>رضایتمندی مشتریان</h3></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Fact counter --> */}

        <div style={{ fontFamily: 'IRANSans', padding: '40px 0' }}>
          <h2 style={{ fontFamily: 'inherit', textAlign: 'center' }}>روش ارائه سرویس</h2>
          <h5 style={{ fontFamily: 'inherit', textAlign: 'center', direction: 'rtl', width: '90%', margin: '0 auto', lineHeight: 1.5 }}>
            ارسال سفارش و ارائه سرویس در حال حاضر در شهر تهران امکان پذیر می باشد و ارسال سفارش های بالای یکصدهزار تومان رایگان می باشد. در صورت انتخاب گزینه سرویس "تعویض می خواهم" در زمان خرید هر محصول هیچ گونه هزینه ایاب و ذهاب یا هزینه اضافه تر از مبلغ درج شده در فاکتور دریافت نمی شود. پس از تایید سفارش سرویس، مشخصات تکنسین چاله سرویس از طریق ایمیل و پیامک برای مشتری ارسال می شود و در زمان مراجعه تکنسین به محل مورد نظر، وی ملزم به ارائه کارت شناسایی و معرفی خود می باشد. در صورت عدم ارائه کارت شناسایی و یا عدم تطابق مشخص، از شروع به کار تکنسین خودداری نموده و مراتب را به چاله سرویس اطلاع دهید. کلیه سفارش هایی که نیازمند ارائه سرویس می باشند و در ساعات غیر اداری ثبت گردند، حداقل یک روز پس از ثبت سفارش انجام می شوند. سفارش هایی که نیاز به سرویس ندارند امکان ارسال در همان روز را دارند. سرویس تعویض روغن شامل تست روغن رایگان می باشد.
          </h5>

        </div>
        <div class="parallax">
          <div className='row' style={{ margin: 0, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
            <div style={{ width: '50%', paddingTop: '100px', objectFit: 'cover' }}>
              <img src={require('./images/resource/car-image-2.png')} alt='' style={{ objectFit: 'cover', width: '100%' }} />
            </div>
            <div style={{ position: 'absolute', top: 0, left: '2%', paddingTop: '100px' }}>
              <h2 style={{ fontFamily: 'IRANSans', }}>مرکز سرویس خودرو</h2>
              <ul style={{ textAlign: 'center', lineHeight: '1.9', fontWeight: 'bold' }}>
                <li>بهترین قیمت</li>
                <li>سریع و مطمئن</li>
                <li>پشتیبانی آنلاین</li>
                <li>تعمیرکاران حرفه‌ای</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Main Footer --> */}
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
                          <img className='img-fluid' src={require('./images/verifyLogo/union.png')} alt='some txt' />
                        </div>
                        <div className='col-4'>
                          <img className='img-fluid' src={require('./images/verifyLogo/enamad.png')} alt='some txt' />
                        </div>
                        <div className='col-4'>
                          <img className='img-fluid' src={require('./images/verifyLogo/rasaneh.png')} alt='some txt' />
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


        {/* <!--Scroll to top--> */}
        <div class="scroll-to-top scroll-to-target" data-target="html">
          <FontAwesomeIcon icon={faChevronUp} size="md" color={'#FFF'} />
        </div>



      </div>
    );
  }
}

export default App;
