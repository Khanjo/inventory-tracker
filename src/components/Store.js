import React from "react";
import Inventory from "./Inventory";
import NewItemForm from "./NewItemForm";
import EditItemForm from "./EditItemForm";

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
        if (this.state.selectedItem != null) {
            this.setState({
                newItemForm: false,
                selectedItem: null,
                editItemForm: false
            });
        } else {
            this.setState(prevState => ({
                newItemForm: !prevState.newItemForm
            }));
        }
    }

    handleAddingItem = (newItem) => {
        const newMainItemList = this.state.mainItemList.concat(newItem);
        this.setState({ mainItemList: newMainItemList, newItemForm: false });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editItemForm) {
            currentlyVisibleState = <EditItemForm item={this.state.selectedItem} onEditItem={this.handleEditingItem} />;
            buttonText = "Return to inventory";
        } else if (this.state.selectedItem != null) {

        } else if (this.state.newItemForm) {
            currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingItem} />;
            buttonText = "Return to inventory";
        } else {
            currentlyVisibleState = <Inventory itemList={this.state.mainItemList} onItemSelection={this.handleSelectedTicket} />;
            buttonText = "Add Item"
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        )
    }
}

export default Store;