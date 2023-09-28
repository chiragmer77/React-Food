import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
// import store from '../store';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

class Headers extends Component {
  render() {
    return (
        <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i> react@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                                <a href="not-found"><i class="fa fa-facebook"></i></a>
                                <a href="not-found"><i class="fa fa-twitter"></i></a>
                                <a href="not-found"><i class="fa fa-linkedin"></i></a>
                                <a href="not-found"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                            <div class="header__top__right__auth">
                                <a href="not-found"><i class="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <a href="not-found" class="logo">React Food</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><a href="not-found">Home</a></li>
                            <li><a href="not-found">Shop</a></li>
                            <li><a href="not-found">Pages</a>
                                <ul class="header__menu__dropdown">
                                    <li><a href="not-found">Shop Details</a></li>
                                    <li><a href="not-found">Shoping Cart</a></li>
                                    <li><a href="not-found">Check Out</a></li>
                                    <li><a href="not-found">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="not-found">Blog</a></li>
                            <li><a href="not-found">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="not-found"><i class="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="not-found"><i class="fa fa-shopping-cart"></i> <span>3</span></a></li>
                        </ul>
                        <div class="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
   
    );
  };
}

export default Headers


/***************************************************************** */
