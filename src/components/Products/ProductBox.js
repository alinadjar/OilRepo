import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import MyToastText from '../Common/ToastText';

class ProductBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {

        const p = this.props.product;
        // console.log(p);
        // debugger;
        const toastrOptions = {
            timeOut: 4000,
            showCloseButton: false, // false by default
            closeOnToastrClick: false, // false by default, this will close the toastr when user clicks on it
            component: ( // this option will give you a func 'remove' as props
                <MyToastText />
            )
        }

        return (
            <div style={{ marginTop: '50px' }} onClick={() => { this.props.boxClick(p) }}>
                <div className='mmm'>
                    <span>
                        <button style={{  }}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (p.AvailableInStock) {
                                    this.props.add2Cart(p);
                                    this.props.writeToastText(`${p.Title} به سبد خرید اضافه شد`);
                                    toastr.success('+', toastrOptions);
                                }
                                else {
                                    this.props.writeToastText(`${p.Title} موجود نمیباشد`);
                                    toastr.error('+', toastrOptions);
                                }
                            }}
                        >
                            <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                        </button>
                    </span>
                    <div style={{ textDecoration: 'none', }}>
                        <div>
                            {/* <img src={require(`../../images/products/${p.PicName}`)} className='img-responsive' alt='some txt' /> */}
                            <img src={require(`../../images/products/7.jpg`)} className='img-responsive' alt='some txt' />
                            <span className='spanDiscount'>تخفیف {(p.Discount/p.Price)*100} %</span>
                            {
                                ! p.AvailableInStock &&
                                <img src={require('../../images/soldout.png')} alt='some txt' style={{ width: '100%', height: '100px', position: 'absolute', top: '20%', left: 0 }} />
                            }
                        </div>
                        <div className='bWrapper'>
                            <b>
                                <span style={{
                                    fontFamily: 'inherit',
                                    lineHeight: 1.5
                                }}>{p.Price - p.Discount} تومان</span>
                                {parseInt(p.Discount/p.Price)*100 > 0 && <small>{p.Price}</small>}
                                {/* <small>11,875</small> */}
                            </b>
                            <h4 style={{fontFamily: 'IRANSans'}}>{p.Title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductBox;