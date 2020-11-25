import React, { Component } from "react";

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }
    getProducts() {
        fetch("/products")
            .then((res) => res.json())
            .then((products) => this.setState({ products }));
    }
    componentDidMount() {
        this.getProducts();
    }
    render() {
        return (
            <div>
                <h1>Products</h1>
                {this.state.products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.productName}</h2>
                        <p>${product.productPrice}.00</p>
                        <button
                            className="snipcart-add-item"
                            data-item-name={product.productName}
                            data-item-price={product.productPrice}
                            data-item-id={product._id}
                            data-item-image={product.productImage}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Store;
