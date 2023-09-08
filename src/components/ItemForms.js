import React from "react";
import PropTypes from "prop-types";

function ItemForms(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name of tea" />
                <textarea
                    name="description"
                    placeholder="Enter a description for the tea" />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity in ounces" />
                <input
                    type="number"
                    name="price"
                    placeholder="Price /ounce" />
                <button type="submit">{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ItemForms.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
}

export default ItemForms;