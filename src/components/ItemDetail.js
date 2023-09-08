import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
    const { item, onClickingDelete } = props;

    const reduceQuantity = (item, quantity) => {
        const currentQuantity = item.quantity;
        const newQuantity = currentQuantity - quantity;
        item.quantity = newQuantity;
        return item;
    };

    const handleReduceQuantity = () => {
        const newItem = reduceQuantity(item, 1);
        return newItem
    };

    return (
        <React.Fragment>
            <div className="details">
                <h1>{item.name}</h1>
                <p className="detaildescription"><em>{item.description}</em></p>
                <h3>{item.quantity}</h3>
                <h3>{item.price}</h3>
                <button onClick={handleReduceQuantity}>Sell Item</button>
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
    onClickingEdit: PropTypes.func
};

export default ItemDetail;