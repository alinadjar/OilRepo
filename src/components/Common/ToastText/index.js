import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyToastText extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{ fontFamily: 'IRANSans', fontSize:'0.7rem' }}>
                <span>{this.props.txt}</span>
            </div>
        );
    }
}

const mapStateToProps = (storeData) => ({
    txt: storeData.common.myToastText
})

export default connect(mapStateToProps, null)(MyToastText);