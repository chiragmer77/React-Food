import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

export const withNavigation = (Component: Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            shippingAddress: '',
            paymentMethod: 'Credit Card',
            redirect: true
        };
    }
    addToCart = (product) => {
        const updatedCart = [...this.state.cart, product];
        this.setState({ cart: updatedCart }, () => {
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        });
    };

    removeFromCart = (productId) => {
        const updatedCart = this.state.cart.filter((item, index) => index !== productId);
        this.setState({ cart: updatedCart }, () => {
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        });
    };

    handleShippingChange = (e) => {
        this.setState({ shippingAddress: e.target.value });
    };

    handlePaymentChange = (e) => {
        this.setState({ paymentMethod: e.target.value });
    };

    handleCheckout = () => {
        alert('Order placed successfully!');
        localStorage.setItem('cart', JSON.stringify([]));
        this.props.navigate('/');
    };

    render() {
        const { cart } = this.state;
        const totalCartPrice = cart.reduce(
            (total, item) => total + item.itemPrice,
            0
        );

        if (cart.length === 0) {
            // Render a message when the cart is empty
            return <p className='text-center'>Your cart is empty.</p>;
        }

        return (
            <div>
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4>Cart</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{item.itemName}</td>
                                                <td>${item.itemPrice}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => this.removeFromCart(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <h5>Total Cart Price: ${totalCartPrice}</h5>
                                <h4 className='mt-5'>Checkout</h4>
                                <div>
                                    <h6 className='mt-3 mb-2'>Shipping Address</h6>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter shipping address"
                                        value={this.props.shippingAddress}
                                        onChange={this.props.handleShippingChange}
                                    />
                                </div>
                                <div>
                                    <h6 className='mt-3 mb-2'>Payment Method</h6>
                                    <select
                                        className="form-control"
                                        value={this.props.paymentMethod}
                                        onChange={this.props.handlePaymentChange}
                                    >
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="PayPal">PayPal</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={this.props.handleCheckout}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withNavigation(Checkout);