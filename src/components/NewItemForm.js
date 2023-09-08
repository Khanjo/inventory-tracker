import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ItemForms from "./ItemForms";

function NewItemForm(props) {

    function handleNewItemFormSubmission(event) {
        event.preventDefault();
        props.onNewItemCreation({
            name: event.target.name.value,
            description: event.target.description.value,
            quantity: parseInt(event.target.quantity.value),
            price: parseInt(event.target.price.value),
            id: v4()
        });
    }

    return (
        <React.Fragment>
            <ItemForms
                formSubmissionHandler={handleNewItemFormSubmission}
                buttonText="Add Item" />
        </React.Fragment>
    );
}

NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func
};

export default NewItemForm;