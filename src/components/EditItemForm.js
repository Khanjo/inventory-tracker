import React from "react";
import PropTypes from "prop-types";
import ItemForms from "./ItemForms";

function EditItemForm(props) {
    const { item } = props;

    function handleEditItemFormSubmission(event) {
        event.preventDefault();
        props.onEditItem({
            name: event.target.name.value,
            description: event.target.description.value,
            quantity: parseInt(event.target.quantity.value),
            price: parseInt(event.target.price.value),
            id: item.id
        });
    }

    return (
        <React.Fragment>
            <ItemForms
                formSubmissionHandler={handleEditItemFormSubmission}
                buttonText="Update Item" />
        </React.Fragment>
    );
}

EditItemForm.propTypes = {
    item: PropTypes.object,
    onEditItem: PropTypes.func
};

export default EditItemForm;