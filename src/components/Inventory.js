import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const itemList = [
    {
        name: 'Matcha',
        description: 'mellow vegetal grassy notes, natural sweet nuttiness, a touch of bitterness with a pleasant savory ending.',
        quantity: 130,
        price: 9.99
    }
];

function Inventory(props) {
    return (
        <React.Fragment>
            {itemList.map((item) =>
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