import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSortingSidePanel } from '../../../iRedux/Actions/common';

import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sidePanel.css';

class SortingPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
            showYesNoModal: false
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {

        // console.log('=========== ');
        // console.log('this.state.showPanel = '+ this.state.showPanel);
        // console.log('this.props.showPanelState = '+ nextProps.showPanelState);
        // console.log(this.state.showPanel !== nextProps.showPanelState)
        if (this.state.showPanel !== nextProps.showPanelState) {
            // debugger
            this.setState({ showPanel: !this.state.showPanel }, () => this.toggleSidePanel());
        }

    }


    toggleSidePanel = () => {

        const sidePanel = document.getElementById('sidePanel54f');
        // console.log(sidePanel);
        sidePanel.classList.toggle('isOpen');
        document.getElementById('backSidePanel54f').classList.toggle('isOpen');

        // this.setState({ showPanel: this.props.showPanelState });
        if (!sidePanel.classList.contains('isOpen')) {
            this.setState({ showPanel: !this.state.showPanel }, () => this.props.toggleSortingSidePanel());
        }
    }





    render() {
        return (
            <>
                <div id="backSidePanel54f" className="backSidePanel54f" onClick={this.toggleSidePanel}
                    style={{ backgroundColor: '#00000077', height: '100%', position: 'fixed', top: 0 }}>
                    <div className="sidePanel54f" id="sidePanel54f" style={{ height: '100%' }} onClick={(ev) => { ev.stopPropagation() }}>
                        <div style={{ height: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                                <div style={{ height: '8%', display: 'flex', alignItems: 'center', backgroundColor: '#FFF' }}>
                                    <div style={{ padding: '5px' }} onClick={this.toggleSidePanel}><span style={{ padding: '10px', cursor: 'pointer' }}>X</span></div>
                                    <div style={{ textAlign: 'center', width: '100%' }}>Title</div>
                                </div>
                                <div style={{ height: '70%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                    <ul style={{ backgroundColor: 'rgb(64,125,182)', padding: '0px 10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', listStyle: 'none', color: '#FFF', padding: '5px 0' }}>
                                        <li style={{ direction: 'rtl' }}>
                                            <span>تومان</span>
                                        </li>
                                        <li>
                                            میزان کل تخفیف
                                    </li>
                                    </ul>
                                    <ul style={{ overflow: 'auto', width: '100%', listStyle: 'none', overflowY: 'auto', padding: '10px 0' }}>
                                        <div>
                                            
                                        </div>
                                    </ul>
                                </div>
                                <div className='checkoutBox54f' style={{ width: '100%', height: '22%', padding: '10px' }}>
                                    <div>
                                        <textarea style={{ textAlign: 'right' }} className='form-control' placeholder='توضیحات سفارش خود را وارد کنید'></textarea>
                                    </div>
                                    <div style={{ fontSize: '1.1rem', display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                        
                                        <label className='btn' onClick={(ev) => {
                                            ev.stopPropagation();
                                            this.toggleSidePanel();
                                            this.props.history.push('/checkout')
                                        }}
                                            style={{ height: 'fit-content', width: '85%', paddingTop: '10px', paddingBottom: '10px !important', position: 'relative', backgroundColor: '#3cad2f', color: '#FFF' }}>
                                            <span style={{ fontSize: '0.8rem', marginRight: '-30px' }}>تایید و ثبت سفارش</span>                                            
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {
                    this.state.showYesNoModal &&
                    <YesNoModal
                        title='حذف سبد خرید'
                        bodyTxt='آیا اطمینان دارید؟'
                        yesTxt='بله'
                        noTxt='خیر'
                        yesFunc={() => {this.props.clearCart(); this.setState({ showYesNoModal: false }); }}
                        noFunc={() => this.setState({ showYesNoModal: false })}
                    />
                } */}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    showPanelState: state.common.showPanelSorting,
})

const mapDispatchToProps = {
    toggleSortingSidePanel,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SortingPanel));