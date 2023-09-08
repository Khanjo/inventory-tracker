import React from "react";
import Inventory from "./Inventory";
import NewItemForm from "./NewItemForm";

class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newItemForm: false,
            mainItemList: [],
            selectedItem: null,
            editItemForm: false
        };
    }

    handleClick = () => {
        this.setState({ newItemForm: true });
    }

    render() {
        let currentlyVisibleState = null;
        let addItemButton = null;
        if (this.state.newItemForm) {
            currentlyVisibleState = <NewItemForm />
        } else {
            currentlyVisibleState = <Inventory itemList={this.state.mainItemList} />
            addItemButton = <button onClick={this.handleClick}>Add Item</button>
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                {addItemButton}
            </React.Fragment>
        )
    }
}

export default Store;