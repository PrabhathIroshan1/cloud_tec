import React from 'react';
import ItemSummary from './ItemSummary';

const ItemList = () => {
    return (
        <div className="item-list section">
            <ItemSummary/>
            <ItemSummary/>
            <ItemSummary/>
        </div>
    )
}

export default ItemList;