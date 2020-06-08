"use strict";
import "./homeOrderListItem.sass";
import React from "react";

export class HomeOrderListItem extends React.Component {
    render() {
        const order = this.props.order;
        return (
            <div>
                <span className="home-row-id">{order.id}</span>
                <span className="home-row-name">{order.name}</span>
                <span className="home-row-food">{order.food}</span>
                <span className="home-row-num">{order.amount}</span>
            </div>
        );
    }
}