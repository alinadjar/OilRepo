import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone, faBarcode, faEnvelope, faShoppingBag, faShoppingCart, faShoppingBasket,
  faTint, faFilter, faSmile, faCog, faWrench, faPhoneSquare, faAngleDoubleLeft, faChevronUp
} from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header';
import Footer from './components/Footer';

const $ = window.$;

//Hide Loading Box (Preloader)
// function handlePreloader() {
//   if ($('.preloader').length) {
//     $('.preloader').delay(700).fadeOut(500);
//   }
// }

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

    debugger;
    this.handlePreloader();


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

    // $(window).on('load', function () {
    //   handlePreloader();
    //   // fixedNavStyle();
    // });

    $(window).on('scroll', function () {
      headerStyle();
      // fixedNavStyle();
    });








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


  handlePreloader() {
    $('.preloader').fadeIn(2);
    if ($('.preloader').length) {
      $('.preloader').delay(700).fadeOut(500);
    }
  }


  render() {
    return (
      <div className="App">
        <div className='preloader'></div>


        {/* <!-- Main Header--> */}
        <Header />



        {/* <!-- Top Slider--> */}
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




        {/* <!-- Brand/Model Selection  --> */}
        <div className='row flex-column-reverse flex-md-row' style={{
          margin: 0,
          paddingBottom: '5%',
          paddingTop: '5%',
          marginTop: '-80px',
          position: 'relative',
          zIndex: 16,
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


        {/* <!-- Statistics Numbers  --> */}
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
              <div class="count-box col-lg-3 col-md-4 col-sm-6 col-xs-12 wow rotateInUpRight">
                <div class="inner-box" style={{ overflow: 'hidden' }}>
                  <FontAwesomeIcon icon={faTint} size="lg" color={'#DDD'}
                    style={{ fontSize: '5.2rem', position: 'absolute', right: 0, bottom: 0 }} />
                  <span class="count-text" data-speed="5000" data-stop="6370"
                    style={{ textAlign: 'center', fontSize: '2.7rem', color: '#002156' }}>0</span>
                  <div class="counter-title"><h3>تعویض روغن</h3></div>
                </div>
              </div>

              {/* <!-- Count box --> */}
              <div class="count-box col-lg-3 col-md-4 col-sm-6 col-xs-12 wow rotateInUpRight">
                <div class="inner-box" style={{ overflow: 'hidden' }}>
                  <FontAwesomeIcon icon={faFilter} size="lg" color={'#DDD'}
                    style={{ fontSize: '5.2rem', position: 'absolute', right: 0, bottom: 0 }} />
                  <span class="count-text" data-speed="4500" data-stop="5504"
                    style={{ textAlign: 'center', fontSize: '2.7rem', color: '#002156' }}>0</span>
                  <div class="counter-title"><h3>تعویض فیلتر</h3></div>
                </div>
              </div>

              {/* <!-- Count box --> */}
              <div class="count-box col-lg-3 col-md-4 col-sm-6 col-xs-12 wow rotateInUpLeft">
                <div class="inner-box" style={{ overflow: 'hidden' }}>
                  <FontAwesomeIcon icon={faCog} size="lg" color={'#DDD'}
                    style={{ fontSize: '5.2rem', position: 'absolute', right: 0, bottom: 0 }} />
                  <span class="count-text" data-speed="3500" data-stop="3750"
                    style={{ textAlign: 'center', fontSize: '2.7rem', color: '#002156' }}>0</span>
                  <div class="counter-title"><h3>سرویس خودرو</h3></div>
                </div>
              </div>

              {/* <!-- Count box --> */}
              <div class="count-box col-lg-3 col-md-4 col-sm-6 col-xs-12 wow rotateInUpLeft">
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




        {/* <!-- Description Content + Parallax --> */}
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
        <Footer />




        {/* <!--Scroll to top--> */}
        <div class="scroll-to-top scroll-to-target" data-target="html">
          <FontAwesomeIcon icon={faChevronUp} size="md" color={'#FFF'} />
        </div>



      </div>
    );
  }
}

export default App;
