import React from "react";
import Inventory from "./Inventory";
import NewItemForm from "./NewItemForm";
import EditItemForm from "./EditItemForm";
import ItemDetail from "./ItemDetail";

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

    handleSelectedItem = (id) => {
        const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
        this.setState({ selectedItem: selectedItem });
    }

    handleEditClick = () => {
        this.setState({ editItemForm: true });
    }

    handleEditingItem = (itemToEdit) => {
        const editedMainItemList = this.state.mainItemList
            .filter(item => item.id !== this.state.selectedItem.id)
            .concat(itemToEdit);
        this.setState({
            mainItemList: editedMainItemList,
            editItemForm: false,
            selectedItem: null
        });
    }

    handleDeletingItem = (id) => {
        const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
        this.setState({
            mainItemList: newMainItemList,
            selectedItem: null
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editItemForm) {
            currentlyVisibleState =
                <EditItemForm
                    item={this.state.selectedItem}
                    onEditItem={this.handleEditingItem} />;
            buttonText = "Return to inventory";
        } else if (this.state.selectedItem != null) {
            currentlyVisibleState =
                <ItemDetail
                    item={this.state.selectedItem}
                    onClickingDelete={this.handleDeletingItem}
                    onClickingEdit={this.handleEditClick} />;
            buttonText = "Return to inventory";
        } else if (this.state.newItemForm) {
            currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingItem} />;
            buttonText = "Return to inventory";
        } else {
            currentlyVisibleState =
                <Inventory
                    itemList={this.state.mainItemList}
                    onItemSelection={this.handleSelectedItem} />;
            buttonText = "Add Item";
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