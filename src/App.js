import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'

  	//Hide Loading Box (Preloader)
    function handlePreloader() {
      if($('.preloader').length){
        $('.preloader').delay(2000).fadeOut(500);
      }
    }

class App extends Component {



  componentDidMount() {
    $(window).on('load', function () {
      handlePreloader();
      // fixedNavStyle();
    });
  }


  render() {
    return (
      <div className="App">
        <div className='preloader'></div>
        <header className="">
          <h3 style={{ fontFamily: 'IRANSans' }}>عنوان تبرک </h3>
        </header>
      </div>
    );
  }
}

export default App;
