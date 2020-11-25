import React from "react";
// import ReactDOM from "react-dom";

class EditProducts extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            productName: "",
            productPrice: 0,
            productImage: "",
        };
    }
    handleChange(event, inputField) {
        this.setState({
            [inputField]: event.target.value,
        });
    }
    // needs work
    handleSubmit(event) {
        const payload = {
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productImage: this.state.productImage,
        };
        fetch("/products", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                console.log("Data has been sent to the server");
            })
            .catch(() => {
                console.log("Internal server error");
            });
    }

    render() {
        // const products = this.state
        return (
            <div>
                <button>edit</button>
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
            </div>
        );
    }
}

export default EditProducts;
