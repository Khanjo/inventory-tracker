import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
    const { item, onClickingDelete, onClickingSell } = props;

    return (
        <React.Fragment>
            <div className="details">
                <h1>{item.name}</h1>
                <p className="detaildescription"><em>{item.description}</em></p>
                <h3>{item.quantity}</h3>
                <h3>{item.price}</h3>
                <button onClick={() => onClickingSell(item.id)}>Sell Item</button>
                <button onClick={props.onClickingEdit}>Update Item</button>
                <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
            </div>
            <hr />
        </React.Fragment>
    );
}

ItemDetail.propTypes = {
    item: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onClickingSell: PropTypes.func
};

export default ItemDetail;