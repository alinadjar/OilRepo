import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleLeft, faSort, faFilter
} from '@fortawesome/free-solid-svg-icons'

import './productLayout.css';
import { connect } from 'react-redux';
import { addToCart } from '../../iRedux/Actions/cart_Actions';
import {
    setTextForToast, setCurrentCategory,
    toggleFilteringSidePanel, toggleSortingSidePanel
} from '../../iRedux/Actions/common';
import { loadData } from '../../iRedux/Actions/shop_Actions';
import { DataTypes } from '../../iRedux/Actions/types';
import CatProductBox from './CatProdBox';
import ProductModal from '../Common/ProductModal';


class SingleCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProductModal: false,
            selectedProduct: null,
            showOnly_InStock: false
        }
    }


    componentDidMount() {

        // console.log(this.props.match);

        if (this.props.match.params.catID) {
            this.props.setCurrentCategory(this.props.match.params.catID)
        } else {
            this.props.history.replace('/')
        }

        if (!this.props.products) {
            this.props.loadData(DataTypes.PRODUCTS);
            this.props.loadData(DataTypes.CATEGORIES);
        }
    }

    boxClickHandler = (p) => {
        this.setState({ showProductModal: true, selectedProduct: p });
    }

    closeModal = () => {
        this.setState({ showProductModal: false, selectedProduct: null });
    }


    render() {
        const catID = this.props.match.params.catID;
        const subcatID = this.props.match.params.subcatID;
        // debugger

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

                <Header />
                <div style={{ marginTop: '160px', backgroundColor: '#F8F9FA' }}>
                    <div className='d-lg-none d-block'>
                        <div className='row' style={{ fontFamily: 'IRANSans' }}>
                            <div className='col-6'>
                                <div className=' filterDiv' onClick={() => this.props.toggleFilteringSidePanel()}>
                                    <FontAwesomeIcon icon={faFilter} size="lg" style={{ color: '#007bFF', }} /><h5>فیلتر</h5>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className=' filterDiv' onClick={() => this.props.toggleSortingSidePanel()}>
                                    <FontAwesomeIcon icon={faSort} size="lg" style={{ color: '#007bFF', }} /><h5>مرتب سازی</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ margin: 0, }}>
                        <div className='col-12 col-md-12 col-lg-10' style={{ backgroundColor: '#FFF' }}>
                            <div className='row'>

                                {
                                    this.props.products != null &&
                                    this.props.products.map(p =>
                                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2 prodcat343" key={p.id}>
                                            <CatProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler} writeToastText={this.props.setTextForToast} />
                                        </div>
                                    )
                                }






                            </div>
                        </div>
                        <div className='col-12 col-md-0 col-lg-2 sideCat d-none d-lg-block' style={{ backgroundColor: '#DDD' }}>
                            <h4 style={{ textAlign: 'right', paddingTop: '20px', fontSize: '1.3rem' }}>دسته بندی ها</h4>
                            <ul style={{ listStyle: 'none', textAlign: 'right' }}>
                                <li><Link to='/categories/55/subcat/65487'>نوشابه</Link></li>
                                <li><Link to='/categories/55/subcat/65488'>آب</Link></li>
                                <li><Link to='/categories/55/subcat/65489'>چای و دمنوش</Link></li>
                                <li><Link to='/categories/55/subcat/65490'>ماء الشعیر</Link>ّ</li>
                            </ul>

                            <h4 style={{ textAlign: 'right', paddingTop: '20px', fontSize: '1.2rem' }}>فیلتر ها</h4>
                            <ul style={{ listStyle: 'none', textAlign: 'right' }}>
                                <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                                    <div style={this.state.showOnly_InStock ? styleRoundSelectorActive : styleRoundSelectorPassive}
                                        onClick={() => this.setState({ showOnly_InStock: !this.state.showOnly_InStock })}
                                    ><span style={Object.assign({
                                        backgroundColor: '#FFF',
                                        width: '0.6rem',
                                        height: '0.6rem',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        top: '0.3rem',
                                    }, this.state.showOnly_InStock ? { right: '0.3rem' } : { left: '0.3rem' })}></span></div>
                                    <span>فقط کالاهای موجود</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Footer />

                </div >
                {
                    this.state.showProductModal &&
                    <ProductModal close={this.closeModal} product={this.state.selectedProduct} add2Cart={this.props.addToCart} writeToastText={this.props.setTextForToast} />
                }
            </>
        );
    }
}

const mapStateToProps = (store) => ({
    products: store.shop.products
})

const mapDispatchToProps = {
    addToCart,
    setTextForToast,
    loadData,
    setCurrentCategory,
    toggleFilteringSidePanel,
    toggleSortingSidePanel
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleCategoryPage);