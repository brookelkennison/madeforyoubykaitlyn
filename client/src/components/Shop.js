import React, { Component } from 'react';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
        this.state = {
            productName: '',
            productPrice: 0,
            productImage: '',
            // products is a test
            products: []
        }
    };
    // change this to products
    componentDidMount() {
        fetch('/products')
            .then(res => res.json())
            .then(products => this.setState({ products }))
    };
    handleChange = (event, inputField) => {
        this.setState({
            [inputField]: event.target.value
        })
    };
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.productName);
        const productName = this.state.productName;
        return <p>{productName}</p>;
    }

    render() {
        return (
            <div>
                <h1>Shop</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Product Name:</p>
                    <input type="text" name="productName" value={this.state.productName} onChange={event => this.handleChange(event, 'productName')} />
                    <p>Product Price:</p>
            $<input type="number" name="productPrice" value={this.state.productPrice} onChange={event => this.handleChange(event, 'productPrice')} />
                    <p>Product Image:</p>
                    <input type="file" name="productImage" accept="image/*" value={this.state.productImage} onChange={event => this.handleChange(event, 'productImage')} />
                    <input type="submit" value="Submit" />
                </form>
                <h1>Products</h1>
                {this.state.products.map(product =>
                    <div key={product.id}>
                        <h2>{product.productName}</h2>
                        <p>${product.productPrice}.00</p>
                    </div>
                )}
            </div>
        )
    }
}


export default Shop;