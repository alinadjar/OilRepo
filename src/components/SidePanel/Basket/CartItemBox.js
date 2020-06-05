import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class CartItemBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const cartItem = this.props.cartItem;

        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                        <span>تومان</span>
                        <span> {cartItem.product.price - cartItem.product.discount} </span>
                    </div>
                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                            onClick={ () => this.props.add(cartItem.product) }
                        >
                            <FontAwesomeIcon icon={faPlus} size='sm' />
                        </button>
                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>{cartItem.quantity}</span>
                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                            onClick={ () => this.props.add(cartItem.product, -1) }
                        >
                            <FontAwesomeIcon icon={faMinus} size='sm' />
                        </button>
                    </div>
                </div>
                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                    <span>{cartItem.product.title}</span>
                </div>
                <div style={{ width: '25%' }}>
                    <img src={require(`../../../images/products/${cartItem.product.images[0].imageSrc}`)} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block' }} alt=''/>
                </div>
            </div>
        );
    }
}


export default CartItemBox;