import React, { Component } from 'react';
import Header from '../Header';

const $ = window.$;



class ContactUs extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}

    // }

    handlePreloader() {
        $('.preloader').fadeIn(2);
        if ($('.preloader').length) {
          $('.preloader').delay(700).fadeOut(500);
        }
      }

    componentDidMount() {


        // debugger;
        this.handlePreloader();
        
    }


    render() {
        return (
            <>
            <div className='preloader'></div>
                <Header />
                <div style={{marginTop: '150px'}}>
                    <h2>Contact Us page ....</h2>
                </div>
            </>
        );
    }
}

export default ContactUs;