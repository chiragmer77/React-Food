import React, { Component } from 'react';
import LocationSearch from './locationSearch';

class SearchProduct extends Component {
    render() {
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
                                                                                    <Button bsStyle={item.selected ? "success" : "primary"} onClick={(e) => this.clickHandler(item)}>{item.selected ? "Remove" : "Add"}</Button>
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
    }
}

export default SearchProduct

{/* <section class="hero">
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
                                this.toggleSearchInProgress(); 
                                this.fetchData(); 
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
                                                                    <Button bsStyle={item.selected ? "success" : "primary"} onClick={(e) => this.clickHandler(item)}>{item.selected ? "Remove" : "Add"}</Button>
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
</section> */}