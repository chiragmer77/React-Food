import React from 'react';
import { Link } from 'react-router-dom';



const Layout = ({ children }) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCartPrice = cart.reduce((total, item) => total + item.itemPrice, 0);
    return (
        <div class="MainDiv">
            <div class="humberger__menu__overlay"></div>
            <div class="humberger__menu__wrapper">
                <div class="humberger__menu__logo">
                    <a href="not-found" class="logo">V-Shop</a>
                </div>
                <div class="humberger__menu__cart">
                    <ul>
                        <li><a href="not-found"><i class="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="not-found"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div class="header__cart__price">item: <span>${totalCartPrice}</span></div>
                </div>
                <div class="humberger__menu__widget">
                    <div class="header__top__right__language">
                        <img src="public/assets/img/language.png" alt="" />
                        <div>English</div>
                        <span class="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="not-found">Spanis</a></li>
                            <li><a href="not-found">English</a></li>
                        </ul>
                    </div>
                    <div class="header__top__right__auth">
                        <a href="not-found"><i class="fa fa-user"></i> Login</a>
                    </div>
                </div>
                <nav class="humberger__menu__nav mobile-menu">
                    <ul>
                        <li class="active"><Link to="/"><a href="#">Home</a></Link></li>
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
                <div id="mobile-menu-wrap"></div>
                <div class="header__top__right__social">
                    <a href="not-found"><i class="fa fa-facebook"></i></a>
                    <a href="not-found"><i class="fa fa-twitter"></i></a>
                    <a href="not-found"><i class="fa fa-linkedin"></i></a>
                    <a href="not-found"><i class="fa fa-pinterest-p"></i></a>
                </div>
                <div class="humberger__menu__contact">
                    <ul>
                        <li><i class="fa fa-envelope"></i> therichposts@gmail.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>

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
                                <Link to="/"><a href="not-found" class="logo">React Food</a></Link>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <nav class="header__menu">
                                <ul>
                                    <Link to="/"><li class="active mr-5">Home</li></Link>
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
                                    <Link to="/checkout"><li><a href="#"><i class="fa fa-shopping-cart"></i> <span>{cart.length}</span></a></li></Link>
                                </ul>
                                <div class="header__cart__price">item: <span>${totalCartPrice}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>

            {/* Render the dynamic content */}
            <main>{children}</main>

            {/* Add a footer or other constant elements here */}
            <footer class="footer spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__about">
                                <div class="footer__about__logo">
                                    <a href="not-found" class="logo">React Food</a>
                                </div>
                                <ul>
                                    <li>Address: Gujarat</li>
                                    <li>Phone: 1234567890</li>
                                    <li>Email: reactFood@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div class="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><a href="not-found">About Us</a></li>
                                    <li><a href="not-found">About Our Shop</a></li>
                                    <li><a href="not-found">Secure Shopping</a></li>
                                    <li><a href="not-found">Delivery infomation</a></li>
                                    <li><a href="not-found">Privacy Policy</a></li>
                                    <li><a href="not-found">Our Sitemap</a></li>
                                </ul>
                                <ul>
                                    <li><a href="not-found">Who We Are</a></li>
                                    <li><a href="not-found">Our Services</a></li>
                                    <li><a href="not-found">Projects</a></li>
                                    <li><a href="not-found">Contact</a></li>
                                    <li><a href="not-found">Innovation</a></li>
                                    <li><a href="not-found">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button type="submit" class="site-btn">Subscribe</button>
                                </form>
                                <div class="footer__widget__social">
                                    <a href="not-found"><i class="fa fa-facebook"></i></a>
                                    <a href="not-found"><i class="fa fa-instagram"></i></a>
                                    <a href="not-found"><i class="fa fa-twitter"></i></a>
                                    <a href="not-found"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer__copyright">
                                <div class="footer__copyright__text"><p>
                                    Copyright &copy;2023 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="not-found" target="_blank">React food</a>
                                </p></div>
                                <div class="footer__copyright__payment"><img src="assets/img/payment-item.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;