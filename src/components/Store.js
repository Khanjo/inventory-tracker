import React from "react";
import Inventory from "./Inventory";

class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            itemList: [],
            selectedItem: null
        };
    }
}

export default Store;