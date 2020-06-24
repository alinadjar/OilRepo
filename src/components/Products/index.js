import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from '../../iRedux/Actions/cart_Actions';
import { setTextForToast, setFilterByCurrentModel } from '../../iRedux/Actions/common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleLeft, faFilter
} from '@fortawesome/free-solid-svg-icons'


import ProductBox from './ProductBox';

// import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.pkgd';
import 'flickity/css/flickity.css';

import './productPage.css';
import './radiosStyle.css';
import ProductModal from '../Common/ProductModal';

import { toastr } from 'react-redux-toastr'
import Header from '../Header';
import Footer from '../Footer';

import { loadData } from '../../iRedux/Actions/shop_Actions';
import { loadProductData } from '../../iRedux/Actions/Repo_Actions';
import { DataTypes } from '../../iRedux/Actions/types';

const $ = window.$;


class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProductModal: false,
            selectedProduct: null,
            filterBy_currentModel: false,
            active_service: 0
        }
    }


    componentDidMount() {

        this.handlePreloader();

        this.alignCarousels();


        // this.props.loadData(DataTypes.PRODUCTS);// load data 4 category
        // this.props.loadData(DataTypes.CATEGORIES);

        this.props.loadProductData(1, 5, 0);

        if (this.props.currentModel && this.props.currentModel !== -1) {
            this.setState({ filterBy_currentModel: true });
        }


    }// end componentDidMount

    alignCarousels() {
        // debugger;
        setTimeout(() => {
            const carousels = document.querySelectorAll('.myCarousel');
            carousels.forEach(carousel => {
                new Flickity(carousel, {
                    // options go here
                    accessibility: true,
                    // enable keyboard navigation, pressing left & right keys

                    adaptiveHeight: false,
                    // set carousel height to the selected slide

                    autoPlay: false,
                    // advances to the next cell
                    // if true, default is 3 seconds
                    // or set time between advances in milliseconds
                    // i.e. `autoPlay: 1000` will advance every 1 second

                    cellAlign: 'left',
                    // alignment of cells, 'center', 'left', or 'right'
                    // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

                    cellSelector: undefined,
                    // specify selector for cell elements

                    contain: true,
                    // will contain cells to container
                    // so no excess scroll at beginning or end
                    // has no effect if wrapAround is enabled

                    draggable: '>1',
                    // enables dragging & flicking
                    // if at least 2 cells

                    dragThreshold: 3,
                    // number of pixels a user must scroll horizontally to start dragging
                    // increase to allow more room for vertical scroll for touch devices

                    freeScroll: true,
                    // enables content to be freely scrolled and flicked
                    // without aligning cells

                    friction: 0.2,
                    // smaller number = easier to flick farther

                    groupCells: false,
                    // group cells together in slides

                    initialIndex: 0,
                    // zero-based index of the initial selected cell

                    lazyLoad: true,
                    // enable lazy-loading images
                    // set img data-flickity-lazyload="src.jpg"
                    // set to number to load images adjacent cells

                    percentPosition: true,
                    // sets positioning in percent values, rather than pixels
                    // Enable if items have percent widths
                    // Disable if items have pixel widths, like images

                    prevNextButtons: true,
                    // creates and enables buttons to click to previous & next cells

                    pageDots: false,
                    // create and enable page dots

                    resize: true,
                    // listens to window resize events to adjust size & positions

                    rightToLeft: false,
                    // enables right-to-left layout

                    setGallerySize: true,
                    // sets the height of gallery
                    // disable if gallery already has height set with CSS

                    watchCSS: false,
                    // watches the content of :after of the element
                    // activates if #element:after { content: 'flickity' }

                    wrapAround: true
                    // at end of cells, wraps-around to first for infinite scrolling
                });
            });
        }, 250)
    }


    boxClickHandler = (p) => {
        this.setState({ showProductModal: true, selectedProduct: p });
    }

    closeModal = () => {
        this.setState({ showProductModal: false, selectedProduct: null });
    }


    handlePreloader() {
        $('.preloader').fadeIn(2);
        if ($('.preloader').length) {
            $('.preloader').delay(700).fadeOut(500);
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        // debugger
        if (nextProps.filter_by_selectedModel !== prevState.filterBy_currentModel) {
            return { filterBy_currentModel: nextProps.filter_by_selectedModel };
        }
        else {
            return null;
        }
    }



    print(dict) {
        console.log('=========DIC===========');
        console.log(dict[3]);
        console.log("3" in dict);
        console.log(3 in dict);
    }

    render() {


        const styleRoundSelectorActive = {
            backgroundColor: '#309342',
            width: '2.5rem',
            height: '1.2rem',
            borderRadius: '1rem',
            padding: '0.5rem',
            position: 'relative',
            cursor: 'pointer'
        };

        const styleRoundSelectorPassive = {
            backgroundColor: '#989898',
            width: '2.5rem',
            height: '1.2rem',
            borderRadius: '1rem',
            padding: '0.5rem',
            position: 'relative',
            cursor: 'pointer'
        };


        return (
            <>
                <div>
                    <div className='preloader'></div>

                    <Header />

                    <section className='' style={{ marginTop: '150px', marginLeft: 0, marginRight: 0 }}>

                        <div className="myCarousel">

                            <div className="carousel-cellTopCat" >
                                <div className="form-check radioWrapperTopCat">
                                    <input className="form-check-input radioTopCat" type="radio" name="exampleRadios" id="exampleRadios1"
                                        value="0"
                                        checked={this.state.active_service === 0 ? true : false}
                                        onChange={() => { this.setState({ active_service: 0 }); this.alignCarousels(); }} />
                                    <label className="form-check-label" for="exampleRadios1">
                                        همه موارد
                                    </label>
                                </div>
                            </div>
                            <div className="carousel-cellTopCat" >
                                <div className="form-check radioWrapperTopCat">
                                    <input className="form-check-input radioTopCat" type="radio" name="exampleRadios" id="exampleRadios2"
                                        value="1"
                                        checked={this.state.active_service === 1 ? true : false}
                                        onChange={() => { this.setState({ active_service: 1 }); this.alignCarousels(); }} />
                                    <label className="form-check-label" for="exampleRadios2">
                                        تعویض روغن
                                    </label>
                                </div>
                            </div>
                            <div className="carousel-cellTopCat" >
                                <div className="form-check radioWrapperTopCat">
                                    <input className="form-check-input radioTopCat" type="radio" name="exampleRadios" id="exampleRadios3"
                                        value="3"
                                        checked={this.state.active_service === 3 ? true : false}
                                        onChange={() => { this.setState({ active_service: 3 }); this.alignCarousels(); }} />
                                    <label className="form-check-label" for="exampleRadios3">
                                        لنت ترمز
                                    </label>
                                </div>
                            </div>
                            <div className="carousel-cellTopCat" >
                                <div className="form-check radioWrapperTopCat">
                                    <input className="form-check-input radioTopCat" type="radio" name="exampleRadios" id="exampleRadios4"
                                        value="2"
                                        checked={this.state.active_service === 2 ? true : false}
                                        onChange={() => { this.setState({ active_service: 2 }); this.alignCarousels(); }} />
                                    <label className="form-check-label" for="exampleRadios4">
                                        باتری
                                    </label>
                                </div>
                            </div>
                            <div className="carousel-cellTopCat" >
                                <div className="form-check radioWrapperTopCat">
                                    <input className="form-check-input radioTopCat" type="radio" name="exampleRadios" id="exampleRadios5"
                                        value="5"
                                        checked={this.state.active_service === 5 ? true : false}
                                        onChange={() => { this.setState({ active_service: 5 }); this.alignCarousels(); }} />
                                    <label className="form-check-label" for="exampleRadios5">
                                        عیب یابی
                                    </label>
                                </div>
                            </div>
                            <div className="carousel-cellTopCat" >
                                <div className="form-check radioWrapperTopCat">
                                    <input className="form-check-input radioTopCat" type="radio" name="exampleRadios" id="exampleRadios6"
                                        value="4"
                                        checked={this.state.active_service === 4 ? true : false}
                                        onChange={() => { this.setState({ active_service: 4 }); this.alignCarousels(); }} />
                                    <label className="form-check-label" for="exampleRadios6">
                                        ضدیخ
                                    </label>
                                </div>
                            </div>
                        </div>



                        <div className='' style={{ display: 'flex', justifyContent: 'center' }}>

                            <div className='' style={{
                                direction: 'rtl',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                border: '1px solid',
                                borderRadius: '10px',
                                padding: '20px 10px',
                                width: '50%', minWidth: '450px'

                            }}>
                                <FontAwesomeIcon icon={faFilter} size="lg" style={{ color: '#007bFF', }} />
                                <h5 style={{ fontFamily: 'IRANSans' }}>فیلتر مطابق مدل خودرو انتخابی</h5>
                                <div style={this.state.filterBy_currentModel ? styleRoundSelectorActive : styleRoundSelectorPassive}
                                    onClick={() => this.props.setFilterByCurrentModel(!this.state.filterBy_currentModel)}
                                ><span style={Object.assign({
                                    backgroundColor: '#FFF',
                                    width: '0.6rem',
                                    height: '0.6rem',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '0.3rem',
                                }, this.state.filterBy_currentModel ? { right: '0.3rem' } : { left: '0.3rem' })}></span>
                                </div>
                            </div>
                        </div>


                    </section>


                    {(this.state.active_service === 0 || this.state.active_service === 1)  &&
                        <>
                        {("1" in this.props.productss) && 
                            <section style={{
                                boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                                background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                                borderRadius: '8px',
                            }}>


                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                    <div><Link to='/products/category/1' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                    <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> روغن موتور</a></h3>
                                </div>

                                <div className="myCarousel">
                                    {/* { this.print(this.props.productss) } */}
                                    {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) &&
                                        this.props.productss[1].list.map(p =>
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                                </div>
                            </section>
    }
    {("2" in this.props.productss) && 
                            <section style={{
                                boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                                background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                                borderRadius: '8px',
                            }}>


                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                    <div><Link to='/products/category/2' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                    <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> فیلتر هوا</a></h3>
                                </div>

                                <div className="myCarousel">
                                    {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) &&
                                        this.props.productss[2].list.map(p =>
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                                </div>
                            </section>
    }
    {("3" in this.props.productss) && 
                            <section style={{
                                boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                                background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                                borderRadius: '8px',
                            }}>


                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                    <div><Link to='/products/category/3' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                    <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> فیلتر روغن</a></h3>
                                </div>

                                <div className="myCarousel">
                                    {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) &&
                                        this.props.productss[3].list.map(p =>
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                                </div>
                            </section>
    }
    {("4" in this.props.productss) && 
                            <section style={{
                                boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                                background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                                borderRadius: '8px',
                            }}>


                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                    <div><Link to='/products/category/4' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                    <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> فیلتر کابین</a></h3>
                                </div>

                                <div className="myCarousel">
                                    {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) &&
                                        this.props.productss[4].list.map(p =>
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                                </div>
                            </section>
    }
    {("5" in this.props.productss) && 
                            <section style={{
                                boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                                background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                                borderRadius: '8px',
                            }}>


                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                    <div><Link to='/products/category/5' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                    <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> صافی بنزین</a></h3>
                                </div>

                                <div className="myCarousel">
                                    {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) &&
                                        this.props.productss[5].list.map(p =>
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                                </div>
                            </section>
    }
    {("6" in this.props.productss) && 
                            <section style={{
                                boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                                background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                                borderRadius: '8px',
                            }}>


                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                    <div><Link to='/products/category/6' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                    <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}>فلاشینگ موتور</a></h3>
                                </div>

                                <div className="myCarousel">
                                    {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) &&
                                        this.props.productss[6].list.map(p =>
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                                </div>
                            </section>
    }
                        </>
                    }





                    {(this.state.active_service === 0 || this.state.active_service === 2) &&
                        
                        ("7" in this.props.productss) && 
                        <section style={{
                            boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                            background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                            borderRadius: '8px',
                        }}>


                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                <div><Link to='/products/category/7' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> باتری</a></h3>
                            </div>

                            <div className="myCarousel">
                                {
                                    // this.props.productss.hasOwnProperty("1")
                                    ("1" in this.props.productss) &&
                                    this.props.productss[7].list.map(p =>
                                        <div className="carousel-cell" key={p.ProductID}>
                                            <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                        </div>)
                                }
                            </div>
                        </section>
                        
                    }



                    {(this.state.active_service === 0 || this.state.active_service === 3) &&

("8" in this.props.productss) && 
                        <section style={{
                            boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                            background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                            borderRadius: '8px',
                        }}>


                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                <div><Link to='/products/category/8' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> لنت ترمز</a></h3>
                            </div>

                            <div className="myCarousel">
                            {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) && 
                                        this.props.productss[8].list.map(p => 
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                            </div>
                        </section>
                    }


                    {(this.state.active_service === 0 || this.state.active_service === 4) &&
                    ("9" in this.props.productss) && 
                        <section style={{
                            boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                            background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                            borderRadius: '8px',
                        }}>


                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                <div><Link to='/products/category/9' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}>ضدیخ</a></h3>
                            </div>

                            <div className="myCarousel">
                            {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) && 
                                        this.props.productss[9].list.map(p => 
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                            </div>
                        </section>
                    }



                    {(this.state.active_service === 0 || this.state.active_service === 5) &&
                    ("10" in this.props.productss) && 
                        <section style={{
                            boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto 100px', padding: '5px', paddingBottom: '40px',
                            background: 'linear-gradient(25deg, rgb(167, 178, 196) 20%, rgb(255, 255, 255) 80%)',
                            borderRadius: '8px',
                        }}>


                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                                <div><Link to='/products/category/10' style={{ color: '#007bFF', fontFamily: 'IRANSans', fontSize: '1.1rem', }}><FontAwesomeIcon icon={faAngleLeft} size="md" style={{ color: '#007bFF', }} /> <span>مشاهده همه</span></Link></div>
                                <h3><a href='/' style={{ fontSize: '1.8rem', color: '#444', fontFamily: 'IRANSans' }}> عیب یابی</a></h3>
                            </div>

                            <div className="myCarousel">
                            {
                                        // this.props.productss.hasOwnProperty("1")
                                        ("1" in this.props.productss) && 
                                        this.props.productss[10].list.map(p => 
                                            <div className="carousel-cell" key={p.ProductID}>
                                                <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                            </div>)
                                    }
                            </div>
                        </section>
                    }



                    <Footer />






                </div>
                {
                    this.state.showProductModal &&
                    <ProductModal close={this.closeModal} product={this.state.selectedProduct} add2Cart={this.props.addToCart} writeToastText={this.props.setTextForToast} />
                }
            </>
        );
    }
}


const mapStateToProps = (store) => ({
    products: store.shop.products,
    productss: store.repo.products,
    currentModel: store.common.currentModel,
    filter_by_selectedModel: store.common.filter_by_selectedModel
})

const mapDispatchToProps = {
    addToCart,
    setTextForToast,
    loadData,
    setFilterByCurrentModel,
    loadProductData
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);