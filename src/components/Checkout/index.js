import React, { Component } from 'react';
import headerLOGO from '../../images/logo-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

import MobileModal from '../Common/MobileModal';

import { connect } from 'react-redux';
import { addToCart } from '../../iRedux/Actions/cart_Actions';
import Footer from '../Footer';

import './checkout.css';
import './payment.css';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 3,
            mobileModalShow: false
        }
    }

    closeModal = () => {
        this.setState({ mobileModalShow: false, step: 1 });
    }


    render() {

        const stepStyle = {
            // padding: '10px',
            // backgroundColor: 'beige',
        }

        return (
            <>
                <div>
                    <div className='row' style={{ direction: 'rtl', backgroundColor: '#f9e7e7', marginRight: 0, marginLeft: 0 }}>
                        <img src={headerLOGO} alt="header logo" style={{ width: '230px', maxWidth: '100%', margin: '0 auto', marginBottom: '30px' }} alt='' />
                    </div>
                    <div className='row' style={{ marginRight: 0, marginLeft: 0, backgroundColor: '#f9e7e7', paddingBottom: '40px' }}>
                        <div className='col-2'></div>
                        <div className='col-8' style={{ display: 'flex', justifyContent: 'space-evenly', direction: 'rtl', }}>
                            <span style={{ borderBottom: '2px dashed #444', position: 'absolute', top: '40%', zIndex: 5, width: '60%' }}></span>
                            <div style={this.state.step >= 1 ? stepStyle : {}}>
                                <img src={require('../../images/bag.png')} style={{ width: '40px', height: '40px', margin: '0 auto', display: 'block', position: 'relative', zIndex: 7 }} />
                                <h6 style={{ fontSize: '0.7rem', paddingTop: '10px', textAlign: 'center' }}>سبدخرید شما</h6>
                                <div onClick={ () => this.setState({step: 1})}
                                style={{width: '30px', height:'30px', backgroundColor: 'rgb(35,181,36)', borderRadius:'50%', margin: '0 auto', color: '#FFF', textAlign:'center', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faCheck} size='md' style={{ margin:'0 auto'}} />
                                </div>
                            </div>
                            <div style={this.state.step >= 1 ? stepStyle : {}}>
                                <img src={require('../../images/calendar.png')} style={{ width: '40px', height: '40px', margin: '0 auto', display: 'block', position: 'relative', zIndex: 7 }} />
                                <h6 style={{ fontSize: '0.7rem', paddingTop: '10px', textAlign: 'center' }}>کی و کجا؟</h6>
                                <div onClick={ () => this.setState({step: 2})}
                                style={{width: '30px', height:'30px', backgroundColor: 'rgb(35,181,36)', borderRadius:'50%', margin: '0 auto', cursor: 'pointer'}}></div>
                            </div>
                            <div style={this.state.step >= 3 ? stepStyle : {}}>
                                <img src={require('../../images/payMethod.png')} style={{ width: '40px', height: '40px', margin: '0 auto', display: 'block', position: 'relative', zIndex: 7 }} />
                                <h6 style={{ fontSize: '0.7rem', paddingTop: '10px', textAlign: 'center' }}>نحوه پرداخت</h6>
                                <div onClick={ () => this.setState({step: 3})}
                                style={{width: '30px', height:'30px', backgroundColor: 'rgb(35,181,36)', borderRadius:'50%', margin: '0 auto', cursor: 'pointer'}}></div>
                            </div>
                            <div style={this.state.step >= 4 ? stepStyle : {}}>
                                <img src={require('../../images/order.png')} style={{ width: '40px', height: '40px', margin: '0 auto', display: 'block', position: 'relative', zIndex: 7 }} />
                                <h6 style={{ fontSize: '0.7rem', paddingTop: '10px', textAlign: 'center' }}>تکمیل سفارش</h6>
                                <div onClick={ () => this.setState({step: 4})}
                                style={{width: '30px', height:'30px', backgroundColor: 'rgb(35,181,36)', borderRadius:'50%', margin: '0 auto', cursor: 'pointer'}}></div>
                            </div>
                        </div>
                        <div className='col-2'></div>
                    </div>

                    {
                        this.state.step === 1 ?
                            <div className='row' style={{ marginRight: 0, marginLeft: 0 }}>
                                <div className='col-12 col-lg-3' style={{ padding: '10px 4%', textAlign: 'right', fontSize: '0.8rem' }}>
                                    <h4 style={{ fontFamily: 'inherit' }}>صورتحساب سبد خرید</h4>
                                    <table className='table' style={{ direction: 'rtl', border: '1px solid #DDD' }}>
                                        <tbody>
                                            <tr>
                                                <th>مجموع</th>
                                                <td>{this.props.cartPrice}</td>
                                            </tr>
                                            <tr>
                                                <td>تخفیف کالا</td>
                                                <th>{this.props.cartDiscount}</th>
                                            </tr>
                                            <tr>
                                                <td>هزینه ارسال</td>
                                                <th>رایگان</th>
                                            </tr>
                                            <tr>
                                                <td> <strong>مبلغ قابل پرداخت</strong></td>
                                                <th><strong>{this.props.cartPrice - this.props.cartDiscount}</strong></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button type="button" class="btn btn-success"
                                        style={{ width: '100%', fontSize: '0.9rem' }}
                                        onClick={() => this.setState({ step: 2 })}
                                    >ادامه جهت تسویه حساب</button>
                                </div>
                                <div className='col-12 col-lg-9' style={{ padding: '10px 4%', textAlign: 'right' }}>
                                    <table className="table table-striped d-none d-md-table" style={{ direction: 'rtl' }}>
                                        <thead style={{ textAlign: 'center' }}>
                                            <tr className='trHeaderCheckout'>
                                                <th></th>
                                                <th>محصول</th>
                                                <th>قیمت</th>
                                                <th>تعداد</th>
                                                <th>جمع جزء</th>
                                            </tr>
                                        </thead>
                                        <tbody className='checkoutTBody'>
                                            {
                                                this.props.cartItems &&
                                                this.props.cartItems.map(c =>
                                                    <tr>
                                                        <td><img src={require(`../../images/products/${c.product.images[0].imageSrc}`)} style={{ width: '40%', maxWidth: '180px', margin: '0 auto', display: 'block', borderRadius: '50%' }} alt='' /></td>
                                                        <td>{c.product.title}</td>
                                                        <td className='tdPriceCheckout'>
                                                            <div><small style={{ textDecoration: 'line-through' }}>{c.product.price}</small></div>
                                                            <div>{c.product.price - c.product.discount}</div>
                                                        </td>
                                                        {/* <td>{c.quantity}</td> */}
                                                        <td>
                                                            <div style={{ minWidth: '130px', backgroundColor: '#FFF', borderRadius: '50px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                                <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                                    onClick={() => this.props.add(c.product)}
                                                                >
                                                                    <FontAwesomeIcon icon={faPlus} size='sm' />
                                                                </button>
                                                                <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>{c.quantity}</span>
                                                                <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                                    onClick={() => this.props.add(c.product, -1)}
                                                                >
                                                                    <FontAwesomeIcon icon={faMinus} size='sm' />
                                                                </button>
                                                            </div>
                                                        </td>

                                                        <td>{c.quantity * (c.product.price - c.product.discount)}</td>
                                                    </tr>)
                                            }

                                        </tbody>
                                    </table>

                                    <table className="table d-table d-md-none" style={{ direction: 'rtl' }}>
                                        <tbody className='' style={{ textAlign: 'center' }}>
                                            {
                                                this.props.cartItems &&
                                                this.props.cartItems.map(c =>
                                                    <>
                                                        <tr>
                                                            <th></th>
                                                            <td><img src={require(`../../images/products/${c.product.images[0].imageSrc}`)} style={{ width: '40%', maxWidth: '180px', margin: '0 auto', display: 'block', borderRadius: '50%' }} alt='' /></td>
                                                        </tr>
                                                        <tr>
                                                            <th>محصول</th>
                                                            <td>{c.product.title}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>قیمت</th>
                                                            <td className='tdPriceCheckout'>
                                                                <div><small style={{ textDecoration: 'line-through' }}>{c.product.price}</small></div>
                                                                <div>{c.product.price - c.product.discount}</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>تعداد</th>
                                                            {/* <td>{c.quantity}</td> */}
                                                            <td>
                                                                <div style={{ minWidth: '120px', maxWidth: '50%', margin: '0 auto', backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                                    <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                                        onClick={() => this.props.add(c.product)}
                                                                    >
                                                                        <FontAwesomeIcon icon={faPlus} size='sm' />
                                                                    </button>
                                                                    <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>{c.quantity}</span>
                                                                    <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                                        onClick={() => this.props.add(c.product, -1)}
                                                                    >
                                                                        <FontAwesomeIcon icon={faMinus} size='sm' />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>جمع جزء</th>
                                                            <td>{c.quantity * (c.product.price - c.product.discount)}</td>
                                                        </tr>
                                                    </>
                                                )
                                            }

                                        </tbody>
                                    </table>


                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <button className='btn btn-outline-success' style={{ fontSize: '0.rem' }}> اعمال کوپن</button>
                                        <input className='form-control' placeholder='کد تخفیف' style={{ width: '30%', textAlign: 'center' }} />
                                    </div>
                                </div>
                            </div>
                            :
                            this.state.step === 2 ?
                                <div className='row' style={{ marginRight: 0, marginLeft: 0, position: 'relative', padding: '10px' }}>
                                    <div style={{ width: '100%', textAlign: 'right' }}><h4 style={{ fontFamily: 'IRANSans' }}>حساب کاربری</h4></div>
                                    <div className='row' style={{ margin: '0 auto', textAlign: 'right', width: '70%', direction: 'rtl', }}>
                                        <div class="form-group col-12 col-sm-6">
                                            <label for="exampleInputEmail1">نام *</label>
                                            <input type="text" class="form-control" aria-describedby="emailHelp"
                                                style={{ textAlign: 'center', borderRadius: '30px' }}
                                                placeholder="" />
                                        </div>
                                        <div class="form-group col-12 col-sm-6">
                                            <label for="exampleInputPassword1">نام خانوادگی *</label>
                                            <input type="text" class="form-control"
                                                style={{ textAlign: 'center', borderRadius: '30px' }}
                                                placeholder="" />
                                        </div>


                                        <div class="form-group col-12 col-sm-6">
                                            <label for="exampleInputEmail1">شماره همراه *</label>
                                            <input type="text" class="form-control" aria-describedby="emailHelp"
                                                style={{ textAlign: 'center', borderRadius: '30px' }}
                                                placeholder="" />
                                        </div>
                                        <div class="form-group col-12 col-sm-6">
                                            <label for="exampleInputPassword1">ایمیل</label>
                                            <input type="email" class="form-control"
                                                style={{ textAlign: 'center', borderRadius: '30px' }}
                                                placeholder="" />
                                        </div>
                                        <div class="form-group col-12">
                                            <label for="exampleInputPassword1">آدرس</label>
                                            <input type="text" class="form-control"
                                                style={{ textAlign: 'center', borderRadius: '30px' }}
                                                placeholder="" />
                                        </div>

                                        <div class="form-group col-12">
                                            <button type="button" class="btn btn-outline-success"
                                                style={{ padding: '5px 70px', margin: '0 auto', display: 'block' }}
                                                onClick={() => this.setState({ step: 3 })}
                                            >ثبت</button>
                                        </div>
                                    </div>
                                </div>



                                : this.state.step === 3 ?
                                    <div className='row' style={{ marginRight: 0, marginLeft: 0, direction: 'rtl', width: '90%', margin: '40px auto', border: '1px solid #DDD' }}>
                                        <div style={{
                                            textAlign: 'right',
                                            width: '100%',
                                            paddingTop: '10px',
                                            borderTop: '1px solid #DDD',
                                            paddingRight: '20px',
                                            borderRight: '2px solid green',
                                            marginBottom: '20px'
                                        }}>
                                            <h4 style={{ fontSize: '1.2rem' }}>روز / ساعت تحویل</h4>
                                        </div>
                                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"
                                                style={{ padding: '5px 5px' }}>شنبه</a>
                                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"
                                                style={{ padding: '5px 5px' }}>یکشنبه</a>
                                            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"
                                                style={{ padding: '5px 5px' }}>دوشنبه</a>
                                        </div>

                                        <div class="tab-content" id="v-pills-tabContent" style={{ backgroundColor: '#c6efc6' }}>
                                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"
                                                style={{ textAlign: 'right', margin: '10px' }}
                                            >
                                                <div class="form-check" style={{ paddingBottom: '10px' }}>
                                                    {/* <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> */}
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label class="form-check-label" for="exampleRadios1" style={{ paddingRight: '20px' }}>
                                                        ساعت 12-09
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{ paddingBottom: '10px' }}>
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                    <label class="form-check-label" for="exampleRadios2" style={{ paddingRight: '20px' }}>
                                                        ساعت 15-12
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{ paddingBottom: '10px' }}>
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" />
                                                    <label class="form-check-label" for="exampleRadios3" style={{ paddingRight: '20px' }}>
                                                        ساعت 18-15
                                                    </label>
                                                </div>
                                                <div class="form-check disabled" style={{ paddingBottom: '10px' }}>
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option2" disabled />
                                                    <label class="form-check-label" for="exampleRadios4" style={{ paddingRight: '20px' }}>
                                                        ساعت 21-18  <span style={{ color: '#A00' }}>ظرفیت تکمیل</span>
                                                    </label>
                                                </div>


                                            </div>
                                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"
                                                style={{ textAlign: 'right', margin: '10px' }}>
                                                <div class="form-check" style={{ paddingBottom: '10px' }}>
                                                    {/* <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> */}
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label class="form-check-label" for="exampleRadios1" style={{ paddingRight: '20px' }}>
                                                        ساعت 12-09
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{ paddingBottom: '10px' }}>
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                    <label class="form-check-label" for="exampleRadios2" style={{ paddingRight: '20px' }}>
                                                        ساعت 15-12
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{ paddingBottom: '10px' }}>
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" />
                                                    <label class="form-check-label" for="exampleRadios3" style={{ paddingRight: '20px' }}>
                                                        ساعت 18-15
                                                    </label>
                                                </div>

                                            </div>
                                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"
                                                style={{ textAlign: 'right', margin: '10px' }}>

                                                <div class="form-check" style={{ paddingBottom: '10px' }}>
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" />
                                                    <label class="form-check-label" for="exampleRadios3" style={{ paddingRight: '20px' }}>
                                                        ساعت 18-15
                                                    </label>
                                                </div>
                                                <div class="form-check disabled" style={{ paddingBottom: '10px' }}>
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option2" disabled />
                                                    <label class="form-check-label" for="exampleRadios4" style={{ paddingRight: '20px' }}>
                                                        ساعت 21-18  <span style={{ color: '#A00' }}>ظرفیت تکمیل</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: '100%', marginTop: '5%' }}>
                                            <button type="button" class="btn btn-outline-success"
                                                style={{ padding: '5px 70px', margin: '0 auto', display: 'block' }}
                                                onClick={() => this.setState({ step: 4 })}
                                            >ادامه</button>
                                        </div>
                                    </div>
                                    : this.state.step === 4 ?
                                        <div className='payments' style={{ margin: '20px auto' }}>
                                            <h1 style={{ fontFamily: 'IRANSans', textAlign: 'center' }}> نحوه پرداخت </h1>

                                            <div style={{ margin: '0 auto', 
                                        display:'flex', flexDirection: 'column',
                                        alignItems: 'flex-end', }}>
                                                <div className="radioWrapperPayment" >
                                                    <div>
                                                        <label className="" for="exampleRadios1">
                                                            پرداخت در محل
                                                    </label>
                                                    </div>
                                                    <div style={{ marginLeft: '20px' }}>
                                                        <input className="" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    </div>
                                                </div>
                                                <div className="radioWrapperPayment" >
                                                    <div>
                                                        <label className="" for="exampleRadios2">
                                                            درگاه بانک
                                                    </label>
                                                    </div>
                                                    <div style={{ marginLeft: '20px' }}>
                                                        <input className="" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" />
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="button" class="btn btn-outline-success"
                                                style={{ padding: '5px 70px', margin: '0 auto', display: 'block' }}
                                                onClick={() => this.setState({ step: 5 })}
                                            >ادامه</button>

                                        </div> : <h1> سفارش شما با موفقیت ثبت گردید </h1>
                    }

                </div>
                {
                    this.state.mobileModalShow &&
                    <MobileModal close={this.closeModal} />
                }
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartPrice: state.cart.cartPrice,
    cartDiscount: state.cart.cartDiscount
})

const mapDispatchToProps = {
    add: addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);