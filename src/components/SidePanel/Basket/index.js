import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sidePanel.css';

import { toggleBasketSidePanel } from '../../../iRedux/Actions/common';
import { addToCart, removeFromCart, clearCart } from '../../../iRedux/Actions/cart_Actions';

import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import CartItemBox from './CartItemBox';
import YesNoModal from '../../Common/YesNoModal';

class SidePanelBasket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
            showYesNoModal: false
        }
    }

    componentWillReceiveProps(nextProps) {

        // console.log('=========== ');
        // console.log('this.state.showPanel = '+ this.state.showPanel);
        // console.log('this.props.showPanelState = '+ nextProps.showPanelState);
        // console.log(this.state.showPanel !== nextProps.showPanelState)
        if (this.state.showPanel !== nextProps.showPanelState) {
            this.setState({ showPanel: !this.state.showPanel }, () => this.toggleSidePanel());
        }

    }


    toggleSidePanel = () => {

        const sidePanel = document.getElementById('sidePanel');
        // console.log(sidePanel);
        sidePanel.classList.toggle('isOpen');
        document.getElementById('backSidePanel').classList.toggle('isOpen');

        // this.setState({ showPanel: this.props.showPanelState });
        if (!sidePanel.classList.contains('isOpen')) {
            this.setState({ showPanel: !this.state.showPanel }, () => this.props.toggleBasketSidePanel());
        }
    }


    calculateTotalDiscount = () => {
        return this.props.cartItems.map(c => c.product.discount).reduce((a, b) => a + b, 0);
        // debugger;
        // return A.reduce((a, b) => a + b, 0)
    }


    render() {
        return (
            <>
                <div id="backSidePanel" className="backSidePanel" onClick={this.toggleSidePanel}
                    style={{ backgroundColor: '#00000077', height: '100%', position: 'fixed', top: 0 }}>
                    <div className="sidePanel" id="sidePanel" style={{ height: '100%' }} onClick={(ev) => { ev.stopPropagation() }}>
                        <div style={{ height: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                                <div style={{ height: '8%', display: 'flex', alignItems: 'center', backgroundColor: '#FFF' }}>
                                    <div style={{ padding: '5px' }} onClick={this.toggleSidePanel}><span style={{ padding: '10px', cursor: 'pointer' }}>X</span></div>
                                    <div style={{ textAlign: 'center', width: '100%' }}>Title</div>
                                </div>
                                <div style={{ height: '70%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                    <ul style={{ backgroundColor: 'rgb(64,125,182)', padding: '0px 10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', listStyle: 'none', color: '#FFF', padding: '5px 0' }}>
                                        <li style={{ direction: 'rtl' }}>
                                            <span>{this.props.cartDiscount}</span>
                                            <span>تومان</span>
                                        </li>
                                        <li>
                                            میزان کل تخفیف
                                    </li>
                                    </ul>
                                    <ul style={{ overflow: 'auto', width: '100%', listStyle: 'none', overflowY: 'auto', padding: '10px 0' }}>
                                        <div>
                                            {
                                                this.props.cartItems &&
                                                this.props.cartItems.map(c =>
                                                    <li style={{ borderBottom: '1px solid #e4dfdf' }} key={c.product.id}>
                                                        <CartItemBox cartItem={c}
                                                            add={this.props.addToCart}
                                                            remove={this.props.removeFromCart}
                                                        />
                                                    </li>
                                                )
                                            }
                                        </div>
                                    </ul>
                                </div>
                                <div className='checkoutBox' style={{ width: '100%', height: '22%', padding: '10px' }}>
                                    <div>
                                        <textarea style={{ textAlign: 'right' }} className='form-control' placeholder='توضیحات سفارش خود را وارد کنید'></textarea>
                                    </div>
                                    <div style={{ fontSize: '1.1rem', display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                        <label className='btn btn-danger' onClick={(ev) => { ev.stopPropagation(); alert('Ha....Success'); }}
                                            style={{ height: 'fit-content', width: '12%', paddingTop: '10px', paddingBottom: '10px !important' }}
                                            onClick={() => {
                                                this.setState({ showYesNoModal: true });
                                                // this.props.clearCart();
                                            }}>
                                            <span><FontAwesomeIcon icon={faTrashAlt} size='sm' style={{ color: '#FFF' }} /></span>
                                        </label>
                                        <label className='btn' onClick={(ev) => {
                                            ev.stopPropagation();
                                            this.toggleSidePanel();
                                            this.props.history.push('/checkout')
                                        }}
                                            style={{ height: 'fit-content', width: '85%', paddingTop: '10px', paddingBottom: '10px !important', position: 'relative', backgroundColor: '#3cad2f', color: '#FFF' }}>
                                            <span style={{ fontSize: '0.8rem', marginRight: '-30px' }}>تایید و ثبت سفارش</span>
                                            <span style={{ backgroundColor: '#166f16', borderRadius: '5px', position: 'absolute', left: '2%', fontSize: '0.8rem', padding: '2px 5px', direction: 'rtl' }}>
                                                <span>{this.props.cartPrice}</span>
                                                <span style={{ paddingRight: '8px' }}>تومان</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.showYesNoModal &&
                    <YesNoModal
                        title='حذف سبد خرید'
                        bodyTxt='آیا اطمینان دارید؟'
                        yesTxt='بله'
                        noTxt='خیر'
                        yesFunc={() => {this.props.clearCart(); this.setState({ showYesNoModal: false }); }}
                        noFunc={() => this.setState({ showYesNoModal: false })}
                    />
                }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    showPanelState: state.common.showBasketPanel,
    cartItems: state.cart.cart,
    cartPrice: state.cart.cartPrice,
    cartDiscount: state.cart.cartDiscount
})

const mapDispatchToProps = {
    toggleBasketSidePanel,
    addToCart,
    removeFromCart,
    clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SidePanelBasket));