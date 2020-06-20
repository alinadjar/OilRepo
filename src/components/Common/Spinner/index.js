import React, { Component } from 'react';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.LOADING === true &&
                    <div style={{ backgroundColor: 'rgb(255,133,244)', width: '100%', height: '100%', position: 'fixed', top: 0, opacity: 0.6, zIndex: 9999 }}>
                        <div className="loader"></div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Spinner;