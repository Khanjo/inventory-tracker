import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function Inventory(props) {
    return (
        <React.Fragment>
            {props.itemList.map((item) =>
                <Item
                    whenItemClicked={props.onItemSelection}
                    name={item.name}
                    description={item.description}
                    quantity={item.quantity}
                    price={item.price}
                    id={item.id}
                    key={item.id} />
            )}
        </React.Fragment>
    );
}

Inventory.propTypes = {
    itemList: PropTypes.array,
    onItemSelection: PropTypes.func
};

export default Inventory;