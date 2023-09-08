import React from "react";
import PropTypes from "prop-types";

function Item(props) {
    return (
        <React.Fragment>
            <div className="item" onClick={() => props.whenItemClicked(props.id)}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
            <hr />
        </React.Fragment>
    );
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenItemClicked: PropTypes.func
};

export default Item;