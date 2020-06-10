import React, { Component } from 'react';
import Header from '../Header';
class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Header />
                <div style={{marginTop: '150px'}}>
                    <h2>Contact Us page ....</h2>
                </div>
            </>
        );
    }
}

export default ContactUs;