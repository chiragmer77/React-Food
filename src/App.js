import React from 'react';
import LocationSearch from './components/locationSearch';
import Cart from './components/Cart';
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateItems } from "./actions";
class App extends React.Component {

	constructor(props) {
		console.log("...www",props);
		super(props);
		this.state = {
			searchQuery: '',
			data: null,
			selectedCategory: null,
			selectedVendor: null,
			menudata: null,
			showLatestCategories: false,
			showMenuList: false,
			searchInProgress: false,
			itemList: props.items
		};
	}

	toggleSearchInProgress = () => {
		this.setState((prevState) => ({
			searchInProgress: !prevState.searchInProgress,
		}));
	};

	handleCategorySelect = (categoryId) => {
		this.setState({ selectedCategory: categoryId, selectedVendor: null });
	};

	handleVendorSelect = (vendorId) => {
		this.setState({ selectedVendor: vendorId });
	};

	fetchData = () => {
		const apiUrl = 'https://main-apis.agreeablemoss-feb2263b.southeastasia.azurecontainerapps.io/main-api';
		const endpoint = '/menu-api/get-cat-vendor';
		const locationId = '641035';
		const radius = 5;
		const metric = 'km';
		const fullUrl = `${apiUrl}${endpoint}/${locationId}?radius=${radius}&metric=${metric}`;

		fetch(fullUrl)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ data, showLatestCategories: true, showMenuList: false });
				this.toggleSearchInProgress();
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};

	fetchMenuData = () => {
		const { selectedCategory, selectedVendor } = this.state;
		const vendorId = selectedVendor; // Replace this with the logic to get the selected vendor ID
		const zipCode = '641035'; // Replace this with the logic to get the zip code
		if (selectedCategory && selectedVendor) {
			const apiUrl = 'https://main-apis.agreeablemoss-feb2263b.southeastasia.azurecontainerapps.io';
			const endpoint = `/main-api/menu-api/get-menu/${vendorId}/${zipCode}`;
			// Construct the URL with selectedCategory and selectedVendor
			const fullUrl = `${apiUrl}${endpoint}`;

			fetch(fullUrl)
				.then((response) => response.json())
				.then((data) => {
					// Handle the fetched data here
					this.setState({ menuData: data, showLatestCategories: true, showMenuList: true });

					console.log('Fetched menu data:', data);
				})
				.catch((error) => {
					console.error('Error fetching menu data:', error);
				});
		} else {
			alert('Please select both category and vendor before searching.');
		}
	};

	handleClear = () => {
		this.setState({ selectedCategory: null, selectedVendor: null, menudata: null, showMenuList: false });
	};
	clickHandler = (e) => {
		console.log(e);
		// let totalPrice = 0;
		// const clickHandler = (e) => {
		//   let items = props.items.slice();
		//   items.map( (item) => {
		// 	if(item.id === e.id){
		// 	  item.selected = !item.selected;
		// 	}
		// 	return item;
		//   })
		//   props.updateItems(items);
		// }
		let items = this.state.itemList.slice();
		console.log("ss",items);
		items.map((item) => {
			if (item.id === e.id) {
				item.selected = !item.selected;
			}
			return item;
		})

		   .updateItems(items);
	}
	render() {
		const { data, selectedCategory, selectedVendor, menuData, showLatestCategories, showMenuList, itemList } = this.state;

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
						<div class="header__cart__price">item: <span>$150.0000</span></div>
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
										<li><a href="not-found"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
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

				<section class="hero">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div class="hero__search">
									<div class="hero__search__form">
										<form action="#">
											<LocationSearch
												onSearch={(query) => this.setState({ searchQuery: query })}
											/>
											<button
												type="submit"
												class="site-btn"
												onClick={(e) => {
													e.preventDefault();
													this.toggleSearchInProgress(); // Show the spinner
													this.fetchData(); // Perform the search
												}}
											>
												{this.state.searchInProgress ? (
													<div class="spinner-border" role="status">
														<span class="sr-only">Loading...</span>
													</div>
												) : (
													"SEARCH"
												)}
											</button>
										</form>

									</div>
									<div class="hero__search__phone">
										<div class="hero__search__phone__icon">
											<i class="fa fa-phone"></i>
										</div>
										<div class="hero__search__phone__text">
											<h5>1234567890</h5>
											<span>support 24/7 time</span>
										</div>
									</div>
								</div>
								{/* <div class="hero__item set-bg" data-setbg="assets/img/hero/banner.jpg">
                </div> */}
							</div>
							<div class="col-md-12 mt-2">
								<div class="latest-product__text">
									{showLatestCategories && (
										<div class="row categorymenu">
											<div class="col-md-12">
												<h4>Latest Categories</h4>
											</div>
											<div class="col-md-4">
												<div class="category-dropdown">
													<label htmlFor="categorySelect">Select Category:</label>  <br />
													<select
														id="categorySelect"
														value={selectedCategory || ''}
														onChange={(e) => this.handleCategorySelect(e.target.value)}
													>
														<option value="">Select</option>
														{data && data.category.map((category) => (
															<option
																key={category.categoryId}
																value={category.categoryId}
															>
																{category.name}
															</option>
														))}
													</select>
												</div>
											</div>
											<div class="col-md-4">
												<div class="vendors-list">
													<label htmlFor="vendorSelect">Select Vendor:</label> <br />
													<select
														id="vendorSelect"
														value={selectedVendor || ''}
														onChange={(e) => this.setState({ selectedVendor: e.target.value })}
													>
														<option value="">Select</option>
														{selectedCategory &&
															data &&
															data.category
																.find((category) => category.categoryId === selectedCategory)
																.vendors.map((vendor) => (
																	<option
																		key={vendor.vendorID}
																		value={vendor.vendorID}
																	>
																		{vendor.vendorName}
																	</option>
																))}
													</select>
												</div>
											</div>
											<div className="col-md-4">
												<button
													type="button"
													className="site-btn"
													onClick={this.fetchMenuData}
													disabled={!selectedCategory || !selectedVendor}
												>
													SEARCH MENU
												</button>

												<button
													type="button"
													className="site-btn-clear"
													onClick={this.handleClear}
												>
													CLEAR
												</button>
											</div>
										</div>
									)}


									{showMenuList && (
										<div className="row mt-4 categorymenu">
											<div class="col-md-12">
												<h4>Menu List</h4>
											</div>
											{menuData && menuData.menu.category.map((category, index) => (
												<div key={index} className="col-md-4 mb-4">
													<div className="card">
														<div class="card-header">
															<h5 >{category.categoryName}</h5>
														</div>
														<div className="card-body">
															<ul className="list-group list-group-flush">
																{category.subcategory.map((subCategory, subIndex) => (
																	<li key={subIndex} className="list-group-item">
																		<label htmlFor={`subcategory-${index}-${subIndex}`}>
																			{subCategory.categoryName}
																		</label>

																		{subCategory.items.map((item, itemIndex) => (
																			<div class="latest-product__slider">
																				<div class="latest-prdouct__slider__item">
																					<a class="latest-product__item" key={itemIndex}>
																						<div class="latest-product__item__pic">
																							<img src="assets/img/latest-product/lp-1.jpg" alt="" />
																						</div>
																						<div class="latest-product__item__text">
																							<h6>{item.itemName}</h6>
																							<span>$ {item.itemPrice}</span>
																						</div>
																					</a>
																					<hr />
																				</div>
																			</div>
																		))}
																	</li>
																))}
															</ul>
														</div>
													</div>
												</div>
											))}
										</div>
									)}

									{itemList && (
										// console.log("itemList",itemList)
										<div className="home">
											<Table striped bordered condensed hover>
												<thead>
													<tr>
														<th>#</th>
														<th>
															Name
														</th>
														<th>
															Price
														</th>
														<th>
															Remove to card
														</th>
													</tr>
												</thead>

												<tbody>
													{
														itemList.map((item, i) => {
															console.log(item, i)
															if (!item.selected) {
															// totalPrice += item.price;
															return (
																<tr key={item.id}>
																	<td>
																		{i + 1}
																	</td>
																	<td>
																		{item.name}
																	</td>
																	<td>
																		{item.totalPrice}
																	</td>
																	<td>
																		<Button bsStyle={item.selected ? "success" : "primary"} onClick={(e) => this.clickHandler(item)}>{item.selected ? "Remove" : "Add"}</Button>
																	</td>
																</tr>
															)
															}
														})
													}
													<tr>
														<th></th>
														<th>
															Total
														</th>
														<th colspan="2">
															{/* {totalPrice} */}
														</th>
													</tr>
												</tbody>

											</Table>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>


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
		)
	};
}
const mapStateToProps = state => ({
	items: state.dummy.items
})

export default connect(
	mapStateToProps, { updateItems }
)(App)

// export default App;