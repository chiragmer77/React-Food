import React from 'react';
import LocationSearch from './components/locationSearch';

class Home extends React.Component {

	constructor(props) {
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
			cart: JSON.parse(localStorage.getItem('cart')) || [],
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

	addToCart = (product) => {
		const updatedCart = [...this.state.cart, product];

		// Update cart state
		this.setState({ cart: updatedCart }, () => {
			// Save updated cart data to localStorage
			localStorage.setItem('cart', JSON.stringify(updatedCart));
		});
	};

	calculateTotalPrice = () => {
		// Calculate the total price of items in the cart
		return this.state.cart.reduce((total, item) => total + item.itemPrice, 0);
	};

	render() {
		const { data, selectedCategory, selectedVendor, menuData, showLatestCategories, showMenuList } = this.state;
		// const totalCartPrice = this.calculateTotalPrice();

		return (
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
																						<button
																							className="btn btn-primary btn-sm"
																							onClick={(e) => {
																								e.preventDefault();
																								this.addToCart(item);
																							}}
																						>
																							Add To Cart
																						</button>

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
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	};
}

export default Home;