import React, { Component } from 'react';


class Store extends Component {
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
            .then(res => {this.setState({
                product: res.product
            })})
    };
    handleChange = (event, inputField) => {
        console.log('hi')
        this.setState({
            [inputField]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('hi')

        var productName = this.state.productName
        this.setState(productName)
        fetch('/products', {
            method: 'POST',
            body: {
                'productName': productName
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Store</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>Product Name:</label>
                    <input type="text" name="productName" value={this.state.productName} onChange={event => this.handleChange(event, 'productName')} />
                    <label>Product Price:</label>
                    $<input type="number" name="productPrice" value={this.state.productPrice} onChange={event => this.handleChange(event, 'productPrice')} />
                    <label>Product Image:</label>
                    <input type="file" name="productImage" accept="image/*" value={this.state.productImage} onChange={event => this.handleChange(event, 'productImage')} />
                    <input type="submit" value="Submit" />
                </form>
                <h1>Products</h1>
                {this.state.products.map(product =>
                    <div key={product._id}>
                        <h2>{product.productName}</h2>
                        <p>${product.productPrice}.00</p>
                    </div>
                )}
            </div>
        )
    }
}


export default Store;