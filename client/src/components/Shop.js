import React from 'react';
// import PropTypes from 'prop-types';

// function addProduct() {
//     console.log('hi');
// };

class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName: '',
            productPrice: 0,
            productImage: '',
        }
    };
    handleChange = (event, inputField) => {
        this.setState({
            [inputField]: event.target.value
        })
    };
    handleSubmit = event => {
        event.preventDefault();
    }
    
    render() {
      return (
    <div>
        <h1>Shop</h1>
        <form onSubmit={this.handleSubmit}>
            <p>Product Name:</p>
            <input type="text" name="productName" value={this.state.productName} onChange={event => this.handleChange(event, 'productName')}/>
            <p>Product Price:</p>
            $<input type="number" name="productPrice" value={this.state.productPrice} onChange={event => this.handleChange(event, 'productPrice')}/>
            <p>Product Image:</p>
            <input type="file" name="productImage" accept="image/*" value={this.state.productImage} onChange={event => this.handleChange(event, 'productImage')}/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
      )
    }
  }


  
 export default Shop;