import React from "react";
import PropTypes from "prop-types";

function Item(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenItemClicked(props.id)}>
                <h3>{props.name}</h3>
                <p>{props.quantity}</p>
                <p>{props.price}</p>
            </div>
        </React.Fragment>
    );
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenTicketClicked: PropTypes.func
};

export default Item;