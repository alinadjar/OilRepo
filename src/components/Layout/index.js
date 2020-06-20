
import React, { Component } from 'react';
import SidePanelBasket from '../SidePanel/Basket';
import SidePanelFilter from '../SidePanel/Filtering';
import SortingPanel from '../SidePanel/Sorting';
import { connect } from 'react-redux';


import './loader.css';

import ReduxToastr from 'react-redux-toastr'
import Spinner from '../Common/Spinner';





class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }





    render() {
        return (
            <React.Fragment>

                {this.props.children}



                {/* {this.props.isNowLoading &&
                    <div style={{ backgroundColor: '#3e85c7db', width: '100%', height: '100%', position: 'fixed', top: 0, opacity: 0.3, zIndex: 9999 }}>
                        <div className="loader"></div>
                    </div>
                } */}

                <Spinner LOADING={this.props.isNowLoading} />


                <SidePanelBasket />
                <SidePanelFilter />
                <SortingPanel />

                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="bottom-center"
                    getState={(state) => state.toastr || "hey... :)"} // This is the default
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    closeOnToastrClick={false}
                    showCloseButton={false}
                    progressBar
                    closeOnToastrClick />
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    isNowLoading: state.common.loading,
    showBasketSidePanel: state.common.showBasketPanel
})



export default connect(mapStateToProps, null)(Layout);