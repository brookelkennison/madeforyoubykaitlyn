import React, { Component } from "react";

class Store extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            products: [],
            productName: "",
            productPrice: 0,
            productImage: "",
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
    handleChange(event, inputField) {
        this.setState({
            [inputField]: event.target.value,
        });
    }
    // needs work
    handleSubmit(event) {
        const payload = {
            'productName': this.state.productName,
            'productPrice': this.state.productPrice,
            'productImage': this.state.productImage
        }
        fetch("/products", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
                console.log("Data has been sent to the server");
            }).catch(() => {
                console.log("Internal server error");
            });
    }

    render() {
        // const products = this.state
        return (
            <div>
                <h1>Store</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        value={this.state.productName}
                        onChange={(event) =>
                            this.handleChange(event, "productName")
                        }
                    />
                    <label>Product Price:</label>
                    $
                    <input
                        type="number"
                        name="productPrice"
                        value={this.state.productPrice}
                        onChange={(event) =>
                            this.handleChange(event, "productPrice")
                        }
                    />
                    <label>Product Image:</label>
                    <input
                        type="file"
                        name="productImage"
                        accept="image/*"
                        value={this.state.productImage}
                        onChange={(event) =>
                            this.handleChange(event, "productImage")
                        }
                    />
                    <input type="submit" value="Submit" />
                </form>
                <h1>Products</h1>
                {this.state.products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.productName}</h2>
                        <p>${product.productPrice}.00</p>
                        {/* <img href={}/> */}
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
